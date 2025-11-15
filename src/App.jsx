import MetallicNav from './components/MetallicNav'
import Hero from './components/Hero'
import BentoGrid from './components/BentoGrid'
import CursorFX from './components/CursorFX'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-metal-900 text-zinc-900 dark:text-zinc-100">
      <CursorFX />
      <MetallicNav />
      <main>
        <Hero />
        <BentoGrid />
        <section id="pricing" className="relative py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {['Starter','Pro','Enterprise'].map((tier, i) => (
                <div key={tier} className="relative overflow-hidden rounded-2xl border border-white/10 dark:border-white/10 bg-white/70 dark:bg-metal-800/70 backdrop-blur p-6">
                  <div className="absolute inset-0 bg-grain pointer-events-none" />
                  <h3 className="text-xl font-semibold">{tier}</h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">Everything you need to ship.</p>
                  <div className="mt-6 flex items-end gap-1">
                    <span className="text-4xl font-extrabold">${i === 0 ? '0' : i === 1 ? '49' : 'Contact'}</span>
                    {i !== 2 && <span className="mb-2 text-sm text-zinc-500">/mo</span>}
                  </div>
                  <ul className="mt-6 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <li>Global edge network</li>
                    <li>1-click deploys</li>
                    <li>Observability</li>
                    <li>Autoscaling</li>
                  </ul>
                  <button className="mt-8 w-full rounded-xl bg-zinc-900 text-white dark:bg-neon-green dark:text-zinc-900 px-5 py-3 font-semibold shadow hover:scale-[1.01] transition">Choose {tier}</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="relative border-t border-white/10 dark:border-white/10 py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">© {new Date().getFullYear()} NebulaCloud</p>
            <a href="#" className="text-sm hover:text-neon-green">Privacy</a>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
