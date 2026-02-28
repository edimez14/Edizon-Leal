"use client";

import { motion } from "framer-motion";
import {
  Terminal,
  Activity,
  Globe,
  Database,
  Server,
  Box,
  Cpu,
  Crosshair,
} from "lucide-react";

// 1. Datos estáticos extraídos del componente para evitar re-creación en cada renderizado
const CORE_STACK = [
  {
    title: "Python (Django/DRF) & Rust (Axum)",
    desc: "Construcción de APIs REST y servicios backend.",
    icon: Terminal,
    iconColor: "text-emerald-500",
    neonStyle:
      "border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.15)] bg-emerald-500/[0.02]",
  },
  {
    title: "PostgreSQL & MongoDB",
    desc: "Modelado de datos relacionales y bases NoSQL.",
    icon: Database,
    iconColor: "text-blue-500",
    neonStyle:
      "border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.15)] bg-blue-500/[0.02]",
  },
  {
    title: "Docker",
    desc: "Contenedorización para entornos consistentes.",
    icon: Box,
    iconColor: "text-cyan-500",
    neonStyle:
      "border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.15)] bg-cyan-500/[0.02]",
  },
  {
    title: "Git & Fly.io",
    desc: "Control de versiones y despliegue de proyectos.",
    icon: Globe,
    iconColor: "text-purple-500",
    neonStyle:
      "border-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.15)] bg-purple-500/[0.02]",
  },
];

const GAME_STACK = [
  {
    title: "Godot Engine & GDScript",
    desc: "Desarrollo de prototipos y lógicas interactivas.",
    icon: Cpu,
    iconColor: "text-emerald-500",
    neonStyle:
      "border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.15)] bg-emerald-500/[0.02]",
  },
  {
    title: "Integración de Backend",
    desc: "Conexión de clientes de juego con APIs externas.",
    icon: Server,
    iconColor: "text-blue-500",
    neonStyle:
      "border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.15)] bg-blue-500/[0.02]",
  },
  {
    title: "Sistemas de Físicas",
    desc: "Manejo de colisiones y cinemática en el motor.",
    icon: Activity,
    iconColor: "text-yellow-500",
    neonStyle:
      "border-yellow-500/50 shadow-[0_0_20px_rgba(234,179,8,0.15)] bg-yellow-500/[0.02]",
  },
  {
    title: "Gestión de Escenas",
    desc: "Arquitectura basada en nodos y optimización.",
    icon: Box,
    iconColor: "text-cyan-500",
    neonStyle:
      "border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.15)] bg-cyan-500/[0.02]",
  },
];

export default function Stack() {
  return (
    <>
      <div className="w-full">
        {/* 2. Tipografía responsiva (text-xl en móvil, text-2xl en desktop) */}
        <h2 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 flex items-center gap-3">
          <Server className="text-emerald-500 shrink-0" />
          CORE_INFRASTRUCTURE
        </h2>

        <div className="space-y-4">
          {CORE_STACK.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }} // Entra un poco antes de verse
              className="relative flex items-center gap-4 p-4 bg-black border border-white/10 rounded-lg group transition-colors"
            >
              {/* 3. Aceleración por GPU con will-change para el efecto neon */}
              <div
                className={`absolute inset-[-1px] rounded-lg border opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100 will-change-opacity ${tech.neonStyle}`}
              />

              <div
                className={`relative z-10 p-3 bg-white/5 rounded-md shrink-0 transition-transform duration-300 group-hover:scale-110 will-change-transform ${tech.iconColor}`}
              >
                <tech.icon className="w-5 h-5" />
              </div>

              <div className="relative z-10 min-w-0">
                <h4 className="font-bold text-white text-sm truncate md:whitespace-normal">
                  {tech.title}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed mt-0.5">
                  {tech.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="w-full mt-10 lg:mt-0">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 flex items-center gap-3">
          <Crosshair className="text-emerald-500 shrink-0" />
          GAME_SYSTEMS
        </h2>

        <div className="space-y-4">
          {GAME_STACK.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative flex items-center gap-4 p-4 bg-black border border-white/10 rounded-lg group transition-colors"
            >
              <div
                className={`absolute inset-[-1px] rounded-lg border opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100 will-change-opacity ${tech.neonStyle}`}
              />

              <div
                className={`relative z-10 p-3 bg-white/5 rounded-md shrink-0 transition-transform duration-300 group-hover:scale-110 will-change-transform ${tech.iconColor}`}
              >
                <tech.icon className="w-5 h-5" />
              </div>

              <div className="relative z-10 min-w-0">
                <h4 className="font-bold text-white text-sm truncate md:whitespace-normal">
                  {tech.title}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed mt-0.5">
                  {tech.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
