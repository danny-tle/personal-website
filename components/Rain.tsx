"use client";

import React, { useEffect, useState } from "react";

interface Flake {
  id: number;
  left: number;
  delay: number;
  duration: number;
  opacity: number;
  size: number;
}

export default function Snow() {
  const [flakes, setFlakes] = useState<Flake[]>([]);
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setPrefersReduced(true);
      return;
    }

    const generated: Flake[] = Array.from({ length: 70 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 5 + Math.random() * 5,
      opacity: 0.35 + Math.random() * 0.3,
      size: 4 + Math.random() * 6,
    }));

    setFlakes(generated);
  }, []);

  if (prefersReduced || flakes.length === 0) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ zIndex: 0 }}
    >
      {flakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake"
          style={{
            left: `${flake.left}%`,
            animationDelay: `${flake.delay}s`,
            animationDuration: `${flake.duration}s`,
            opacity: flake.opacity,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
          }}
        />
      ))}
    </div>
  );
}
