"use client";

/*import React, { useState, useEffect } from "react";*/
import { motion } from "framer-motion";

import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

import TerminalSlider from "../components/TerminalSlider";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Hero() {
  return (
    <>
      <motion.div initial="initial" animate="animate" variants={stagger}>
        <motion.h1
          variants={fadeIn}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Simulando <br />
          sistemas que <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
            escalan al futuro.
          </span>
        </motion.h1>
        <motion.p
          variants={fadeIn}
          className="text-lg md:text-xl text-gray-400 mb-10 max-w-lg border-l-2 border-emerald-500 pl-4"
        >
          Junior Backend Engineer enfocado en experimentación de alto
          rendimiento y arquitectura distribuida.
        </motion.p>
        <motion.div variants={fadeIn} className="flex flex-wrap gap-4 mb-16">
          <button className="flex items-center gap-2 bg-emerald-500 text-black px-6 py-3 font-bold text-sm tracking-wide hover:bg-emerald-400 transition-colors">
            REVIEW_RESEARCH <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href="/assets/data/curriculum edizon meza (es).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-white/20 px-6 py-3 font-bold text-sm tracking-wide text-white hover:bg-white/5 transition-colors"
          >
            DESCARGAR_CV <Download className="w-4 h-4" />
          </a>
        </motion.div>

        <motion.div
          variants={fadeIn}
          className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10"
        >
          <div>
            <p className="text-xs text-gray-500 mb-1 font-mono uppercase tracking-wider">
              Benchmarked_Latency
            </p>
            <p className="text-xl font-bold text-white">&lt; 30ms</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1 font-mono uppercase tracking-wider">
              Local_Cluster_Uptime
            </p>
            <p className="text-xl font-bold text-white">99.99%</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1 font-mono uppercase tracking-wider">
              Simulated_Throughput
            </p>
            <p className="text-xl font-bold text-emerald-500">100k+ REQ</p>
          </div>
        </motion.div>
      </motion.div>
      <TerminalSlider />
    </>
  );
}
