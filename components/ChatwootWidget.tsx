"use client";

import React from "react";

// Extend global Window interface to prevent TypeScript errors
declare global {
  interface Window {
    chatwootSettings?: any;
    chatwootSDK?: any;
  }
}

class ChatwootWidget extends React.Component {
  componentDidMount() {
    window.chatwootSettings = {
      hideMessageBubble: false,
      position: "right",
      locale: "en",
      type: "standard",
      theme: "custom",
      color: "#FE4A01",
    };

    (function (d, t) {
      const BASE_URL = "https://chatwoot.trytorchlabs.com";
      const websiteToken = process.env.NEXT_PUBLIC_CHATWOOT_TOKEN;

      const g = d.createElement(t) as HTMLScriptElement,
        s = d.getElementsByTagName(t)[0] as any;
      g.src = BASE_URL + "/packs/js/sdk.js";
      s.parentNode.insertBefore(g, s);
      g.async = true;
      g.onload = function () {
        setTimeout(() => {
          if (window.chatwootSDK) {
            window.chatwootSDK.run({
              websiteToken: websiteToken,
              baseUrl: BASE_URL,
            });
          } else {
            console.error("Chatwoot SDK not available.");
          }
        }, 500);
      };
    })(document, "script");
  }

  render() {
    return null;
  }
}

export default ChatwootWidget;
