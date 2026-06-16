import React from 'react';

const projects = [
  {
    title: 'Todo_FullStack_Project',
    desc: 'Full-stack Todo application with user auth and persistent storage (MERN).',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    live: '#',
    code: 'https://github.com/anikroy4/Todo_FullStack_Project'
  },
  {
    title: 'Social_Media_Clone',
    desc: 'Social media clone demo showcasing posts, likes and basic user flows.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    live: '#',
    code: 'https://github.com/anikroy4/Social_Media_Clone'
  },
  {
    title: 'Simple-Calculator',
    desc: 'Lightweight calculator built with vanilla HTML, CSS and JavaScript.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    live: '#',
    code: 'https://github.com/anikroy4/Simple-Calculator'
  },
  {
    title: 'Qwery--React_-_Responsive',
    desc: 'Responsive React UI project demonstrating layouts and interactions.',
    tech: ['React', 'JavaScript', 'CSS'],
    live: '#',
    code: 'https://github.com/anikroy4/Qwery--React_-_Responsive'
  },
  {
    title: 'Quriarbox-website',
    desc: 'Figma to HTML/CSS implementation for a product landing page.',
    tech: ['HTML', 'CSS', 'Figma'],
    live: '#',
    code: 'https://github.com/anikroy4/Quriarbox-website'
  },
  {
    title: 'ElderlyCareGiverWeb',
    desc: 'A web project intended to provide resources and services for elderly caregivers.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    live: '#',
    code: 'https://github.com/anikroy4/ElderlyCareGiverWeb'
  }
];

export default function Projects() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Projects</span>
            </h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
              Selected work from my GitHub — concise, practical, and focused on clean code and user experience.
            </p>
          </div>
          <a 
            href="https://github.com/anikroy4" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold transition-transform hover:scale-105 shadow-lg shadow-slate-900/20 dark:shadow-white/10 shrink-0"
          >
            View GitHub Profile <span className="ml-2">↗</span>
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => {
            // Create a staggered animation delay based on index
            const delay = `delay-[${i * 100}ms]`;
            
            return (
              <article 
                key={p.title} 
                className={`flex flex-col rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200 dark:border-slate-800 p-4 shadow-lg shadow-slate-200/20 dark:shadow-black/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl animate-in fade-in slide-in-from-bottom-8 ${delay}`}
              >
                {/* Image Placeholder - Abstract Gradient */}
                <div className="aspect-video w-full rounded-2xl overflow-hidden mb-6 relative group bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900">
                  {/* Replace this div with an actual <img> tag when you have screenshots */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl opacity-50 drop-shadow-md">💻</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 px-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white truncate" title={p.title}>
                    {p.title.replace(/_/g, ' ')} {/* Cleans up underscores for better UI display */}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                    {p.desc}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.tech.map(t => (
                      <span 
                        key={t} 
                        className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Actions */}
                <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 px-2 flex gap-4">
                  {p.live !== '#' && (
                    <a 
                      className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors flex items-center" 
                      href={p.live} 
                      target="_blank" 
                      rel="noreferrer"
                    >
                      Live Demo <span className="ml-1">↗</span>
                    </a>
                  )}
                  <a 
                    className="text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center" 
                    href={p.code} 
                    target="_blank" 
                    rel="noreferrer"
                  >
                    Source Code
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}