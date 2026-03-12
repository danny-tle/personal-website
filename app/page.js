"use client";

import { Radio_Canada, Noto_Sans } from "next/font/google";
import React, { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";

const radio = Radio_Canada({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
  <div className="page-wrapper">
    <div className="page-container bg-white/60">
      <div className="page-header mb-12">
          <h1 className="page-title">
            Danny Le
          </h1>
            <Navbar />
      </div>

      {/* WORK */}
      <section className="mb-14">
        <h2 className="section-heading">
          Experience
        </h2>

        <div className="section-body">
          <div>
            <p>
              Student Ambassador at {" "}
              <a href="https://adobe.ly/UofUtah" className="underline">
                Adobe
              </a>
            </p>
            <p className="text-slate-500"> Spring 2026</p>
          </div>
        </div>
      </section>

{/* PROJECTS */}
<section className="mb-14">
  <h2 className="section-heading">
    Personal Projects
  </h2>

  <div className="section-body space-y-8">
    {/* Manual Driving Simulator */}
    <div>
      <p className="project-title">Manual Driving Simulator</p>
      <p className="project-tech">
        C++, Qt, Qt Creator
      </p>
      <p className="project-desc">
        Desktop-based driving simulator allowing real-time control of steering,
        acceleration, and braking. Implemented event-driven input handling using
        Qt’s signal–slot system and structured the application with a model–view
        architecture to understand separation of physics logic, rendering, and
        user input.
      </p>
    </div>

    {/* Snake Client & Score Server */}
    <div>
      <p className="project-title">Snake Client &amp; Score Server</p>
      <p className="project-tech">
        C#, .NET, MVC, SQL Server, TCP/IP, HTTP
      </p>
      <p className="project-desc">
        Networked Snake game with a client–server architecture that records live
        game data to a SQL Server database. Built a lightweight HTTP server from
        scratch to render game history and statistics, applying MVC principles
        to separate networking, data models, and presentation logic.
      </p>
    </div>

    {/* Sprite Editor */}
    <div>
      <p className="project-title">Sprite Editor</p>
      <p className="project-tech">
        C++, Qt, Qt Creator, qmake
      </p>
      <p className="project-desc">
        Desktop sprite editor supporting multi-layer editing, per-pixel drawing
        tools, onion skinning, and frame-based animation. Designed an event-driven
        GUI using Qt’s signal–slot architecture and structured the project with
        a model–view design for maintainability and extensibility.
      </p>
    </div>

    {/* Personal Website */}
    <div>
      <p className="project-title">Personal Website</p>
      <p className="project-tech">
        Next.js, React, Tailwind CSS, TypeScript
      </p>
      <p className="project-desc">
        Developed a simple personal portfolio website using Next.js and Tailwind CSS to
        showcase projects and experience.
        </p>
    </div>
  </div>
</section>

      {/* Socials */}
      <footer className="pt-8 flex items-center gap-6">
        <a href="/MyResume.pdf" className="footer-link">Resume</a>
        <a href="https://github.com/danny-tle" className="footer-link">GitHub</a>
        <a href="https://www.linkedin.com/in/dannyle4/" className="footer-link">LinkedIn</a>
      </footer>
    </div>
  </div>
);

}
