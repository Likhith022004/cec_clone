"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    voiceflow?: {
      chat?: {
        load: (config: {
          verify: { projectID: string };
          url: string;
          voice: { url: string };
        }) => void;
      };
    };
  }
}

const WIDGET_ID = "voiceflow-chat-widget";
const PROJECT_ID = "6b027c648d6006f65a0d481d";

function loadChat() {
  window.voiceflow?.chat?.load({
    verify: { projectID: PROJECT_ID },
    url: "https://general-runtime.voiceflow.com",
    voice: { url: "https://runtime-api.voiceflow.com" },
  });
}

export function VoiceflowChat() {
  useEffect(() => {
    const existingScript = document.getElementById(WIDGET_ID);

    if (existingScript) {
      loadChat();
      return;
    }

    const script = document.createElement("script");
    script.id = WIDGET_ID;
    script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
    script.type = "text/javascript";
    script.onload = loadChat;
    document.body.appendChild(script);
  }, []);

  return null;
}
