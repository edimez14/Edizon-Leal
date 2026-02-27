"use client";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-start font-mono">
        {/* Identificador izquierdo */}
        <div className="flex items-center gap-2 font-bold text-white mt-1 text-lg">
          <Terminal className="w-5 h-5 text-emerald-500" />
          <span>EDIZON.LEAL</span>
        </div>

        {/* Navegación y estado derecho */}
        <div className="flex flex-col items-end gap-3">
          {/* Fila 1: Navegación */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-xs text-gray-400 tracking-widest">
            <a href="#core" className="hover:text-white transition-colors">
              CORE
            </a>
            <a href="#stack" className="hover:text-white transition-colors">
              STACK
            </a>
            <a
              href="#prototypes"
              className="hover:text-white transition-colors"
            >
              PROTOTYPES
            </a>
            <a href="#decisions" className="hover:text-white transition-colors">
              DECISIONS
            </a>
            <a
              href="#benchmarks"
              className="hover:text-white transition-colors"
            >
              BENCHMARKS
            </a>
            <a
              href="#initialize"
              className="hover:text-white transition-colors"
            >
              INITIALIZE
            </a>
          </nav>

          {/* Fila 2: Métricas */}
          <div className="flex items-center gap-6 text-[10px] md:text-xs tracking-wider text-gray-500">
            <div className="flex items-center gap-2">
              <span>STATUS:</span>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-emerald-500 font-bold">ONLINE</span>
              </div>
            </div>
            <span>
              LATENCY: <span className="text-emerald-500 font-bold">24ms</span>
            </span>
            <span>
              REGION: <span className="text-white font-bold">US-EAST-1</span>
            </span>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
