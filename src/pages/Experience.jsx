import React from 'react';
import Banner from '../components/Banner';

const experiences = [
  {
    role: 'MERN Stack Developer (Training)',
    company: 'One Year Academy',
    period: '2024 - 2025',
    status: 'In Progress',
    details: 'Mastering React.js for front-end, Node.js and Express.js for back-end APIs, and MongoDB for database management. Focused on building full-fledged MERN applications with user authentication, deployment, and optimization.',
    skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB']
  },
  {
    role: 'Front-End Developer (Training)',
    company: 'Creative IT Institute',
    period: '2023 - 2024',
    status: 'Completed',
    details: 'Gained proficiency in foundational and modern front-end technologies. Excelled in building responsive, accessible web designs and creating dynamic user interfaces.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Bootstrap']
  }
];

export default function Experience() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors pt-12 pb-24">
      
      <Banner 
        title="Experience & Training" 
        subtitle="My technical journey and professional development." 
        eyebrow="Career" 
      />
      
      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="sr-only">Work Experience and Training</h1>

        {/* The Glowing Pathway Container */}
        <div className="relative mt-8 space-y-12 md:space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
          
          {/* Pixel-Perfect Gradient Vertical Line */}
          {/* Line width is 4px (w-1). -ml-[2px] centers it perfectly on the left-4/left-8 axis */}
          <div className="absolute top-0 bottom-0 left-4 md:left-8 w-1 -ml-[2px] bg-gradient-to-b from-blue-500 via-indigo-500 to-transparent rounded-full opacity-50 dark:opacity-70"></div>
          
          {experiences.map((e, index) => {
            const delay = `delay-[${index * 150}ms]`;
            const isActive = e.status === 'In Progress';
            
            return (
              <div key={e.role} className={`relative pl-12 md:pl-24 animate-in fade-in slide-in-from-bottom-8 ${delay}`}>
                
                {/* Luminous Timeline Node - Mathematically Centered */}
                {/* Mobile orb: 32px (w-8), centered via -ml-[16px]. Desktop orb: 40px (w-10), centered via -ml-[20px] */}
                {/* top-8 visually aligns the center of the dot with the middle of the h3 text */}
                <div className="absolute left-[16px] md:left-8 top-8 md:top-10 flex items-center justify-center -ml-[16px] md:-ml-[20px]">
                  {/* Outer glow ring */}
                  <div className={`absolute w-8 h-8 md:w-10 md:h-10 rounded-full ${isActive ? 'bg-blue-400/30 animate-ping duration-1000' : 'bg-slate-300/30 dark:bg-slate-700/30'}`}></div>
                  {/* Inner solid dot */}
                  <div className={`relative w-4 h-4 md:w-5 md:h-5 rounded-full border-[3px] border-slate-50 dark:border-slate-950 z-10 ${isActive ? 'bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)]' : 'bg-indigo-400 dark:bg-indigo-500'}`}></div>
                </div>
                
                {/* Floating Glass Panel */}
                <div className="relative group">
                  
                  {/* Ambient Hover Glow behind the card */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-[2rem] blur-lg opacity-0 group-hover:opacity-15 transition duration-500"></div>
                  
                  {/* Pixel-perfect glassmorphism: updated backdrop-blur-2xl and exact border contrast */}
                  <div className="relative rounded-[2rem] bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl border border-white/60 dark:border-slate-700/50 p-6 sm:p-8 md:p-10 shadow-xl shadow-slate-200/50 dark:shadow-black/60 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200/50 dark:hover:border-blue-700/50">
                    
                    {/* Header Section */}
                    <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-5 mb-6">
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300 leading-tight">
                          {e.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 mt-2">
                          <span className="text-base md:text-lg font-semibold text-slate-700 dark:text-slate-300">{e.company}</span>
                          <span className="hidden sm:inline text-slate-300 dark:text-slate-600">•</span>
                          <span className="text-sm font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                            {e.period}
                          </span>
                        </div>
                      </div>

                      {/* Dynamic Status Badge */}
                      <div className="shrink-0 mt-2 xl:mt-0">
                        <span className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold border shadow-sm ${
                          isActive 
                          ? 'bg-blue-50/80 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800/50' 
                          : 'bg-emerald-50/80 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/50'
                        }`}>
                          {isActive ? (
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                          ) : (
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                          )}
                          {e.status}
                        </span>
                      </div>
                    </div>
                    
                    {/* Details */}
                    <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
                      {e.details}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="mt-8 pt-6 border-t border-slate-200/50 dark:border-slate-800/60">
                      <p className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">Technologies Used</p>
                      <div className="flex flex-wrap gap-2">
                        {e.skills.map(skill => (
                          <span 
                            key={skill} 
                            className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100/80 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60 hover:bg-white dark:hover:bg-slate-700 hover:-translate-y-0.5 hover:shadow-sm transition-all cursor-default"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            );
          })}
          
        </div>
      </main>
    </div>
  );
}