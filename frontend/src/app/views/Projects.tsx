"use client";

import { motion } from "framer-motion";
import { Github, Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";

// Configuración estática de cada proyecto (visual, urls y colores no dependen del idioma)
const PROJECTS_STYLE = [
  {
    image: "/assets/work_3.png",
    alt: "Interfaz del Generador de Contraseñas",
    decorative: "PASS_GEN",
    cornerTag: null as string | null,
    imageOrder: "order-2 lg:order-1",
    textOrder: "order-1 lg:order-2",
    accentBorder: "border-cyan-500/20",
    neonGlow:
      "shadow-[inset_0_0_50px_rgba(6,182,212,0.15)] bg-cyan-500/[0.03]",
    tint: "bg-cyan-500/20",
    decorativeColor: "text-cyan-500/60 group-hover:text-cyan-500/0",
    badgeColor: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
    statColor: "text-cyan-500",
    linkColor: "hover:text-cyan-400",
    links: [
      { label: "code" as const, href: "https://github.com/edimez14/password_generator" },
      { label: "demo" as const, href: "https://passwordgenerator-opal.vercel.app/" },
    ],
  },
  {
    image: "/assets/work_4.png",
    alt: "Interfaz del Sistema ERP",
    decorative: "ERP_SYSTEM",
    cornerTag: null,
    imageOrder: "order-2 lg:order-2",
    textOrder: "order-1 lg:order-1",
    accentBorder: "border-cyan-500/20",
    neonGlow:
      "shadow-[inset_0_0_50px_rgba(6,182,212,0.15)] bg-cyan-500/[0.03]",
    tint: "bg-cyan-500/20",
    decorativeColor: "text-cyan-500/60 group-hover:text-cyan-500/0",
    badgeColor: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
    statColor: "text-cyan-500",
    linkColor: "hover:text-cyan-400",
    links: [
      { label: "demo" as const, href: "https://proposal-template-one.vercel.app/" },
    ],
  },
  {
    image: "/assets/work_5.png",
    alt: "Interfaz de la Plataforma de Aprendizaje Python",
    decorative: "PYQUEST",
    cornerTag: "v1.0",
    imageOrder: "order-2 lg:order-1",
    textOrder: "order-1 lg:order-2",
    accentBorder: "border-purple-500/20",
    neonGlow:
      "shadow-[inset_0_0_50px_rgba(168,85,247,0.15)] bg-purple-500/[0.03]",
    tint: "bg-purple-500/20",
    decorativeColor: "text-purple-500/60 group-hover:text-purple-500/0",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    statColor: "text-purple-400",
    linkColor: "hover:text-purple-400",
    links: [
      { label: "demo" as const, href: "https://pyquest-frontend-rose.vercel.app/" },
    ],
  },
];

export default function Projects() {
  const { t } = useLanguage();

  return (
    <div className="w-full">
      <div className="mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3">
          {t.projects.title}
        </h2>
        <p className="text-sm md:text-base text-gray-400 max-w-2xl leading-relaxed">
          {t.projects.subtitle}
        </p>
      </div>

      <div className="space-y-16 md:space-y-20 lg:space-y-24">
        {t.projects.list.map((project, i) => {
          const style = PROJECTS_STYLE[i];

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center group"
            >
              {/* Contenedor de Imagen/Visual */}
              <div
                className={`${style.imageOrder} bg-[#050505] ${style.accentBorder} aspect-video flex items-center justify-center relative overflow-hidden rounded-lg`}
              >
                <img
                  src={style.image}
                  alt={style.alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-90 transition-opacity duration-500 will-change-opacity z-0"
                />

                {/* Efecto Neon Optimizado superpuesto */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${style.neonGlow} will-change-opacity z-10`}
                />
                <div
                  className={`absolute inset-0 ${style.tint} group-hover:bg-transparent transition-colors duration-500 will-change-[background-color] z-10`}
                />

                {/* Texto decorativo (Se desvanece al hacer hover para ver la imagen) */}
                <h3
                  className={`text-2xl sm:text-3xl md:text-4xl font-black tracking-widest ${style.decorativeColor} transition-colors duration-500 relative z-20 will-change-[color]`}
                >
                  {style.decorative}
                </h3>

                {style.cornerTag && (
                  <span className="absolute bottom-3 md:bottom-4 right-3 md:right-4 text-[10px] md:text-xs font-mono text-purple-500/50 z-20">
                    {style.cornerTag}
                  </span>
                )}
              </div>

              {/* Contenedor de Texto */}
              <div className={`${style.textOrder} space-y-4 md:space-y-6`}>
                <span
                  className={`inline-block text-[10px] md:text-xs font-mono ${style.badgeColor} px-3 py-1 border rounded-sm`}
                >
                  {project.badge}
                </span>
                <h3 className="text-xl md:text-3xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
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
                    {project.statLabel}
                  </span>
                  <span
                    className={`text-xl md:text-2xl font-bold ${style.statColor}`}
                  >
                    {project.statValue}
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 md:gap-6 text-xs md:text-sm font-bold pt-2 md:pt-0">
                  {style.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className={`flex items-center gap-2 ${style.linkColor} transition-colors py-2 md:py-0`}
                      target="_blank"
                    >
                      {link.label === "code" ? (
                        <Github className="w-4 h-4" />
                      ) : (
                        <Globe className="w-4 h-4" />
                      )}{" "}
                      {link.label === "code"
                        ? t.projects.links.code
                        : t.projects.links.demo}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
