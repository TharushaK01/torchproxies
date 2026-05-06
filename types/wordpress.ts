export interface WPPost {
  id: number;
  slug: string;
  link: string;
  date: string;                        // "2026-01-15T10:30:00"
  title: {
    rendered: string;                  // HTML string
  };
  excerpt: {
    rendered: string;                  // HTML string
  };
  content: {
    rendered: string;                  // full post HTML
  };
  _embedded?: {
    "wp:featuredmedia"?: [{
      source_url: string;              // image URL
      alt_text: string;
    }];
    "wp:term"?: [WPCategory[]];        // [0] = categories, [1] = tags
    author?: [{
      name: string;
      avatar_urls: { "96": string };   // author avatar
    }];
  };
}

export interface WPCategory {
  id: number;
  name: string;
  slug: string;
}