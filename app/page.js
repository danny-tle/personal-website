"use client";

import Image from "next/image";
import { Radio_Canada, Noto_Sans } from "next/font/google";
import React, { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";

const radio = Radio_Canada({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
  <div className="w-full flex justify-center">
    <div className="w-full max-w-2xl px-6 py-20 bg-white/60">
      <div className="flex items-center justify-between mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Danny Le
          </h1>
            <Navbar />
      </div>

      {/* WORK */}
      <section className="mb-14">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-6">
          Experience
        </h2>

        <div className="space-y-6 text-sm text-slate-800">
          <div>
            <p>
              Currently building a website for{" "}
              <a href="" className="underline">
                Soup&Sip
              </a>
            </p>
            <p className="text-slate-500">Fall 2025 — Next.js, JavaScript, Tailwind</p>
          </div>


        </div>
      </section>

{/* PROJECTS */}
<section className="mb-14">
  <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-6">
    Personal Projects
  </h2>

  <div className="space-y-8 text-sm text-slate-800">
    {/* Manual Driving Simulator */}
    <div>
      <p className="font-medium">Manual Driving Simulator</p>
      <p className="mt-1 text-slate-500">
        C++, Qt, Qt Creator
      </p>
      <p className="mt-2 text-xs text-black leading-relaxed">
        Desktop-based driving simulator allowing real-time control of steering,
        acceleration, and braking. Implemented event-driven input handling using
        Qt’s signal–slot system and structured the application with a model–view
        architecture to understand separation of physics logic, rendering, and
        user input.
      </p>
    </div>

    {/* Snake Client & Score Server */}
    <div>
      <p className="font-medium">Snake Client &amp; Score Server</p>
      <p className="mt-1 text-slate-500">
        C#, .NET, MVC, SQL Server, TCP/IP, HTTP
      </p>
      <p className="mt-2 text-xs text-black leading-relaxed">
        Networked Snake game with a client–server architecture that records live
        game data to a SQL Server database. Built a lightweight HTTP server from
        scratch to render game history and statistics, applying MVC principles
        to separate networking, data models, and presentation logic.
      </p>
    </div>

    {/* Sprite Editor */}
    <div>
      <p className="font-medium">Sprite Editor</p>
      <p className="mt-1 text-slate-500">
        C++, Qt, Qt Creator, qmake
      </p>
      <p className="mt-2 text-xs text-black leading-relaxed">
        Desktop sprite editor supporting multi-layer editing, per-pixel drawing
        tools, onion skinning, and frame-based animation. Designed an event-driven
        GUI using Qt’s signal–slot architecture and structured the project with
        a model–view design for maintainability and extensibility.
      </p>
    </div>
  </div>
</section>



      {/* Socials */}
      <footer className="pt-8 flex items-center gap-6">
        <a href="/MyResume.pdf" className="text-sm hover:underline">Resume</a>
        <a href="https://github.com/danny-tle" className="text-sm hover:underline">GitHub</a>
        <a href="https://www.linkedin.com/in/dannyle4/" className="text-sm hover:underline">LinkedIn</a>
      </footer>
    </div>
  </div>
);

}
