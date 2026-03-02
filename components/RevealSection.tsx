"use client";

import React, { useEffect, useState } from "react";

interface RevealSectionProps {
  children: React.ReactNode;
  delay?: number;
}

export default function RevealSection({ children, delay = 0 }: RevealSectionProps) {
  const [visible, setVisible] = useState(false);
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setPrefersReduced(true);
      setVisible(true);
      return;
    }
    const t = window.setTimeout(() => setVisible(true), 80 + delay);
    return () => clearTimeout(t);
  }, [delay]);

  if (prefersReduced) {
    return <div>{children}</div>;
  }

  return (
    <div
      className="transition-[opacity,transform,filter] duration-700 ease-out will-change-[opacity,transform,filter]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        filter: visible ? "blur(0px)" : "blur(8px)",
      }}
    >
      {children}
    </div>
  );
}
