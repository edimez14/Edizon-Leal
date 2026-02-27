import { motion } from "framer-motion";
import { Layers, Shield, Zap } from "lucide-react";

export default function TechnicalApproach() {
  const cards = [
    {
      title: "Resiliencia",
      desc: "Manejo estructurado de errores y excepciones. Implementación de lógicas de recuperación básicas en proyectos para mantener la estabilidad ante fallos de integración.",
      icon: Shield,
      iconColor: "text-emerald-500",
      neonStyle: "border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.15)] bg-emerald-500/[0.02]",
    },
    {
      title: "Arquitectura Escalable",
      desc: "Desarrollo orientado a la modularidad y contenedorización. Simulación de entornos reales mediante Docker para estructurar aplicaciones listas para crecer.",
      icon: Layers,
      iconColor: "text-cyan-500",
      neonStyle: "border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.15)] bg-cyan-500/[0.02]",
    },
    {
      title: "Optimización",
      desc: "Análisis y reducción de latencia en la ruta petición-respuesta. Refactorización de código y estructuración eficiente de consultas a bases de datos.",
      icon: Zap,
      iconColor: "text-blue-500",
      neonStyle: "border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.15)] bg-blue-500/[0.02]",
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
        ENFOQUE_TÉCNICO
        <span className="h-px bg-white/10 flex-grow" />
      </h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative p-8 bg-black border border-white/10 rounded-lg group"
          >
            {/* Capa de renderizado aislada para el efecto neón.
              Acelerada por GPU mediante el cambio estricto de opacidad.
            */}
            <div
              className={`absolute inset-[-1px] rounded-lg border opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100 ${item.neonStyle}`}
            />

            <div className="relative z-10">
              <item.icon
                className={`w-8 h-8 mb-6 transition-transform duration-300 group-hover:-translate-y-1 ${item.iconColor}`}
              />
              <h3 className="text-xl font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}