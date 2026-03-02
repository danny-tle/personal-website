"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import RevealSection from "@/components/RevealSection";

export default function AboutPage() {
  return (
    <div className="page-wrapper">
      <div className="page-container bg-white/0">
        <RevealSection delay={0}>
          {/* Navbar */}
          <div className="page-header mb-8">
            <h1 className="page-title">
              Danny Le
            </h1>
            <Navbar />
          </div>
        </RevealSection>

        <RevealSection delay={150}>
          {/* Introduction */}
          <div className="mb-6">
            <div className="section-heading">
              hello!
            </div>
          </div>
        </RevealSection>

        <RevealSection delay={300}>
          {/* Body */}
          <div className="space-y-6 text-slate-700">
            <p className="body-text">
              I am currently a Computer Science major, aiming for my Mathematics minor at
              the University of Utah. I have a passion for web/app development, UI/UX design,
              with backgrounds in Human Centered Design, Computer Vision, & Data Wrangling.
            </p>

            <p className="body-text">
            </p>

            <p className="body-text">
              There is much more I have to learn. I am always looking for opportunities to
              expand my skills and grow.{" "}
              <a
                href="mailto:dannyle4.contact@gmail.com"
                className="font-medium hover:underline"
              >
                You can connect with me at the following:
              </a>
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={450}>
          {/* Socials */}
          <footer className="mt-10 flex items-center gap-6">
            <a href="https://github.com/danny-tle" className="hover:opacity-80">
              <img src="/github.svg" alt="github" width={28} height={28} />
            </a>
            <a href="https://www.linkedin.com/in/dannyle4/" className="hover:opacity-80">
              <img src="/linkedin.svg" alt="linkedin" width={28} height={28} />
            </a>
          </footer>
        </RevealSection>
      </div>
    </div>
  );
}
