"use client";
import { Terminal } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 bg-black">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 font-bold text-white text-lg">
            <Terminal className="w-5 h-5 text-emerald-500" />
            EDIZON.LEAL
          </div>
          <p className="text-gray-500 text-sm">
            Simulación de sistemas que escalan hacia el futuro.
          </p>
        </div>
        <div className="flex gap-8 font-mono text-sm font-bold text-gray-400">
          <a href="https://github.com/edimez14" className="hover:text-white transition-colors">
            GITHUB
          </a>
          <a href="https://www.linkedin.com/in/edizon-meza-leal-abb0361b9/" className="hover:text-white transition-colors">
            LINKEDIN
          </a>
          <a href="mailto:edimez14@gmail.com" className="hover:text-white transition-colors">
            EMAIL
          </a>
        </div>
        <div className="text-xs text-gray-600 font-mono">
          © 2024 - {new Date().getFullYear()} EDIZON.LEAL // ALL SYSTEMS OPERATIONAL
        </div>
      </div>
    </footer>
  );
}
