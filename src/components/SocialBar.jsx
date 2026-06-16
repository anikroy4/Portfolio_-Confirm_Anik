import React from 'react';

export default function SocialBar() {
  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center p-3 rounded-full bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl border border-white/60 dark:border-slate-700/50 shadow-xl shadow-slate-200/50 dark:shadow-black/60 animate-in fade-in slide-in-from-left-8 duration-1000 delay-500">
      
      <div className="flex flex-col gap-4">
        
        {/* GitHub */}
        <a 
          href="https://github.com/anikroy4" 
          target="_blank" 
          rel="noreferrer" 
          className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white transition-all duration-300 hover:scale-110"
          aria-label="GitHub"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
          
          {/* Tooltip */}
          <span className="absolute left-full ml-4 rounded-md bg-slate-900 dark:bg-white px-2 py-1 text-xs font-semibold text-white dark:text-slate-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none shadow-lg whitespace-nowrap">
            GitHub
            <span className="absolute top-1/2 -left-1 -translate-y-1/2 border-[5px] border-transparent border-r-slate-900 dark:border-r-white"></span>
          </span>
        </a>

        {/* LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/anik-roy-bd/" 
          target="_blank" 
          rel="noreferrer" 
          className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110"
          aria-label="LinkedIn"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
          </svg>
          
          {/* Tooltip */}
          <span className="absolute left-full ml-4 rounded-md bg-blue-600 px-2 py-1 text-xs font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none shadow-lg whitespace-nowrap">
            LinkedIn
            <span className="absolute top-1/2 -left-1 -translate-y-1/2 border-[5px] border-transparent border-r-blue-600"></span>
          </span>
        </a>

        {/* Separator Line
        <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-auto rounded-full"></div> */}

        {/* Contact/Email */}
        <a 
          href="mailto:anikroy.uiu.ac.bd@gmail.com" 
          className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 hover:scale-110"
          aria-label="Email Me"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          
          {/* Tooltip */}
          <span className="absolute left-full ml-4 rounded-md bg-emerald-500 px-2 py-1 text-xs font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none shadow-lg whitespace-nowrap">
            Email Me
            <span className="absolute top-1/2 -left-1 -translate-y-1/2 border-[5px] border-transparent border-r-emerald-500"></span>
          </span>
        </a>

      </div>
    </div>
  );
}