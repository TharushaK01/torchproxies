'use client';

import parse, { HTMLReactParserOptions, Element } from 'html-react-parser';
import DOMPurify from 'isomorphic-dompurify';

interface Props {
  rawHtml: string;
  className?: string;
}

export default function WordPressContent({ rawHtml, className = '' }: Props) {
  // 1. Sanitize the HTML string to prevent security vulnerabilities (XSS)
  const sanitizedHtml = DOMPurify.sanitize(rawHtml, {
    ADD_TAGS: ['iframe'], // Keeps embedded video/media working
    ADD_ATTR: ['target', 'allow', 'allowfullscreen', 'frameborder'],
  });

  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (domNode instanceof Element && domNode.tagName === 'link') {
        const href = domNode.attribs.href || '';

        // 1. Keep post-specific Elementor styles so layouts don't break
        if (href.includes('/elementor/css/post-')) {
          return;
        }

        // 2. Drop heavy global core styles and broken assets
        if (
          href.includes('elementor/assets/css') ||
          href.includes('wp-includes/css') ||
          href.includes('wp-content/themes')
        ) {
          return <></>;
        }
      }

      return undefined;
    },
  };

  return <div className={className}>{parse(sanitizedHtml, options)}</div>;
}