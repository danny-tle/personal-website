"use client";

import React, { useEffect, useState } from "react";

export default function PageReveal({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setPrefersReduced(true);
      setMounted(true);
      return;
    }
    const t = window.setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  if (prefersReduced) {
    return <div>{children}</div>;
  }

  return (
    <div
      style={{
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(-12px)",
        filter: mounted ? "blur(0px)" : "blur(16px)",
        transition: "opacity 700ms ease-out, transform 700ms ease-out, filter 700ms ease-out",
        willChange: "opacity, transform, filter",
      }}
    >
      {children}
    </div>
  );
}
