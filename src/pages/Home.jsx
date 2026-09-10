import { useEffect, useState } from 'react';

const titles = ['Front-End Developer', 'React Enthusiast', 'MERN Stack Learner', 'UI/UX Designer'];

const fallbackProjects = [
  {
    title: 'Todo FullStack Project',
    description: 'Full-stack Todo application with authentication and persistent storage.',
    tech: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB'],
    liveLink: 'https://github.com/anikroy4/Todo_FullStack_Project',
    sourceLink: 'https://github.com/anikroy4/Todo_FullStack_Project'
  },
  {
    title: 'Social Media Clone',
    description: 'Social media clone demonstrating posts, likes, and user flows.',
    tech: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
    liveLink: 'https://github.com/anikroy4/Social_Media_Clone',
    sourceLink: 'https://github.com/anikroy4/Social_Media_Clone'
  },
  {
    title: 'Simple Calculator',
    description: 'Lightweight calculator built with HTML, CSS, and JavaScript.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    liveLink: 'https://github.com/anikroy4/Simple-Calculator',
    sourceLink: 'https://github.com/anikroy4/Simple-Calculator'
  }
];

function normalizeGithubProject(repository) {
  const technologies = [repository.language, ...(repository.topics || [])]
    .filter(Boolean)
    .map(technology => technology === 'js' ? 'JavaScript' : technology);

  return {
    title: repository.name.replace(/[-_]/g, ' '),
    description: repository.description || 'A project built and maintained on GitHub.',
    tech: [...new Set(technologies)].slice(0, 6),
    liveLink: repository.homepage || repository.html_url,
    sourceLink: repository.html_url
  };
}

export default function Home() {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState('');
  const [typing, setTyping] = useState(true);
  const [selectedProjects, setSelectedProjects] = useState(fallbackProjects);

  useEffect(() => {
    const controller = new AbortController();

    async function loadSelectedProjects() {
      try {
        const response = await fetch(
          '/api/github-projects',
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error(`GitHub request failed with ${response.status}`);
        }

        const { projects } = await response.json();
        const importedProjects = projects.map(normalizeGithubProject);

        if (importedProjects.length > 0) {
          setSelectedProjects(importedProjects);
        }
      } catch (error) {
        if (error.name !== 'AbortError') {
          setSelectedProjects(fallbackProjects);
        }
      }
    }

    loadSelectedProjects();

    return () => controller.abort();
  }, []);

  // Typing effect logic
  useEffect(() => {
    let timeout;
    const full = titles[index];
    if (typing) {
      timeout = setTimeout(() => {
        if (display === full) {
          setTyping(false);
        } else {
          setDisplay(full.slice(0, display.length + 1));
        }
      }, 80);
    } else {
      timeout = setTimeout(() => {
        if (display === '') {
          setTyping(true);
          setIndex((i) => (i + 1) % titles.length);
        } else {
          setDisplay(full.slice(0, display.length - 1));
        }
      }, 30);
    }
    return () => clearTimeout(timeout);
  }, [display, typing, index]);

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
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
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
            
            <div className="absolute inset-0 bg-linear-to-tr from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative aspect-square rounded-full border border-white/20 dark:border-white/10 bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl shadow-2xl flex items-center justify-center overflow-hidden">
            <img  src="././../../public/assets/Hero.png" alt="Hero.png" className="relative z-10" />
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
          {selectedProjects.map((project, idx) => (
            <article 
              key={project.sourceLink || project.title || idx}
              className="group flex min-h-full flex-col rounded-3xl border border-slate-200 bg-white/70 p-6 backdrop-blur-xl shadow-lg shadow-slate-200/20 transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10 dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-black/40 dark:hover:border-blue-700 dark:hover:shadow-blue-950/40"
            >
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">{project.title}</h3>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{project.description}</p>
                
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech, tIdx) => (
                    <span key={tIdx} className="rounded-lg border border-slate-200/60 bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 transition-colors duration-200 group-hover:border-blue-200 dark:border-slate-700/60 dark:bg-slate-800 dark:text-slate-300 dark:group-hover:border-blue-800">
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
                  className="inline-flex items-center text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 focus-visible:rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:text-blue-400 dark:hover:text-blue-300 dark:focus-visible:ring-offset-slate-900"
                >
                  {project.sourceLink && project.liveLink !== project.sourceLink ? 'View Live' : 'View on GitHub'} <span className="ml-1">↗</span>
                </a>
                {project.sourceLink && project.liveLink !== project.sourceLink && (
                  <a
                    href={project.sourceLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-slate-700 transition-colors hover:text-slate-900 focus-visible:rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:text-slate-300 dark:hover:text-white dark:focus-visible:ring-offset-slate-900"
                  >
                    Source Code
                  </a>
                )}
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