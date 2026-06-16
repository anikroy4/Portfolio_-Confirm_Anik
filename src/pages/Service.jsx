import React from 'react'

const services = [
  { title: 'Full-Stack Web Development', desc: 'End-to-end MERN applications: UI, API, database, deployment.', bullets: ['React frontends', 'Node/Express APIs', 'MongoDB schemas & hosting'] },
  { title: 'Frontend Engineering', desc: 'Pixel-perfect responsive interfaces with modern tooling.', bullets: ['Component architecture', 'Performance tuning', 'Accessibility'] },
  { title: 'API Design & Integration', desc: 'Design RESTful APIs and integrate third-party services.', bullets: ['Auth & security', 'Payment integrations', '3rd-party APIs'] },
  { title: 'UI/UX & Prototyping', desc: 'Design systems and prototypes in Figma to speed development.', bullets: ['Interactive prototypes', 'Design tokens', 'Responsive layouts'] }
]

export default function Service() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold text-slate-900">Services</h1>
      <p className="mt-2 text-slate-700">How I can help you ship great products.</p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {services.map(s => (
          <div key={s.title} className="card rounded-md border p-6">
            <h3 className="font-semibold text-slate-900">{s.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            <ul className="mt-3 list-disc pl-5 text-sm text-slate-600">
              {s.bullets.map(b => <li key={b}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </main>
  )
}
