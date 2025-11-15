import { Server, Shield, Gauge, Cloud, Rocket, Cpu } from 'lucide-react'
import { motion } from 'framer-motion'

const Card = ({ className = '', children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
    className={`group relative overflow-hidden rounded-2xl border border-white/10 dark:border-white/10 bg-white/70 dark:bg-metal-800/70 backdrop-blur p-6 ${className}`}
  >
    <div className="absolute inset-0 bg-grain pointer-events-none" />
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-neon-green/10 via-transparent to-transparent" />
    {children}
  </motion.div>
)

export default function BentoGrid() {
  const items = [
    { icon: <Server className="text-neon-green" />, title: 'Metal-optimized compute', body: 'Autoscale across regions with zero-cold starts.' },
    { icon: <Shield className="text-neon-green" />, title: 'Quantum-grade security', body: 'End-to-end encrypted mesh with policy-as-code.' },
    { icon: <Gauge className="text-neon-green" />, title: 'Latency under 30ms', body: 'Edge accelerated routing with smart caching.' },
    { icon: <Cloud className="text-neon-green" />, title: 'Unified PaaS', body: 'Containers, functions, and data in one control plane.' },
    { icon: <Rocket className="text-neon-green" />, title: 'One-click deploys', body: 'From Git to global in seconds with zero downtime.' },
    { icon: <Cpu className="text-neon-green" />, title: 'GPU orchestration', body: 'On-demand A100/H100 with auto-scheduling.' },
  ]

  return (
    <section id="features" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="lg:col-span-2">
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">Power your stack</h3>
            <p className="text-zinc-600 dark:text-zinc-300">Run apps, APIs, and data pipelines on a single, resilient fabric.</p>
          </Card>
          {items.map((item, i) => (
            <Card key={i}>
              <div className="flex items-start gap-3">
                {item.icon}
                <div>
                  <h4 className="text-sm font-semibold text-zinc-900 dark:text-white">{item.title}</h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-300 mt-1">{item.body}</p>
                </div>
              </div>
            </Card>
          ))}
          <Card className="lg:col-span-2">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">Developer-first</h3>
                <p className="text-zinc-600 dark:text-zinc-300">DX that feels like magic. Powerful CLI, observability, and templates.</p>
              </div>
              <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-neon-green/30 to-transparent border border-neon-green/30" />
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
