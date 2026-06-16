import React, { useState, useEffect } from 'react';

// Real project data from your CV
const projectsData = [
  {
    title: 'Orebi Website',
    description: 'A dynamic, responsive project showcasing modern web development techniques and seamless UI.',
    tech: ['React JS', 'Tailwind CSS', 'Firebase'],
    liveLink: 'https://orebi-bd.netlify.app/',
    featured: true
  },
  {
    title: 'Agence Website',
    description: 'A responsive agency template featuring interactive sliders and clean grid layouts.',
    tech: ['JavaScript', 'Bootstrap', 'Slick-slider', 'HTML/CSS'],
    liveLink: 'https://agencebd.netlify.app/',
    featured: false
  },
  {
    title: 'QuriarBox Website',
    description: 'A structured courier service landing page focused on clear typography and accessibility.',
    tech: ['Bootstrap', 'HTML5', 'CSS3'],
    liveLink: 'https://quriarboxbd.netlify.app/',
    featured: false
  },
  {
    title: 'Qwery Website',
    description: 'A lightweight, fundamental website project demonstrating core layout principles.',
    tech: ['Figma', 'HTML5', 'CSS3'],
    liveLink: 'https://qwerybd.netlify.app/',
    featured: false
  },
  {
    title: 'Logoipsum Portfolio',
    description: 'A minimalist portfolio template translated from Figma to pixel-perfect code.',
    tech: ['Figma', 'HTML5', 'CSS3'],
    liveLink: 'https://logoipsumprotfolio.netlify.app/',
    featured: false
  }
];

export default function Home() {
  const titles = ['Front-End Developer', 'React Enthusiast', 'MERN Stack Learner',"UI/UX Designer"];
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState('');
  const [typing, setTyping] = useState(true);

  // Typing effect logic
  useEffect(() => {
    let timeout;
    const full = titles[index];
    if (typing) {
      timeout = setTimeout(() => setDisplay(full.slice(0, display.length + 1)), 80);
      if (display === full) setTyping(false);
    } else {
      timeout = setTimeout(() => setDisplay(full.slice(0, display.length - 1)), 30);
      if (display === '') {
        setTyping(true);
        setIndex((i) => (i + 1) % titles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [display, typing, index, titles]);

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors pt-24 pb-12">
      
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Hero Text */}
          <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div>
              <p className="text-sm font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase mb-3">Hi, I&apos;m</p>
              <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Anik Roy
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                  {display}
                  <span className="animate-pulse text-slate-900 dark:text-white">|</span>
                </span>
              </h1>
            </div>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
              I craft highly polished, seamless user experiences. Currently proficient in React and Tailwind, and expanding my expertise into full-fledged MERN stack development to build robust, scalable applications.
            </p>

            <div className="flex flex-wrap gap-4 mt-2">
              <a href="#projects" className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold transition-transform hover:scale-105 shadow-lg shadow-slate-900/20 dark:shadow-white/10">
                View My Work
              </a>
              <a href="/resume" className="inline-flex items-center justify-center h-12 px-6 rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                Download Resume
              </a>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
              <div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white">5+</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Live Projects</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white">MERN</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Stack Focus</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white">React</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Specialist</div>
              </div>
            </div>
          </div>

          {/* Hero Visual (Abstract Glass Shape instead of generic mock) */}
          <div className="relative hidden lg:block animate-in fade-in slide-in-from-right-8 duration-1000">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative aspect-square rounded-full border border-white/20 dark:border-white/10 bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl shadow-2xl flex items-center justify-center overflow-hidden">
              <div className="text-center p-8">
                {/* <div className="text-6xl mb-4">💻</div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Code meets Design</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Turning Figma concepts into pixel-perfect reality.</p> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">Selected Projects</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">A showcase of my recent front-end development work.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, idx) => (
            <article 
              key={idx} 
              className={`flex flex-col rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200 dark:border-slate-800 p-6 shadow-lg shadow-slate-200/20 dark:shadow-black/40 transition-all hover:-translate-y-1 hover:shadow-xl ${project.featured ? 'md:col-span-2 lg:col-span-1 ring-2 ring-blue-500 ring-offset-2 ring-offset-slate-50 dark:ring-offset-slate-950' : ''}`}
            >
              <div className="flex-1">
                {project.featured && <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-blue-700 bg-blue-100 dark:text-blue-300 dark:bg-blue-900/30 rounded-full">Featured Project</span>}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{project.description}</p>
                
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex gap-4">
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                >
                  View Live <span className="ml-1">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200 dark:border-slate-800 p-8 md:p-12 shadow-2xl shadow-slate-200/30 dark:shadow-black/50 overflow-hidden relative">
          
          {/* Decorative background blur inside card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Let&apos;s build together.</h2>
              <p className="mt-4 text-slate-600 dark:text-slate-400">
                I&apos;m currently available for freelance work or full-time opportunities. Drop me a line and let&apos;s chat about your next project.
              </p>
              
              <div className="mt-8 space-y-4">
                <a href="mailto:anikroy.uiu.ac.bd@gmail.com" className="flex items-center gap-4 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">✉️</div>
                  <span className="font-medium">anikroy.uiu.ac.bd@gmail.com</span>
                </a>
                <a href="tel:+8801521428525" className="flex items-center gap-4 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">📱</div>
                  <span className="font-medium">+88 01521 428525</span>
                </a>
              </div>
            </div>

            <div>
              <form className="flex flex-col gap-4">
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input type="text" id="name" className="w-full rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input type="email" id="email" className="w-full rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your email address" />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea id="message" rows="4" className="w-full rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" placeholder="How can I help you?"></textarea>
                </div>
                <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-full bg-slate-900 dark:bg-white px-6 py-3 text-sm font-semibold text-white dark:text-slate-900 hover:scale-105 transition-transform">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}