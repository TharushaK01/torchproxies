"use client";

import { useEffect, useRef } from "react";

export default function PostContent({ html }: { html: string }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current) ref.current.innerHTML = html;
  }, [html]);

  return <div className="wp-post-content" ref={ref} />;
}
