import React from 'react';

// Organized data from your CV
const resumeData = {
  name: 'Anik Roy',
  title: 'Front End Developer',
  contact: {
    email: 'anikroy.uiu.ac.bd@gmail.com',
    phone: '+88 01521 428525',
    address: 'Dhaka - 1000, Bangladesh'
  },
  summary: "Highly motivated front-end developer with a strong passion for crafting seamless user experiences. Proficient in HTML5, CSS3, Tailwind CSS, Bootstrap, and JavaScript, I excel in building responsive, accessible web designs and leveraging modern frameworks like React.js. Currently transitioning to full MERN stack development to build robust, full-fledged web applications.",
  experience: [
    {
      role: 'MERN Stack Developer (Training)',
      company: 'One Year Academy',
      period: '2024 - 2025 (Running)',
      details: 'Mastering React.js for front-end, Node.js and Express.js for back-end APIs, and MongoDB for database management.'
    },
    {
      role: 'Front-End Developer (Training)',
      company: 'Creative IT Institute',
      period: '2023 - 2024',
      details: 'Gained proficiency in foundational and modern front-end technologies. Excelled in building responsive, accessible web designs.'
    }
  ],
  education: [
    {
      degree: 'B.Sc. in Computer Science & Engineering',
      institution: 'United International University, Dhaka',
      period: 'Expected 2027'
    },
    {
      degree: 'Higher Secondary Certificate (Science)',
      institution: 'Dhaka City College',
      period: '2016'
    }
  ],
  skills: {
    frontend: ['React JS', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'jQuery'],
    tools: ['VS Code', 'Git', 'GitHub', 'Netlify', 'Figma', 'Photoshop']
  }
};

export default function Resume() {
  
  // Triggers the browser's native print dialog, which users can use to "Save as PDF"
  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        
        {/* Page Header (Hidden during print) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 print:hidden">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Resume</span>
            </h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              A comprehensive overview of my skills, training, and experience.
            </p>
          </div>
          <div className="flex gap-4 shrink-0">
            <button 
              onClick={handlePrint}
              className="inline-flex items-center justify-center h-12 px-6 rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              Print / Save PDF
            </button>
            {/* Make sure "Latest_CV.pdf" is in your public folder */}
            <a 
              href="/Latest_CV.pdf" 
              download="Anik_Roy_CV.pdf"
              className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold transition-transform hover:scale-105 shadow-lg shadow-slate-900/20 dark:shadow-white/10"
            >
              Download Original
            </a>
          </div>
        </div>

        {/* Digital Document Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sidebar: Sticky Info */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-8 delay-100">
            
            {/* Profile Card */}
            <div className="rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200 dark:border-slate-800 p-8 shadow-lg shadow-slate-200/20 dark:shadow-black/40">
              <div className="h-24 w-24 rounded-full bg-gradient-to-tr from-blue-100 to-indigo-100 dark:from-slate-800 dark:to-slate-700 border-4 border-white dark:border-slate-800 shadow-sm flex items-center justify-center mb-6">
                 <span className="text-2xl font-bold text-slate-400 dark:text-slate-500">AR</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{resumeData.name}</h2>
              <p className="mt-1 font-medium text-blue-600 dark:text-blue-400">{resumeData.title}</p>
              
              <div className="mt-8 space-y-4 text-sm text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-3">
                  <span className="text-lg">📧</span> 
                  <a href={`mailto:${resumeData.contact.email}`} className="hover:text-blue-600 dark:hover:text-blue-400 truncate">{resumeData.contact.email}</a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg">📱</span> 
                  <a href={`tel:${resumeData.contact.phone}`} className="hover:text-blue-600 dark:hover:text-blue-400">{resumeData.contact.phone}</a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg">📍</span> 
                  <span>{resumeData.contact.address}</span>
                </div>
              </div>
            </div>

            {/* Skills Card */}
            <div className="rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200 dark:border-slate-800 p-8 shadow-lg shadow-slate-200/20 dark:shadow-black/40 print:break-inside-avoid">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {resumeData.skills.frontend.map(skill => (
                  <span key={skill} className="px-3 py-1.5 text-xs font-medium rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800/30">
                    {skill}
                  </span>
                ))}
              </div>
              
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Tools & Workflows</h3>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.tools.map(tool => (
                  <span key={tool} className="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

          </aside>

          {/* Main Content Area */}
          <div className="lg:col-span-8 flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-8 delay-200">
            
            {/* Objective */}
            <section className="rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200 dark:border-slate-800 p-8 shadow-lg shadow-slate-200/20 dark:shadow-black/40">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="text-blue-500">◆</span> Professional Summary
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {resumeData.summary}
              </p>
            </section>

            {/* Experience & Training */}
            <section className="rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200 dark:border-slate-800 p-8 shadow-lg shadow-slate-200/20 dark:shadow-black/40">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="text-blue-500">◆</span> Training & Experience
              </h2>
              <div className="space-y-8">
                {resumeData.experience.map((exp, idx) => (
                  <div key={idx} className="relative pl-6 border-l-2 border-slate-200 dark:border-slate-800 print:break-inside-avoid">
                    <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-slate-200 dark:bg-slate-700 border-2 border-white dark:border-slate-900"></div>
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                        <p className="text-sm font-medium text-slate-600 dark:text-slate-400">{exp.company}</p>
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 shrink-0">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {exp.details}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200 dark:border-slate-800 p-8 shadow-lg shadow-slate-200/20 dark:shadow-black/40">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="text-blue-500">◆</span> Education
              </h2>
              <div className="space-y-6">
                {resumeData.education.map((edu, idx) => (
                  <div key={idx} className="print:break-inside-avoid">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                      <div>
                        <h3 className="text-base font-bold text-slate-900 dark:text-white">{edu.degree}</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{edu.institution}</p>
                      </div>
                      <span className="text-sm text-slate-500 dark:text-slate-500">
                        {edu.period}
                      </span>
                    </div>
                    {idx !== resumeData.education.length - 1 && (
                      <hr className="mt-6 border-slate-100 dark:border-slate-800" />
                    )}
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}