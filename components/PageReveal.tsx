"use client";

import React, { useEffect, useState } from "react";

export default function PageReveal({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setShouldAnimate(false);
      setMounted(true);
      return;
    }

    const t = window.setTimeout(() => setMounted(true), 80);

    return () => clearTimeout(t);
  }, []);

  const base =
    "transition-[opacity,transform,filter] duration-700 ease-out will-change-transform will-change-opacity will-change-filter";

  const hidden = "opacity-0 -translate-y-3 blur-sm";
  const visible = "opacity-100 translate-y-0 blur-0";

  if (!shouldAnimate) {
    return <div className="opacity-100 translate-y-0 blur-0">{children}</div>;
  }

  return (
    <div className={`${base} ${mounted ? visible : hidden}`}>
      {children}
    </div>
  );
}
