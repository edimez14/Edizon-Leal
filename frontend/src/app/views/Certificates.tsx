"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, X, Terminal, Code, Cpu, ExternalLink } from "lucide-react";

type Certificate = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  desc: string;
  icon: React.ElementType;
  image: string;
  iconColor: string;
  neonStyle: string;
};

// 1. Datos estáticos extraídos del render para ahorrar memoria y evitar re-evaluaciones
const CERTS: Certificate[] = [
  {
    id: 1,
    title: "Fundamentos de Python 2",
    issuer: "Cisco Networking Academy",
    date: "May 2025",
    desc: "Conceptos avanzados de Python, estructuras de datos, programación orientada a objetos y resolución de problemas algorítmicos.",
    icon: Code,
    image: "/assets/data/certificado de fundamentos de python 2.pdf",
    iconColor: "text-emerald-500",
    neonStyle:
      "border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.15)] bg-emerald-500/[0.02]",
  },
  {
    id: 2,
    title: "JavaScript Essentials 2",
    issuer: "Cisco Networking Academy",
    date: "Jun 2025",
    desc: "Desarrollo avanzado, programación asíncrona, clases, objetos complejos y mejores prácticas en la web.",
    icon: Cpu,
    image: "/assets/data/certificado de javascript essentials 2.pdf",
    iconColor: "text-cyan-500",
    neonStyle:
      "border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.15)] bg-cyan-500/[0.02]",
  },
  {
    id: 3,
    title: "Fundamentos de Linux",
    issuer: "Cisco Networking Academy",
    date: "May 2025",
    desc: "Administración de sistemas, navegación por línea de comandos, gestión de permisos y control de procesos.",
    icon: Terminal,
    image: "/assets/data/certificado de fundamentos de linux.pdf",
    iconColor: "text-blue-500",
    neonStyle:
      "border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.15)] bg-blue-500/[0.02]",
  },
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <div className="w-full">
      {/* 2. Tipografía y márgenes responsivos */}
      <h2 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 flex items-center gap-3">
        <Award className="text-emerald-500 shrink-0" />
        CERTIFICATIONS
        <span className="h-px bg-white/10 flex-grow ml-2 md:ml-4" />
      </h2>

      {/* Grid adaptativo: 1 col móvil, 2 col tablet, 3 col desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {CERTS.map((cert, i) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1 }}
            className="relative p-5 md:p-6 bg-black border border-white/10 rounded-lg group transition-colors flex flex-col h-full"
          >
            {/* 3. Aceleración de GPU para el efecto hover */}
            <div
              className={`absolute inset-[-1px] rounded-lg border opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100 will-change-opacity ${cert.neonStyle}`}
            />

            <div className="relative z-10 flex-grow">
              <div
                className={`p-3 bg-white/5 rounded-md inline-block mb-3 md:mb-4 transition-transform duration-300 group-hover:scale-110 will-change-transform ${cert.iconColor}`}
              >
                <cert.icon className="w-5 h-5 md:w-6 md:h-6" />
              </div>

              <h3 className="font-bold text-white text-base md:text-lg mb-1 leading-tight">
                {cert.title}
              </h3>
              <p className="text-[10px] md:text-xs font-mono text-emerald-500 mb-2 md:mb-3">
                {cert.issuer} // {cert.date}
              </p>
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed mb-4 md:mb-6">
                {cert.desc}
              </p>
            </div>

            <div className="relative z-10 mt-auto pt-4 border-t border-white/10">
              <button
                onClick={() => setSelectedCert(cert)}
                className="flex items-center justify-between w-full text-[10px] md:text-xs font-bold text-gray-300 hover:text-white transition-colors group/btn py-1"
              >
                <span>VER_CREDENCIAL()</span>
                <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col max-h-[95vh] md:max-h-[90vh]"
            >
              <div className="flex items-center justify-between p-3 md:p-4 border-b border-white/10 bg-black shrink-0">
                <div className="flex items-center gap-2 font-mono text-[10px] md:text-xs text-emerald-500 truncate pr-4">
                  <Award className="w-4 h-4 shrink-0" />
                  <span className="truncate">
                    VALIDANDO_FIRMA: {selectedCert.title.toUpperCase()}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="text-gray-400 hover:text-white transition-colors p-2 md:p-1 shrink-0 bg-white/5 md:bg-transparent rounded-md md:rounded-none"
                >
                  <X className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>

              {/* Contenedor optimizado para renderizar PDFs en cualquier dispositivo */}
              <div className="bg-black/50 flex-grow h-[65vh] md:h-[75vh] relative overflow-hidden">
                <iframe
                  src={`${selectedCert.image}#view=FitH`}
                  title={selectedCert.title}
                  className="w-full h-full border-none"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
