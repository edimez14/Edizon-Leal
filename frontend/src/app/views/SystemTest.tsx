import { motion } from "framer-motion";

export default function SystemTest() {
  return (
    <>
      <h2 className="text-3xl font-bold text-white mb-12 text-center">
        System Stress Testing & Benchmarks
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="border border-white/10 p-8 flex flex-col items-center justify-center text-center bg-white/[0.01]"
        >
          <h3 className="text-5xl font-black text-white mb-2">25,000</h3>
          <p className="text-gray-400 font-bold mb-4">REQUESTS PER SECOND</p>
          <span className="text-xs font-mono bg-white/5 px-2 py-1 text-gray-500">
            Load Test (Apache Bench)
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="border border-emerald-500/30 p-8 flex flex-col items-center justify-center text-center bg-emerald-500/5 relative overflow-hidden"
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-emerald-500" />
          <h3 className="text-5xl font-black text-white mb-2">18ms</h3>
          <p className="text-gray-400 font-bold mb-4">P99 LATENCY</p>
          <span className="text-xs font-mono bg-emerald-500/10 px-2 py-1 text-emerald-500 border border-emerald-500/20">
            In-Region
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="border border-white/10 p-8 flex flex-col items-center justify-center text-center bg-white/[0.01]"
        >
          <h3 className="text-5xl font-black text-white mb-2">5,000/s</h3>
          <p className="text-gray-400 font-bold mb-4">DATABASE WRITES</p>
          <span className="text-xs font-mono bg-white/5 px-2 py-1 text-gray-500">
            Batch Insert Optimization
          </span>
        </motion.div>
      </div>
    </>
  );
}
