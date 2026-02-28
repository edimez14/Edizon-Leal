"use client";

import React from "react";
import Hero from "./views/Hero";
import TechnicalApproach from "./views/TechnicalApproach";
import Stack from "./views/Stack";
import Projects from "./views/Projects";
import Certificates from "./views/Certificates";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-transparent text-gray-300 font-sans selection:bg-emerald-500/30">
      <main className="pt-24 md:pt-32 pb-16 md:pb-20 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-24 md:mb-32 lg:mb-40">
          <Hero />
        </section>

        {/* TechnicalApproach */}
        <section id="core" className="mb-24 md:mb-32 lg:mb-40">
          <TechnicalApproach />
        </section>

        {/* Core Infrastructure & Game Systems */}
        <section
          id="stack"
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-24 md:mb-32 lg:mb-40"
        >
          <Stack />
        </section>

        {/* Experimental Prototypes */}
        <section
          id="prototypes"
          className="relative mb-24 md:mb-32 lg:mb-40 py-16"
        >
          {/* Capa de aislamiento visual: Gradiente suave sin blur */}
          <div
            className="absolute inset-0 -mx-4 sm:-mx-8 lg:-mx-16 pointer-events-none z-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, #050505 15%, #050505 85%, transparent 100%)",
            }}
          />

          <div className="relative z-10">
            <Projects />
          </div>
        </section>

        {/* Certificates */}
        <section id="certificates" className="mb-24 md:mb-32 lg:mb-40">
          <Certificates />
        </section>
      </main>
    </div>
  );
}
