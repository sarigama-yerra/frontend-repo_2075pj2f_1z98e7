import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/30 to-white/90 dark:from-metal-900/80 dark:via-metal-900/40 dark:to-metal-900/90 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pt-40 pb-24"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/70 dark:bg-metal-800/70 backdrop-blur px-3 py-1 text-xs font-medium text-zinc-800 dark:text-zinc-200">
            <span className="inline-block h-2 w-2 rounded-full bg-neon-green animate-pulse" /> Live on the edge
          </div>

          <h1 className="mt-6 text-5xl sm:text-6xl leading-tight font-extrabold tracking-tight text-zinc-900 dark:text-white drop-shadow-[0_1px_0_rgba(255,255,255,0.2)]">
            The metallic cloud built for scale
          </h1>
          <p className="mt-4 max-w-2xl text-zinc-700 dark:text-zinc-300 text-lg">
            Deploy apps, APIs, and GPU workloads globally in seconds. A futuristic PaaS with sci‑fi precision.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#pricing" className="rounded-xl bg-zinc-900 text-white dark:bg-neon-green dark:text-zinc-900 px-5 py-3 font-semibold shadow hover:scale-[1.01] transition">Get started</a>
            <a href="#features" className="rounded-xl border border-zinc-900/15 dark:border-white/20 px-5 py-3 font-semibold text-zinc-900 dark:text-white hover:scale-[1.01] transition">Explore features</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
