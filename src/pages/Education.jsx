import React from 'react';

const educationData = [
  {
    id: 1,
    degree: 'B.Sc. in Computer Science & Engineering',
    institution: 'United International University, Dhaka',
    period: 'Expected 2027',
    duration: '4 Years',
    result: 'CGPA: (Running)',
    status: 'current'
  },
  {
    id: 2,
    degree: 'Higher Secondary Certificate (Science)',
    institution: 'Dhaka City College, Dhaka',
    period: '2016',
    duration: '2 Years',
    result: 'GPA: 4.67 / 5.00',
    status: 'completed'
  },
  {
    id: 3,
    degree: 'Secondary School Certificate (Science)',
    institution: "Motijheel Govt. Boys' High School, Dhaka",
    period: '2014',
    duration: '10 Years',
    result: 'GPA: 5.00 / 5.00',
    status: 'completed'
  }
];

export default function Education() {
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
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 animate-in fade-in slide-in-from-bottom-6 duration-700">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Academic <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Background</span>
          </h1>
          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            My formal educational journey and qualifications.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-8 space-y-12">
          
          {educationData.map((edu, index) => {
            const delay = `delay-[${index * 150}ms]`;
            const isCurrent = edu.status === 'current';
            
            return (
              <div 
                key={edu.id} 
                className={`relative pl-8 md:pl-12 animate-in fade-in slide-in-from-bottom-8 ${delay}`}
              >
                {/* Timeline Node */}
                <div className={`absolute -left-2.75 top-6 h-5 w-5 rounded-full border-4 border-slate-50 dark:border-slate-950 shadow-sm ${
                  isCurrent 
                  ? 'bg-blue-500 animate-pulse ring-4 ring-blue-500/20' 
                  : 'bg-slate-300 dark:bg-slate-600'
                }`}></div>
                
                {/* Education Card */}
                <div className="rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-lg shadow-slate-200/20 dark:shadow-black/40 transition-all hover:-translate-y-1 hover:shadow-xl group">
                  
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                          {isCurrent ? '🎓' : '📚'}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {edu.degree}
                        </h3>
                      </div>
                      
                      <h4 className="text-lg font-medium text-slate-700 dark:text-slate-300 ml-13 md:ml-0 md:mt-4">
                        {edu.institution}
                      </h4>
                    </div>

                    {/* Meta Tags */}
                    <div className="flex flex-wrap md:flex-col items-start md:items-end gap-2 mt-4 md:mt-0 shrink-0">
                      <span className={`px-3 py-1 text-sm font-semibold rounded-full ${
                        isCurrent 
                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300' 
                        : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                      }`}>
                        {edu.period}
                      </span>
                      <span className="px-3 py-1 text-sm font-medium rounded-full border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 bg-white/50 dark:bg-slate-900/50">
                        {edu.duration}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-slate-200/80 dark:border-slate-800 flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <span className="text-lg font-bold text-slate-900 dark:text-white">Result:</span> 
                    <span className="font-medium bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-lg text-sm">
                      {edu.result}
                    </span>
                  </div>
                  
                </div>
              </div>
            );
          })}
          
        </div>
      </div>
    </main>
  );
}