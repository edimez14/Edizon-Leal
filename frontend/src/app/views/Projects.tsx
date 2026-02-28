"use client";

import { motion } from "framer-motion";
import { Github, Globe } from "lucide-react";

export default function Projects() {
  return (
    <div className="w-full">
      <div className="mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3">
          PROYECTOS DESTACADOS
        </h2>
        <p className="text-sm md:text-base text-gray-400 max-w-2xl leading-relaxed">
          Prototipos y aplicaciones construidos para resolver problemas
          concretos y explorar tecnologías.
        </p>
      </div>

      <div className="space-y-16 md:space-y-20 lg:space-y-24">
        {/* Proyecto 1: Generador de Contraseñas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center group"
        >
          {/* Contenedor de Imagen/Visual (Aparece abajo en móvil, izquierda en desktop) */}
          <div className="order-2 lg:order-1 bg-[#050505] border border-cyan-500/20 aspect-video flex items-center justify-center relative overflow-hidden rounded-lg">
            {/* IMAGEN DEL PROYECTO */}
            <img
              src="/assets/work_3.png"
              alt="Interfaz del Generador de Contraseñas"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-90 transition-opacity duration-500 will-change-opacity z-0"
            />

            {/* Efecto Neon Optimizado superpuesto */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[inset_0_0_50px_rgba(6,182,212,0.15)] bg-cyan-500/[0.03] will-change-opacity z-10" />
            <div className="absolute inset-0 bg-cyan-500/20 group-hover:bg-transparent transition-colors duration-500 will-change-[background-color] z-10" />

            {/* Texto decorativo (Se desvanece al hacer hover para ver la imagen) */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-widest text-cyan-500/60 group-hover:text-cyan-500/0 transition-colors duration-500 relative z-20 will-change-[color]">
              PASS_GEN
            </h3>
          </div>

          {/* Contenedor de Texto */}
          <div className="order-1 lg:order-2 space-y-4 md:space-y-6">
            <span className="inline-block text-[10px] md:text-xs font-mono bg-cyan-500/10 text-cyan-500 px-3 py-1 border border-cyan-500/20 rounded-sm">
              HERRAMIENTA_WEB
            </span>
            <h3 className="text-xl md:text-3xl font-bold text-white">
              Generador de Contraseñas
            </h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Una herramienta web segura para generar contraseñas aleatorias y
              robustas basadas en criptografía. Permite configurar longitud y
              tipos de caracteres para cumplir con estándares de seguridad.
            </p>
            <div className="flex flex-wrap gap-2">
              {["React", "Django", "Tailwind CSS", "Next.js"].map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] md:text-xs font-mono border border-white/10 px-2 py-1 text-gray-300 rounded-sm bg-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-[10px] md:text-xs font-mono text-gray-500">
                SEGURIDAD GARANTIZADA
              </span>
              <span className="text-xl md:text-2xl font-bold text-cyan-500">
                256-bit
              </span>
            </div>
            <div className="flex flex-wrap gap-4 md:gap-6 text-xs md:text-sm font-bold pt-2 md:pt-0">
              <a
                href="https://github.com/edimez14/password_generator"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors py-2 md:py-0"
                target="_blank"
              >
                <Github className="w-4 h-4" /> CÓDIGO
              </a>
              <a
                href="https://passwordgenerator-opal.vercel.app/"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors py-2 md:py-0"
                target="_blank"
              >
                <Globe className="w-4 h-4" /> DEMO
              </a>
            </div>
          </div>
        </motion.div>

        {/* Proyecto 2: Space Shooter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center group"
        >
          {/* Contenedor de Texto */}
          <div className="order-1 lg:order-1 space-y-4 md:space-y-6">
            <span className="inline-block text-[10px] md:text-xs font-mono bg-purple-500/10 text-purple-400 px-3 py-1 border border-purple-500/20 rounded-sm">
              DESARROLLO_DE_JUEGOS
            </span>
            <h3 className="text-xl md:text-3xl font-bold text-white">
              Space Shooter
            </h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Un arcade clásico 2D desarrollado desde cero. Implementa mecánicas
              de movimiento fluido, detección de colisiones optimizada, sistemas
              de partículas y gestión de puntuación.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Godot Engine", "GDScript", "Físicas 2D", "Game Loop"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="text-[10px] md:text-xs font-mono border border-white/10 px-2 py-1 text-gray-300 rounded-sm bg-white/5"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-[10px] md:text-xs font-mono text-gray-500">
                RENDIMIENTO
              </span>
              <span className="text-xl md:text-2xl font-bold text-purple-400">
                60 FPS
              </span>
            </div>
            <div className="flex flex-wrap gap-4 md:gap-6 text-xs md:text-sm font-bold pt-2 md:pt-0">
              <a
                href="https://github.com/edimez14/space-shooter"
                className="flex items-center gap-2 hover:text-purple-400 transition-colors py-2 md:py-0"
                target="_blank"
              >
                <Github className="w-4 h-4" /> CÓDIGO
              </a>
            </div>
          </div>

          {/* Contenedor de Imagen/Visual (Aparece abajo en móvil, derecha en desktop) */}
          <div className="order-2 lg:order-2 bg-[#050505] border border-purple-500/20 aspect-video flex items-center justify-center relative overflow-hidden rounded-lg">
            {/* IMAGEN DEL PROYECTO */}
            <img
              src="/assets/work_1.png"
              alt="Gameplay de Space Shooter"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-90 transition-opacity duration-500 will-change-opacity z-0"
            />

            {/* Efecto Neon Optimizado superpuesto */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[inset_0_0_50px_rgba(168,85,247,0.15)] bg-purple-500/[0.03] will-change-opacity z-10" />
            <div className="absolute inset-0 bg-purple-500/20 group-hover:bg-transparent transition-colors duration-500 will-change-[background-color] z-10" />

            {/* Texto decorativo (Se desvanece al hacer hover para ver la imagen) */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-widest text-purple-500/60 group-hover:text-purple-500/0 transition-colors duration-500 relative z-20 will-change-[color]">
              STELLAR_VOID
            </h3>

            <span className="absolute bottom-3 md:bottom-4 right-3 md:right-4 text-[10px] md:text-xs font-mono text-purple-500/50 z-20">
              v1.0.0
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
