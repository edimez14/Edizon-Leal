"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  Activity,
  Globe,
  Database,
  Server,
  Zap,
  Shield,
  Github,
  Linkedin,
  Mail,
  Box,
  Layers,
  Cpu,
  Crosshair,
} from "lucide-react";
import Hero from "./views/Hero";
import TechnicalApproach from "./views/TechnicalApproach";
import Stack from "./views/Stack";

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
        <section className="mb-40" id="core">
          <TechnicalApproach />
        </section>

        {/* Core Infrastructure & Game Systems */}
        <section className="grid lg:grid-cols-2 gap-16 mb-40">
          <Stack />
        </section>

        {/* Experimental Prototypes */}
        <section className="mb-40">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">
              EXPERIMENTAL PROTOTYPES
            </h2>
            <p className="text-gray-400">
              Projects built to test limits. Not just functional, but engineered
              for scale.
            </p>
          </div>

          <div className="space-y-16">
            {/* Project 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-8 items-center"
            >
              <div className="order-2 lg:order-1 bg-[#050505] border border-emerald-500/20 aspect-video flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-emerald-500/5 group-hover:bg-transparent transition-colors" />
                <h3 className="text-4xl font-black tracking-widest text-emerald-500/20 group-hover:text-emerald-500 transition-colors">
                  NEON_RIFT
                </h3>
                <span className="absolute bottom-4 right-4 text-xs font-mono text-gray-600">
                  Simulated 60fps
                </span>
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <span className="text-xs font-mono bg-emerald-500/10 text-emerald-500 px-3 py-1 border border-emerald-500/20">
                  EXPERIMENTAL_PROTOTYPE
                </span>
                <h3 className="text-3xl font-bold text-white">NEON_RIFT</h3>
                <p className="text-gray-400 text-sm">
                  Multiplayer Arena Shooter: Synchronizing 100 players in a
                  high-mobility environment.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Redux (UDP)", "Redis", "Docker", "Node.js"].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono border border-white/10 px-2 py-1 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-gray-500">
                    LATENCY REDUCTION
                  </span>
                  <span className="text-2xl font-bold text-emerald-500">
                    48%
                  </span>
                </div>
                <div className="flex gap-6 text-sm font-bold">
                  <button className="flex items-center gap-2 hover:text-white transition-colors">
                    <Github className="w-4 h-4" /> CODE
                  </button>
                  <button className="flex items-center gap-2 hover:text-white transition-colors">
                    <Globe className="w-4 h-4" /> LIVE DEMO
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-8 items-center"
            >
              <div className="space-y-6">
                <span className="text-xs font-mono bg-blue-500/10 text-blue-400 px-3 py-1 border border-blue-500/20">
                  PERSONAL PROJECT
                </span>
                <h3 className="text-3xl font-bold text-white">VAULT_CORE</h3>
                <p className="text-gray-400 text-sm">
                  Distributed Inventory System. Preventing race conditions in a
                  high-frequency trading environment.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Go (Golang)", "PostgreSQL", "gRPC"].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono border border-white/10 px-2 py-1 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-gray-500">
                    ZERO ITEM DUPLICATION
                  </span>
                  <span className="text-2xl font-bold text-blue-400">100%</span>
                </div>
                <div className="flex gap-6 text-sm font-bold">
                  <button className="flex items-center gap-2 hover:text-white transition-colors">
                    <Github className="w-4 h-4" /> CODE
                  </button>
                  <button className="flex items-center gap-2 hover:text-white transition-colors">
                    <Globe className="w-4 h-4" /> LIVE DEMO
                  </button>
                </div>
              </div>
              <div className="bg-[#050505] border border-white/10 aspect-video flex flex-col items-center justify-center relative overflow-hidden group">
                <h3 className="text-4xl font-black tracking-widest text-white/10 group-hover:text-white/40 transition-colors">
                  VAULT_CORE
                </h3>
                <p className="text-xs font-mono text-gray-600 mt-2">
                  INTERACTIVE ARCHITECTURE DIAGRAM
                </p>
                <span className="absolute bottom-4 right-4 text-xs font-mono text-gray-600">
                  Simulated 60fps
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Engineering Decisions */}
        <section className="mb-40">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-white mb-2">
              ENGINEERING DECISIONS
            </h2>
            <p className="text-gray-400">
              Every choice has a cost. Here are the trade-offs I made.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b border-white/10 text-sm text-gray-500 font-mono">
                  <th className="py-4 font-normal">Context</th>
                  <th className="py-4 font-normal">Choice Made</th>
                  <th className="py-4 font-normal">Alternative</th>
                  <th className="py-4 font-normal">Rationale</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  {
                    ctx: "Real-time Player Position",
                    choice: "UDP (Custom Protocol)",
                    alt: "TCP / WebSockets",
                    rat: "TCP's overhead adds latency. For fast-paced games, old data is useless; we need fresh packets.",
                    highlight: true,
                  },
                  {
                    ctx: "Inventory Database",
                    choice: "PostgreSQL (Relational)",
                    alt: "MongoDB (NoSQL)",
                    rat: "ACID compliance was critical for virtual economy integrity. NoSQL flexibility was a risk for data consistency.",
                    highlight: true,
                  },
                  {
                    ctx: "Microservices Comm",
                    choice: "gRPC (Protobuf)",
                    alt: "REST (JSON)",
                    rat: "Reduced payload size by ~40% and strong typing contracts between services prevented integration bugs.",
                    highlight: true,
                  },
                ].map((row, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="py-6 font-bold text-white pr-4">
                      {row.ctx}
                    </td>
                    <td className="py-6 pr-4">
                      <span className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-3 py-1 text-xs font-mono border border-emerald-500/20">
                        <Zap className="w-3 h-3" /> {row.choice}
                      </span>
                    </td>
                    <td className="py-6 text-gray-500 pr-4">{row.alt}</td>
                    <td className="py-6 text-gray-400 leading-relaxed">
                      {row.rat}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* System Stress Testing & Benchmarks */}
        <section className="mb-32">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            System Stress Testing & Benchmarks
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="border border-white/10 p-8 flex flex-col items-center justify-center text-center bg-white/[0.01]"
            >
              <h3 className="text-5xl font-black text-white mb-2">25,000</h3>
              <p className="text-gray-400 font-bold mb-4">
                REQUESTS PER SECOND
              </p>
              <span className="text-xs font-mono bg-white/5 px-2 py-1 text-gray-500">
                Load Test (Apache Bench)
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="border border-emerald-500/30 p-8 flex flex-col items-center justify-center text-center bg-emerald-500/5 relative overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-emerald-500" />
              <h3 className="text-5xl font-black text-white mb-2">18ms</h3>
              <p className="text-gray-400 font-bold mb-4">P99 LATENCY</p>
              <span className="text-xs font-mono bg-emerald-500/10 px-2 py-1 text-emerald-500 border border-emerald-500/20">
                In-Region
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="border border-white/10 p-8 flex flex-col items-center justify-center text-center bg-white/[0.01]"
            >
              <h3 className="text-5xl font-black text-white mb-2">5,000/s</h3>
              <p className="text-gray-400 font-bold mb-4">DATABASE WRITES</p>
              <span className="text-xs font-mono bg-white/5 px-2 py-1 text-gray-500">
                Batch Insert Optimization
              </span>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
