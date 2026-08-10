'use client';

import { useEffect, useRef } from 'react';

export default function WordPressRenderer({ html }: { html: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && !containerRef.current.shadowRoot) {
      const shadow = containerRef.current.attachShadow({ mode: 'open' });
      shadow.innerHTML = html;
    } else if (containerRef.current?.shadowRoot) {
      containerRef.current.shadowRoot.innerHTML = html;
    }
  }, [html]);

  return <div ref={containerRef} />;
}