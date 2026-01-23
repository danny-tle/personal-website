"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [hovered, setHovered] = useState<string | undefined>();
  
  const activeUnderlineStyle = {
  textDecoration: "underline",
  textUnderlineOffset: "0.35em",
  textDecorationThickness: "2px",
  textDecorationColor: "#1e3a8a",
};

  const itemBase = "text-right px-3 py-1 rounded-md transition-colors duration-150";
  const itemHover = "bg-black text-white";
  const itemNormal = "text-black";

  const itemActive = "bg-black text-white";

  return (
    <ul
      className="flex flex-col justify-end gap-1"
      onMouseLeave={() => setHovered(undefined)}
    >
      <li
        className={`${itemBase} ${
          pathname === "/" || hovered === "home" ? itemActive : itemNormal
        }`}
        onMouseEnter={() => setHovered("home")}
      >
        <a href="/">home</a>
      </li>

      <li
        className={`${itemBase} ${
          pathname === "/about" || hovered === "about" ? itemActive : itemNormal
        }`}
        onMouseEnter={() => setHovered("about")}
      >
        <a href="/about">about</a>
      </li>


      <li
        className={`${itemBase} flex items-center justify-end gap-2 ${
          pathname === "/resume" || hovered === "resume" ? itemActive : "text-mygray"
        }`}
        onMouseEnter={() => setHovered("resume")}
      >
        <a
          href="/MyResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <span className="text-right pr-1">resume</span>
          <img
            src="/resume.svg"
            alt="Download resume"
            className="w-5 h-5 transition-filter duration-150"
            style={{
              filter:
                hovered === "resume" || pathname === "/resume"
                  ? "none"
                  : "grayscale(100%) brightness(0) invert(0.7)",
            }}
          />
        </a>
      </li>
    </ul>
  );
}
