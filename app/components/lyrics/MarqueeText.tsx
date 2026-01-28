"use client";

import { useEffect, useRef, useState } from "react";

type MarqueeTextProps = {
  text: string;
  fontSize?: string;
  fontWeight?: string;
};

export function MarqueeText({
  text,
  fontSize = "2.4rem",
  fontWeight = "normal",
}: MarqueeTextProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [shouldMarquee, setShouldMarquee] = useState(false);

  useEffect(() => {
    if (!wrapRef.current || !textRef.current) return;

    const wrapWidth = wrapRef.current.clientWidth;
    const textWidth = textRef.current.scrollWidth;

    setShouldMarquee(textWidth > wrapWidth);
  }, [text]);

  const duration = Math.max(text.length * 0.4, 14);

  return (
    <div
      ref={wrapRef}
      style={{
        width: "100%",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textAlign: "center",
      }}
    >
      <span
        ref={textRef}
        style={{
          display: "inline-block",
          whiteSpace: "nowrap",
          transform: "translateX(0)",
          fontSize,
          fontWeight,
          color: "rgba(255,255,255,0.75)",
          animationName: shouldMarquee ? "marquee" : "none",
          animationDuration: shouldMarquee ? `${duration}s` : "0s",
          animationTimingFunction: shouldMarquee ? "linear" : "ease",
          animationIterationCount: shouldMarquee ? "infinite" : "1",
          animationDelay: shouldMarquee ? "4s" : "0s",
          animationFillMode: "both",
        }}
      >
        {text}
      </span>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}
