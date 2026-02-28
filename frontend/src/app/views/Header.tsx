"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "CORE", href: "#core" },
  { name: "STACK", href: "#stack" },
  { name: "PROTOTYPES", href: "#prototypes" },
  { name: "CERTIFICATES", href: "#certificates" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center md:items-start font-mono">
        {/* Identificador izquierdo */}
        <div className="flex items-center gap-2 font-bold text-white text-lg z-50">
          <Terminal className="w-5 h-5 text-emerald-500 shrink-0" />
          <span className="truncate">EDIZON.LEAL</span>
        </div>

        {/* Navegación y estado derecho (Desktop) */}
        <div className="hidden md:flex flex-col items-end gap-3">
          <nav className="flex items-center gap-4 lg:gap-6 text-xs text-gray-400 tracking-widest">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4 lg:gap-6 text-[10px] md:text-xs tracking-wider text-gray-500">
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
            <span className="hidden lg:inline">
              REGION: <span className="text-white font-bold">US-EAST-1</span>
            </span>
          </div>
        </div>

        {/* Toggle Menú Mobile */}
        <button
          className="md:hidden z-50 text-gray-400 hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Navegación y estado (Mobile) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0a] border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5 font-mono text-sm">
              <nav className="flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 hover:text-emerald-500 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              <div className="h-px bg-white/10 w-full" />

              <div className="flex flex-col gap-3 text-xs tracking-wider text-gray-500">
                <div className="flex items-center gap-2">
                  <span>STATUS:</span>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-emerald-500 font-bold">ONLINE</span>
                  </div>
                </div>
                <span>
                  LATENCY:{" "}
                  <span className="text-emerald-500 font-bold">24ms</span>
                </span>
                <span>
                  REGION:{" "}
                  <span className="text-white font-bold">US-EAST-1</span>
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
