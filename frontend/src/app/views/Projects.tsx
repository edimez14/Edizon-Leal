import { motion } from "framer-motion";
import { Github, Globe } from "lucide-react";

export default function Projects() {
  return (
    <>
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-2">
          EXPERIMENTAL PROTOTYPES
        </h2>
        <p className="text-gray-400">
          Projects built to test limits. Not just functional, but engineered for
          scale.
        </p>
      </div>

      <div className="space-y-16">
        {/* Project 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8 items-center"
        >
          <div className="order-2 lg:order-1 bg-[#050505] border border-emerald-500/20 aspect-video flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-emerald-500/5 group-hover:bg-transparent transition-colors" />
            <h3 className="text-4xl font-black tracking-widest text-emerald-500/20 group-hover:text-emerald-500 transition-colors">
              NEON_RIFT
            </h3>
            <span className="absolute bottom-4 right-4 text-xs font-mono text-gray-600">
              Simulated 60fps
            </span>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-xs font-mono bg-emerald-500/10 text-emerald-500 px-3 py-1 border border-emerald-500/20">
              EXPERIMENTAL_PROTOTYPE
            </span>
            <h3 className="text-3xl font-bold text-white">NEON_RIFT</h3>
            <p className="text-gray-400 text-sm">
              Multiplayer Arena Shooter: Synchronizing 100 players in a
              high-mobility environment.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Redux (UDP)", "Redis", "Docker", "Node.js"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono border border-white/10 px-2 py-1 text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-gray-500">
                LATENCY REDUCTION
              </span>
              <span className="text-2xl font-bold text-emerald-500">48%</span>
            </div>
            <div className="flex gap-6 text-sm font-bold">
              <button className="flex items-center gap-2 hover:text-white transition-colors">
                <Github className="w-4 h-4" /> CODE
              </button>
              <button className="flex items-center gap-2 hover:text-white transition-colors">
                <Globe className="w-4 h-4" /> LIVE DEMO
              </button>
            </div>
          </div>
        </motion.div>

        {/* Project 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8 items-center"
        >
          <div className="space-y-6">
            <span className="text-xs font-mono bg-blue-500/10 text-blue-400 px-3 py-1 border border-blue-500/20">
              PERSONAL PROJECT
            </span>
            <h3 className="text-3xl font-bold text-white">VAULT_CORE</h3>
            <p className="text-gray-400 text-sm">
              Distributed Inventory System. Preventing race conditions in a
              high-frequency trading environment.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Go (Golang)", "PostgreSQL", "gRPC"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono border border-white/10 px-2 py-1 text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-gray-500">
                ZERO ITEM DUPLICATION
              </span>
              <span className="text-2xl font-bold text-blue-400">100%</span>
            </div>
            <div className="flex gap-6 text-sm font-bold">
              <button className="flex items-center gap-2 hover:text-white transition-colors">
                <Github className="w-4 h-4" /> CODE
              </button>
              <button className="flex items-center gap-2 hover:text-white transition-colors">
                <Globe className="w-4 h-4" /> LIVE DEMO
              </button>
            </div>
          </div>
          <div className="bg-[#050505] border border-white/10 aspect-video flex flex-col items-center justify-center relative overflow-hidden group">
            <h3 className="text-4xl font-black tracking-widest text-white/10 group-hover:text-white/40 transition-colors">
              VAULT_CORE
            </h3>
            <p className="text-xs font-mono text-gray-600 mt-2">
              INTERACTIVE ARCHITECTURE DIAGRAM
            </p>
            <span className="absolute bottom-4 right-4 text-xs font-mono text-gray-600">
              Simulated 60fps
            </span>
          </div>
        </motion.div>

        {/* Project 3 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8 items-center"
        >
          <div className="order-2 lg:order-1 bg-[#050505] border border-emerald-500/20 aspect-video flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-emerald-500/5 group-hover:bg-transparent transition-colors" />
            <h3 className="text-4xl font-black tracking-widest text-emerald-500/20 group-hover:text-emerald-500 transition-colors">
              NEON_RIFT
            </h3>
            <span className="absolute bottom-4 right-4 text-xs font-mono text-gray-600">
              Simulated 60fps
            </span>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-xs font-mono bg-emerald-500/10 text-emerald-500 px-3 py-1 border border-emerald-500/20">
              EXPERIMENTAL_PROTOTYPE
            </span>
            <h3 className="text-3xl font-bold text-white">NEON_RIFT</h3>
            <p className="text-gray-400 text-sm">
              Multiplayer Arena Shooter: Synchronizing 100 players in a
              high-mobility environment.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Redux (UDP)", "Redis", "Docker", "Node.js"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono border border-white/10 px-2 py-1 text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-gray-500">
                LATENCY REDUCTION
              </span>
              <span className="text-2xl font-bold text-emerald-500">48%</span>
            </div>
            <div className="flex gap-6 text-sm font-bold">
              <button className="flex items-center gap-2 hover:text-white transition-colors">
                <Github className="w-4 h-4" /> CODE
              </button>
              <button className="flex items-center gap-2 hover:text-white transition-colors">
                <Globe className="w-4 h-4" /> LIVE DEMO
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
