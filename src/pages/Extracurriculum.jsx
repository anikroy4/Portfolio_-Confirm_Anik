import React from 'react';

export default function Extracurriculum() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        
        {/* Header Section */}
        <div className="text-center md:text-left mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Beyond the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Code</span>
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
            A glimpse into my life outside of the IDE. From athletics and photography to travelling and exploring artificial intelligence.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-8 delay-100">
          
          {/* Main Sports & Athletics Card (Spans 2 columns on desktop) */}
          <div className="md:col-span-2 rounded-[2rem] bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl border border-white/60 dark:border-slate-700/50 p-8 shadow-xl shadow-slate-200/50 dark:shadow-black/60 transition-transform hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 text-2xl shadow-sm">
                ⚽
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Sports & Athletics</h2>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              Staying active is a core part of my routine. I am highly passionate about team sports, which helps me build strong communication and collaborative skills both on and off the field.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Football', 'Cricket', 'Volleyball', 'Handball', 'Badminton'].map(sport => (
                <span key={sport} className="px-4 py-2 text-sm font-semibold rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50">
                  {sport}
                </span>
              ))}
            </div>
          </div>

          {/* Photography & Hobbies */}
          <div className="rounded-[2rem] bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl border border-white/60 dark:border-slate-700/50 p-8 shadow-xl shadow-slate-200/50 dark:shadow-black/60 transition-transform hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 text-2xl shadow-sm">
                📸
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Creative</h2>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Photography</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              I enjoy capturing moments and looking at the world through a creative lens. It helps me maintain an eye for detail, which directly translates to crafting pixel-perfect web interfaces.
            </p>
          </div>

          {/* Travel Card */}
          <div className="rounded-[2rem] bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl border border-white/60 dark:border-slate-700/50 p-8 shadow-xl shadow-slate-200/50 dark:shadow-black/60 transition-transform hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 text-2xl shadow-sm">
                ✈️
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Travel</h2>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-xl">🇧🇩</span>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Bangladesh</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Explored extensively all over the country.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">🇮🇳</span>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">India</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Visited several regions and cultural landmarks.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Languages Card */}
          <div className="rounded-[2rem] bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl border border-white/60 dark:border-slate-700/50 p-8 shadow-xl shadow-slate-200/50 dark:shadow-black/60 transition-transform hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-2xl shadow-sm">
                🗣️
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Languages</h2>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Bengali</span>
                  <span className="text-xs font-medium text-slate-500">Native / Fluent</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full w-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">English</span>
                  <span className="text-xs font-medium text-slate-500">Fluent</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full w-[90%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Hindi</span>
                  <span className="text-xs font-medium text-slate-500">Conversational</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2">
                  <div className="bg-indigo-400 h-2 rounded-full w-[75%]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Research & Tech Interests Card */}
          <div className="rounded-[2rem] bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 border border-slate-700 p-8 shadow-xl text-white transition-transform hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-2xl shadow-sm backdrop-blur-md">
                🤖
              </div>
              <h2 className="text-2xl font-bold">Tech Interests</h2>
            </div>
            <p className="text-slate-300 mb-6 text-sm leading-relaxed">
              Beyond standard web development, I spend my free time researching and staying up to date with emerging technologies that shape the future of software engineering.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm">Artificial Intelligence</span>
              <span className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm">Machine Learning</span>
              <span className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm">Advanced Software Architectures</span>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}