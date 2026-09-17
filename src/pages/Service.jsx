import React from 'react'

const services = [
  { title: 'Full-Stack Web Development', desc: 'End-to-end MERN applications: UI, API, database, deployment.', bullets: ['React frontends', 'Node/Express APIs', 'MongoDB schemas & hosting'] },
  { title: 'Frontend Engineering', desc: 'Pixel-perfect responsive interfaces with modern tooling.', bullets: ['Component architecture', 'Performance tuning', 'Accessibility'] },
  { title: 'API Design & Integration', desc: 'Design RESTful APIs and integrate third-party services.', bullets: ['Auth & security', 'Payment integrations', '3rd-party APIs'] },
  { title: 'UI/UX & Prototyping', desc: 'Design systems and prototypes in Figma to speed development.', bullets: ['Interactive prototypes', 'Design tokens', 'Responsive layouts'] }
]

export default function Service() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        {/* Header Section */}
        <div className="mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 text-center md:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Services</span>
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto md:mx-0">
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
