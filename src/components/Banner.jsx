import React from 'react'

export default function Banner({eyebrow, title, subtitle}){
  return (
    <header className="w-full bg-transparent mb-6">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        {eyebrow && <p className="text-sm text-slate-600 uppercase tracking-wider">{eyebrow}</p>}
        {title && <h1 className="mt-1 text-3xl font-extrabold text-slate-900">{title}</h1>}
        {subtitle && <p className="mt-2 text-slate-700">{subtitle}</p>}
      </div>
    </header>
  )
}
