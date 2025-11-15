import ThemeToggle from './ThemeToggle'
import { Menu } from 'lucide-react'

export default function MetallicNav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 dark:border-white/10 bg-gradient-to-b from-white/60 to-white/30 dark:from-metal-800/70 dark:to-metal-700/50 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] p-3">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-zinc-200 to-zinc-100 dark:from-metal-600 dark:to-metal-500 border border-white/40 dark:border-white/10 shadow-inner" />
            <div className="text-sm font-semibold tracking-wide text-zinc-800 dark:text-zinc-100">NebulaCloud</div>
          </div>
          <div className="flex items-center gap-3">
            <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-700 dark:text-zinc-300">
              <a href="#features" className="hover:text-neon-green transition-colors">Features</a>
              <a href="#pricing" className="hover:text-neon-green transition-colors">Pricing</a>
              <a href="#stories" className="hover:text-neon-green transition-colors">Stories</a>
              <a href="#docs" className="hover:text-neon-green transition-colors">Docs</a>
            </nav>
            <ThemeToggle />
            <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border border-white/20 bg-white/50 dark:bg-metal-700/60 text-zinc-700 dark:text-zinc-200"><Menu size={18} /></button>
          </div>
        </div>
      </div>
    </header>
  )
}
