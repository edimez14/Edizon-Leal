"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DjangoTerminal from "./DjangoTerminal";
import DockerTerminal from "./DockerTerminal";
import DeployTerminal from "./DeployTerminal";

const terminals = [DjangoTerminal, DockerTerminal, DeployTerminal];

export default function TerminalSlider() {
  const [index, setIndex] = useState(0);

  const handleComplete = () => {
    // Pausa de 3 segundos para visualizar el resultado antes de la transición
    // Ligeramente más largo para leer las confirmaciones finales
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % terminals.length);
    }, 3000);
  };

  const CurrentTerminal = terminals[index];

  return (
    // Altura del slider ajustada para contener las terminales de 400px + margen para indicadores
    <div className="relative w-full h-[450px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} // Elegant, fluid cubic-bezier
          className="absolute inset-0 w-full h-full"
        >
          <CurrentTerminal onComplete={handleComplete} />
        </motion.div>
      </AnimatePresence>
      
      {/* Indicadores de progreso elegantes */}
      <div className="absolute -bottom-6 left-0 right-0 flex justify-center gap-3">
        {terminals.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
              i === index ? "w-10 bg-emerald-500" : "w-4 bg-white/10"
            }`}
          />
        ))}
      </div>
    </div>
  );
}