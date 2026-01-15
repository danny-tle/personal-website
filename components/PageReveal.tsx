// app/components/PageReveal.tsx
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

  const base =
    "transition-[opacity,transform,filter] duration-700 ease-out will-change-transform will-change-opacity will-change-filter";
  const hidden = "opacity-0 -translate-y-3 blur-lg";
  const visible = "opacity-100 translate-y-0 blur-0";

  return <div className={`${base} ${mounted ? visible : hidden}`}>{children}</div>;
}
