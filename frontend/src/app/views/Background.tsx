"use client";

import { useEffect, useRef } from "react";

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false }); // Optimización: alpha false mejora el rendimiento
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let packets: DataPacket[] = [];

    // Colores de la paleta (Esmeralda, Cian, Púrpura)
    const neonColors = ["#10b981", "#06b6d4", "#a855f7"];

    // Ajuste de tamaño y resolución corregido para evitar scroll horizontal
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    // --- CLASE NODO (HARDWARE DEVICE) ---
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      type: number; // Define qué dispositivo será

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        // Movimiento extremadamente sutil
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        // 6 Tipos: 0=DB, 1=PC/Monitor, 2=Móvil, 3=Laptop, 4=Mando, 5=Modem
        this.type = Math.floor(Math.random() * 6);
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Rebote suave en los bordes
        if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;
      }

      draw() {
        ctx!.save();
        ctx!.translate(this.x, this.y);
        ctx!.strokeStyle = "rgba(255, 255, 255, 0.25)"; // Color sutil del dispositivo
        ctx!.fillStyle = "rgba(255, 255, 255, 0.25)";
        ctx!.lineWidth = 1;

        ctx!.beginPath();

        // Dibujo optimizado a bajo nivel (Cero SVGs, máxima velocidad)
        switch (this.type) {
          case 0: // Base de Datos (Discos apilados)
            ctx!.ellipse(0, -3, 6, 2, 0, 0, Math.PI * 2);
            ctx!.ellipse(0, 0, 6, 2, 0, 0, Math.PI * 2);
            ctx!.ellipse(0, 3, 6, 2, 0, 0, Math.PI * 2);
            break;
          case 1: // PC / Monitor
            ctx!.rect(-7, -5, 14, 9);
            ctx!.moveTo(0, 4);
            ctx!.lineTo(0, 7);
            ctx!.moveTo(-4, 7);
            ctx!.lineTo(4, 7);
            break;
          case 2: // Móvil (Smartphone)
            ctx!.rect(-4, -6, 8, 12);
            ctx!.stroke();
            ctx!.beginPath();
            ctx!.arc(0, 4, 0.5, 0, Math.PI * 2);
            ctx!.fill();
            ctx!.beginPath(); // Reset para evitar rayones
            break;
          case 3: // Laptop
            ctx!.rect(-6, -4, 12, 7);
            ctx!.moveTo(-8, 3);
            ctx!.lineTo(8, 3);
            break;
          case 4: // Mando (Gamepad)
            ctx!.moveTo(-4, -3);
            ctx!.lineTo(4, -3);
            ctx!.arc(4, 0, 3, -Math.PI / 2, Math.PI / 2);
            ctx!.lineTo(-4, 3);
            ctx!.arc(-4, 0, 3, Math.PI / 2, -Math.PI / 2);
            ctx!.stroke();
            ctx!.beginPath();
            // D-Pad y botones
            ctx!.moveTo(-5, 0);
            ctx!.lineTo(-3, 0);
            ctx!.moveTo(-4, -1);
            ctx!.lineTo(-4, 1);
            ctx!.stroke();
            ctx!.beginPath();
            ctx!.arc(3, 0.5, 0.5, 0, Math.PI * 2);
            ctx!.arc(5, -0.5, 0.5, 0, Math.PI * 2);
            ctx!.fill();
            ctx!.beginPath();
            break;
          case 5: // Módem / Router
            ctx!.rect(-6, -3, 12, 6);
            ctx!.moveTo(-4, -3);
            ctx!.lineTo(-5, -6); // Antena 1
            ctx!.moveTo(4, -3);
            ctx!.lineTo(5, -6); // Antena 2
            ctx!.stroke();
            ctx!.beginPath();
            // Luces de estado
            ctx!.arc(-3, 0, 0.5, 0, Math.PI * 2);
            ctx!.arc(0, 0, 0.5, 0, Math.PI * 2);
            ctx!.arc(3, 0, 0.5, 0, Math.PI * 2);
            ctx!.fill();
            ctx!.beginPath();
            break;
        }

        ctx!.stroke();
        ctx!.restore();
      }
    }

    // --- CLASE PAQUETE DE DATOS (MANTENIDA EXACTAMENTE IGUAL) ---
    class DataPacket {
      p1: Particle;
      p2: Particle;
      progress: number;
      speed: number;
      color: string;

      constructor(p1: Particle, p2: Particle) {
        this.p1 = p1;
        this.p2 = p2;
        this.progress = 0;
        this.speed = Math.random() * 0.01 + 0.01;
        this.color = neonColors[Math.floor(Math.random() * neonColors.length)];
      }

      update() {
        this.progress += this.speed;
      }

      draw() {
        const currentX = this.p1.x + (this.p2.x - this.p1.x) * this.progress;
        const currentY = this.p1.y + (this.p2.y - this.p1.y) * this.progress;

        ctx!.beginPath();
        ctx!.arc(currentX, currentY, 2, 0, Math.PI * 2);
        ctx!.fillStyle = this.color;

        ctx!.fill();
        ctx!.beginPath();
        ctx!.arc(currentX, currentY, 4, 0, Math.PI * 2);
        ctx!.fillStyle = `${this.color}40`;
        ctx!.fill();
      }
    }

    // --- INICIALIZACIÓN ---
    const initParticles = () => {
      particles = [];
      packets = [];
      const particleCount = Math.min(
        Math.floor((window.innerWidth * window.innerHeight) / 15000),
        60,
      );

      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    // --- BUCLE DE RENDERIZADO ---
    const render = () => {
      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            // Las líneas un poco más visibles (0.2)
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 - dist / 750})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();

            if (Math.random() < 0.002 && packets.length < 25) {
              packets.push(new DataPacket(p1, p2));
            }
          }
        }
      }

      for (let i = packets.length - 1; i >= 0; i--) {
        packets[i].update();
        packets[i].draw();
        if (packets[i].progress >= 1) {
          packets.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    resize();
    window.addEventListener("resize", resize);
    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      // Se agrega 'block' y 'w-full h-full' para asegurar contención correcta en el layout
      className="fixed top-0 left-0 w-full h-full block z-[-1] pointer-events-none"
    />
  );
}
