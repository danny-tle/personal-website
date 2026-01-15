"use client";

import React from "react";
import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-2xl px-6 py-20 bg-white/0">
        {/* Top row: name + navbar */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Danny Le
          </h1>
          <Navbar />
        </div>

        {/* Introduction */}
        <div className="mb-6">
          <div className="font-semibold text-sm uppercase tracking-wider text-slate-500">
            hello!
          </div>
        </div>

        {/* Body paragraphs — smaller + indented */}
        <div className="space-y-6 text-slate-700">
          <p className="text-sm pl-4 leading-relaxed">
            I am currently a Computer Science major, aiming for my Mathematics minor at 
            the University of Utah. I have a passion for web/app development, UI/UX design,
            with backgrounds in Human Centered Design, Computer Vision, & Data Wrangling.
          </p>

          <p className="text-sm pl-4 leading-relaxed">
          </p>

          <p className="text-sm pl-4 leading-relaxed">
            There is much more I have to learn. I am always looking for opportunities to 
            expand my skills and grow.{" "}
            <a
              href="mailto:youremail@example.com"
              className="font-medium hover:underline"
            >
              You can connect with me at the following:
            </a>
          </p>
        </div>

        {/* Socials */}
        <footer className="mt-10 flex items-center gap-6">
          <a href="https://github.com/danny-tle" className="hover:opacity-80">
            <img src="/github.svg" alt="github" width={28} height={28} />
          </a>
          <a href="https://www.linkedin.com/in/dannyle4/" className="hover:opacity-80">
            <img src="/linkedin.svg" alt="linkedin" width={28} height={28} />
          </a>
        </footer>
      </div>
    </div>
  );
}
