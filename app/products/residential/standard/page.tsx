// import { getPostBySlug } from "@/lib/wordpress";
// import { notFound } from "next/navigation";

// interface PageProps {
//   params: {
//     slug: string;
//   };
// }

// export default async function ProductPage({ params }: PageProps) {
//   // 1. Get the slug from the URL (e.g., 'residential')
//   const { slug } = params;

//   // 2. Fetch the specific product/post from WordPress
//   const product = await getPostBySlug(slug);

// //   // 3. If no content is found, show the 404 page
//   if (!product) {
//     notFound();
//   }

// return (
//     <main className="container mx-auto px-4 py-20">
//       {/* This renders the Title from WordPress */}
//       <h1 className="text-4xl font-bold mb-6 text-white">
//         {product.title?.rendered}
//       </h1>

//       {/* This renders the Body Content from WordPress */}
//       <div 
//         className="prose prose-invert max-w-none text-gray-300"
//         dangerouslySetInnerHTML={{ __html: product.content?.rendered }} 
//       />
//     </main>
//   );
// }





import { getPostBySlug } from '@/lib/wordpress';
import { notFound } from 'next/navigation';

export default async function ProductPage({ params }: { params: { slug: string[] } }) {
  // Join the slug array into a single string
  const slug = params.slug.join('/');

  const post = await getPostBySlug(slug);

  if (!post) {
    notFound(); // Show 404 if page doesn't exist in WordPress
  }

  return (
    <article className="prose prose-invert max-w-none px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">{post.title.rendered}</h1>
      
      {/* Render WordPress content safely */}
      <div 
        className="wp-content"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }} 
      />
    </article>
  );
}

// Optional: Generate metadata
export async function generateMetadata({ params }: { params: { slug: string[] } }) {
  const slug = params.slug.join('/');
  const post = await getPostBySlug(slug);

  if (!post) return { title: 'Page Not Found' };

  return {
    title: post.title.rendered,
    description: post.excerpt?.rendered?.replace(/<[^>]+>/g, '') || '',
  };
}