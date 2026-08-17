"use client";

import dynamic from "next/dynamic";

// react-simple-maps renders to the DOM/canvas and fetches remote geo data,
// so there's no benefit to SSR-ing it — skip server rendering entirely.
// `ssr: false` is only allowed inside a Client Component, which is why
// this call lives in its own file instead of directly in app/page.tsx.
const GlobalNetwork = dynamic(() => import("@/components/home/GlobalNetwork"), {
  ssr: false,
  loading: () => <div className="min-h-[400px] w-full" />,
});

export default GlobalNetwork;