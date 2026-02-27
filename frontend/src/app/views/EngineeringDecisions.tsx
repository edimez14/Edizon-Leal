import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export default function EngineeringDecisions() {
  return (
    <>
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-white mb-2">
          ENGINEERING DECISIONS
        </h2>
        <p className="text-gray-400">
          Every choice has a cost. Here are the trade-offs I made.
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="border-b border-white/10 text-sm text-gray-500 font-mono">
              <th className="py-4 font-normal">Context</th>
              <th className="py-4 font-normal">Choice Made</th>
              <th className="py-4 font-normal">Alternative</th>
              <th className="py-4 font-normal">Rationale</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {[
              {
                ctx: "Real-time Player Position",
                choice: "UDP (Custom Protocol)",
                alt: "TCP / WebSockets",
                rat: "TCP's overhead adds latency. For fast-paced games, old data is useless; we need fresh packets.",
                highlight: true,
              },
              {
                ctx: "Inventory Database",
                choice: "PostgreSQL (Relational)",
                alt: "MongoDB (NoSQL)",
                rat: "ACID compliance was critical for virtual economy integrity. NoSQL flexibility was a risk for data consistency.",
                highlight: true,
              },
              {
                ctx: "Microservices Comm",
                choice: "gRPC (Protobuf)",
                alt: "REST (JSON)",
                rat: "Reduced payload size by ~40% and strong typing contracts between services prevented integration bugs.",
                highlight: true,
              },
            ].map((row, i) => (
              <motion.tr
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
              >
                <td className="py-6 font-bold text-white pr-4">{row.ctx}</td>
                <td className="py-6 pr-4">
                  <span className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-3 py-1 text-xs font-mono border border-emerald-500/20">
                    <Zap className="w-3 h-3" /> {row.choice}
                  </span>
                </td>
                <td className="py-6 text-gray-500 pr-4">{row.alt}</td>
                <td className="py-6 text-gray-400 leading-relaxed">
                  {row.rat}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
