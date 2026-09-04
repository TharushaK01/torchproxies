import React from "react";
import { currentEnvs } from "./chatwoot.config";

class ChatwootWidget extends React.Component {
  componentDidMount() {
    window.chatwootSettings = {
      hideMessageBubble: false,
      position: "right",
      locale: "en",
      type: "standard",
    };

    (function (d, t) {
      const BASE_URL = "https://chatwoot.trytorchlabs.com";
      const websiteToken = currentEnvs.CHATWOOT_TOKEN;
      const g = d.createElement(t) as HTMLScriptElement,
        s = d.getElementsByTagName(t)[0] as any;
      g.src = BASE_URL + "/packs/js/sdk.js";
      s.parentNode.insertBefore(g, s);
      g.async = !0;
      g.onload = function () {
        setTimeout(() => {
          if (window.chatwootSDK) {
            window.chatwootSDK.run({
              websiteToken,
              baseUrl: BASE_URL,
            });
          } else {
            console.error("Chatwoot SDK not available.");
          }
        }, 500); // Delay to ensure everything is loaded
      };
    })(document, "script");
  }

  render() {
    return null;
  }
}
export default ChatwootWidget;
