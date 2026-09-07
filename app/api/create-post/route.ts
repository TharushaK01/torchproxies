import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';
import crypto from 'crypto';

interface CreatePostPayload {
  title: string;
  content: string;
  slug: string;
  status?: 'publish' | 'draft';
  categories?: number[];
  featuredMediaId?: number; // WP Attachment ID passed from Amasha's automation
}

function getAuthHeader(): string {
  const user = process.env.WP_USER;
  const pass = process.env.WP_APP_PASSWORD;

  if (!user || !pass) {
    throw new Error('WordPress API credentials missing in environment variables.');
  }

  const token = Buffer.from(`${user}:${pass.replace(/\s+/g, '')}`).toString('base64');
  return `Basic ${token}`;
}

function isValidSecret(providedSecret: string | null): boolean {
  const expectedSecret = process.env.PIPELINE_SECRET_KEY;
  if (!providedSecret || !expectedSecret) return false;

  const providedBuffer = Buffer.from(providedSecret);
  const expectedBuffer = Buffer.from(expectedSecret);

  if (providedBuffer.length !== expectedBuffer.length) return false;

  return crypto.timingSafeEqual(providedBuffer, expectedBuffer);
}

export async function POST(request: NextRequest) {
  try {
    // 1. Validate Secret Authorization Header from Amasha's automation
    const authHeader = request.headers.get('x-api-secret');
    if (!isValidSecret(authHeader)) {
      return NextResponse.json({ message: 'Unauthorized API Access' }, { status: 401 });
    }

    const body: CreatePostPayload = await request.json();

    // 2. Prepare payload for WordPress REST API
    const wpPayload = {
      title: body.title,
      content: body.content,
      slug: body.slug,
      status: body.status || 'publish',
      categories: body.categories || [],
      featured_media: body.featuredMediaId || 0, // Binds uploaded WP image
    };

    // 3. Post directly to WordPress REST API
    const wpResponse = await fetch(`${process.env.WORDPRESS_API_URL}/posts`, {
      method: 'POST',
      headers: {
        'Authorization': getAuthHeader(),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(wpPayload),
    });

    if (!wpResponse.ok) {
      const errorText = await wpResponse.text();
      return NextResponse.json(
        { message: 'WordPress submission failed', error: errorText },
        { status: wpResponse.status }
      );
    }

    const wpPost = await wpResponse.json();

    // 4. Trigger On-Demand ISR Cache Invalidation
    revalidateTag('posts', { expire: 0 });
    revalidatePath('/blog', 'page');
    revalidatePath(`/blog/${wpPost.slug}`, 'page');
    revalidatePath('/', 'page');

    return NextResponse.json({
      success: true,
      postId: wpPost.id,
      slug: wpPost.slug,
      link: wpPost.link,
      revalidatedAt: Date.now(),
    });

  } catch (err: any) {
    return NextResponse.json(
      { message: 'Internal Server Error', error: err.message },
      { status: 500 }
    );
  }
}