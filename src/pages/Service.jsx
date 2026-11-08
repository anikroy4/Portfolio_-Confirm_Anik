import React from 'react'

const services = [
  { title: 'Full-Stack Web Development', desc: 'End-to-end MERN applications: UI, API, database, deployment.', bullets: ['React frontends', 'Node/Express APIs', 'MongoDB schemas & hosting'] },
  { title: 'Frontend Engineering', desc: 'Pixel-perfect responsive interfaces with modern tooling.', bullets: ['Component architecture', 'Performance tuning', 'Accessibility'] },
  { title: 'API Design & Integration', desc: 'Design RESTful APIs and integrate third-party services.', bullets: ['Auth & security', 'Payment integrations', '3rd-party APIs'] },
  { title: 'UI/UX & Prototyping', desc: 'Design systems and prototypes in Figma to speed development.', bullets: ['Interactive prototypes', 'Design tokens', 'Responsive layouts'] }
]

export default function Service() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Ambient Lighting Background matching Landing Page */}
      <div 
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-linear-to-b from-blue-500/10 via-indigo-500/5 to-transparent blur-3xl opacity-70 dark:opacity-30" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute -top-24 right-10 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute top-1/3 -left-20 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-3xl" 
        aria-hidden="true" 
      />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Header Section Centered matching Landing Page style */}
        <div className="text-center max-w-3xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-6 duration-700">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            My <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Services</span>
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            How I can help you ship great products.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 animate-in fade-in slide-in-from-bottom-8 delay-100">
          {services.map(s => (
            <div key={s.title} className="rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200 dark:border-slate-800 p-8 shadow-lg shadow-slate-200/20 dark:shadow-black/40 transition-all hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{s.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{s.desc}</p>
              <ul className="mt-4 space-y-2">
                {s.bullets.map(b => (
                  <li key={b} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
