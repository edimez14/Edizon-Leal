"use client";

import React, { useState, useEffect } from "react";
import Hero from "./views/Hero";
import TechnicalApproach from "./views/TechnicalApproach";
import Stack from "./views/Stack";
import Projects from "./views/Projects";
import EngineeringDecisions from "./views/EngineeringDecisions";
import SystemTest from "./views/SystemTest";

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-300 font-sans selection:bg-emerald-500/30">
      <main className="pt-32 pb-20 max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <section className="grid lg:grid-cols-2 gap-16 items-center mb-40">
          <Hero />
        </section>

        {/* TechnicalApproach */}
        <section id="core" className="mb-40">
          <TechnicalApproach />
        </section>

        {/* Core Infrastructure & Game Systems */}
        <section id="stack" className="grid lg:grid-cols-2 gap-16 mb-40">
          <Stack />
        </section>

        {/* Experimental Prototypes */}
        <section id="prototypes" className="mb-40">
          <Projects />
        </section>

        {/* Engineering Decisions */}
        <section id="decisions" className="mb-40">
          <EngineeringDecisions />
        </section>

        {/* System Stress Testing & Benchmarks */}
        <section id="benchmarks" className="mb-32">
          <SystemTest />
        </section>
      </main>
    </div>
  );
}
