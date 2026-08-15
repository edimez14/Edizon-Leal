"use client";

import { motion } from "framer-motion";
import { ChevronRight, Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <div className="w-full">
      <div className="mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3">
          {t.experience.title}
        </h2>
        <p className="text-sm md:text-base text-gray-400 max-w-2xl leading-relaxed">
          {t.experience.subtitle}
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center group"
      >
        {/* Contenedor de Logo (Aparece abajo en móvil, izquierda en desktop) */}
        <div className="order-2 lg:order-1 bg-[#050505] border border-cyan-500/20 aspect-video flex items-center justify-center relative overflow-hidden rounded-lg">
          <img
            src="/assets/intouchcx.png"
            alt="IntouchCX"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-contain p-10 md:p-16 opacity-70 group-hover:opacity-100 transition-opacity duration-500 will-change-opacity z-0"
          />

          {/* Efecto Neon Optimizado superpuesto */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[inset_0_0_50px_rgba(6,182,212,0.15)] bg-cyan-500/[0.03] will-change-opacity z-10" />
          <div className="absolute inset-0 bg-cyan-500/20 group-hover:bg-transparent transition-colors duration-500 will-change-[background-color] z-10" />

          <span className="absolute bottom-3 md:bottom-4 right-3 md:right-4 text-[10px] md:text-xs font-mono text-cyan-500/50 z-20">
            {t.experience.cornerTag}
          </span>
        </div>

        {/* Contenedor de Texto */}
        <div className="order-1 lg:order-2 space-y-4 md:space-y-6">
          <span className="inline-block text-[10px] md:text-xs font-mono bg-cyan-500/10 text-cyan-500 px-3 py-1 border border-cyan-500/20 rounded-sm">
            {t.experience.badge}
          </span>
          <h3 className="text-xl md:text-3xl font-bold text-white">
            {t.experience.roleTitle}
          </h3>
          <p className="text-[11px] md:text-xs font-mono text-emerald-500">
            {t.experience.company}
          </p>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            {t.experience.intro}
          </p>
          <ul className="space-y-2 md:space-y-3">
            {t.experience.achievements.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-gray-400 text-sm md:text-base leading-relaxed"
              >
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-cyan-500 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {t.experience.tags.map((tag) => (
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
              {t.experience.statLabel}
            </span>
            <span className="text-xl md:text-2xl font-bold text-cyan-500">
              {t.experience.statValue}
            </span>
          </div>
          <div className="flex flex-wrap gap-4 md:gap-6 text-xs md:text-sm font-bold pt-2 md:pt-0">
            <a
              href="https://intouchcx.com/"
              className="flex items-center gap-2 hover:text-cyan-400 transition-colors py-2 md:py-0"
              target="_blank"
            >
              <Globe className="w-4 h-4" /> {t.experience.linkLabel}
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
