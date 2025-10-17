'use client'
import { useEffect, useRef } from "react";

const useTradingViewWidget = (
  scriptUrl: string,
  config: Record<string, unknown>,
  height: number | string = 600
) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // If already loaded, skip
    if (el.dataset.loaded === "true") return;

  // Normalize height to CSS string
  const heightCss = typeof height === 'number' ? `${height}px` : height;

  // Create the placeholder widget container the embed script expects
  el.innerHTML = `<div class="tradingview-widget-container__widget" style="width: 100%; height: ${heightCss};"></div>`;

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = scriptUrl;
    // TradingView embed widgets accept a JSON blob inside the script tag when using their external embed URL
    script.text = JSON.stringify(config);

    el.appendChild(script);
    el.dataset.loaded = "true";

    return () => {
      if (el) {
        el.innerHTML = "";
        delete el.dataset.loaded;
      }
    };
  }, [scriptUrl, JSON.stringify(config), height]);

  return containerRef;
};

export default useTradingViewWidget;