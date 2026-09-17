import { useEffect, useState } from 'react';

const titles = ['Front-End Developer', 'React Enthusiast', 'MERN Stack Learner', 'UI/UX Designer'];

const techCategories = {
  languages: ['JavaScript', 'TypeScript', 'Python', 'HTML', 'HTML5', 'CSS', 'CSS3'],
  frameworks: ['React', 'Next.js', 'Vue', 'Angular', 'Express', 'Node.js', 'Django'],
  libraries: ['Mongoose', 'Axios', 'Redux', 'jQuery', 'Framer Motion', 'Firebase', 'Socket.io', 'JSON Web Token'],
  databases: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase'],
  css: ['Tailwind CSS', 'Bootstrap', 'SCSS', 'Sass', 'styled-components']
};

const expertiseMap = {
  fullstack: { label: 'Full-Stack', icon: '⚡', color: 'from-blue-600 to-indigo-600' },
  frontend: { label: 'Front-End', icon: '🎨', color: 'from-blue-600 to-indigo-600' },
  backend: { label: 'Back-End', icon: '🛠️', color: 'from-blue-600 to-indigo-600' },
  uix: { label: 'UI/UX', icon: '✨', color: 'from-blue-600 to-indigo-600' },
  learning: { label: 'Learning', icon: '📚', color: 'from-blue-600 to-indigo-600' }
};

const fallbackProjects = [
  {
    title: 'Todo FullStack Project',
    description: 'Full-stack Todo application with authentication, CRUD operations, and persistent storage using MERN stack.',
    expertise: 'fullstack',
    languages: ['JavaScript'],
    frameworks: ['React', 'Express', 'Node.js'],
    libraries: ['Mongoose', 'JSON Web Token'],
    databases: ['MongoDB'],
    css: ['CSS3'],
    tech: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT'],
    stars: 3,
    liveLink: 'https://github.com/anikroy4/Todo_FullStack_Project',
    sourceLink: 'https://github.com/anikroy4/Todo_FullStack_Project',
    gradient: 'from-blue-600 via-indigo-600 to-purple-600',
    highlights: ['Authentication', 'CRUD API', 'Data Persistence']
  },
  {
    title: 'Social Media Clone',
    description: 'Social media clone demonstrating posts, likes, comments, and complete user interaction flows.',
    expertise: 'fullstack',
    languages: ['JavaScript'],
    frameworks: ['React', 'Express', 'Node.js'],
    libraries: ['Mongoose'],
    databases: ['MongoDB'],
    css: ['CSS3'],
    tech: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Express', 'Mongoose'],
    stars: 2,
    liveLink: 'https://github.com/anikroy4/Social_Media_Clone',
    sourceLink: 'https://github.com/anikroy4/Social_Media_Clone',
    gradient: 'from-slate-800 via-blue-800 to-indigo-700',
    highlights: ['Post System', 'Like/Comment', 'User Auth']
  },
  {
    title: 'Simple Calculator',
    description: 'Lightweight calculator with clean UI, built with vanilla HTML, CSS, and JavaScript fundamentals.',
    expertise: 'frontend',
    languages: ['JavaScript', 'HTML', 'CSS'],
    frameworks: [],
    libraries: [],
    databases: [],
    css: ['CSS3'],
    tech: ['JavaScript', 'HTML', 'CSS'],
    stars: 1,
    liveLink: 'https://github.com/anikroy4/Simple-Calculator',
    sourceLink: 'https://github.com/anikroy4/Simple-Calculator',
    gradient: 'from-blue-500 via-blue-600 to-indigo-600',
    highlights: ['Vanilla JS', 'Clean UI', 'Responsive']
  }
];

const technologyAliases = {
  javascript: 'JavaScript', js: 'JavaScript',
  typescript: 'TypeScript', ts: 'TypeScript',
  python: 'Python', py: 'Python',
  php: 'PHP',
  html: 'HTML', html5: 'HTML5',
  css: 'CSS', css3: 'CSS3',
  scss: 'SCSS', sass: 'Sass',
  tailwind: 'Tailwind CSS', tailwindcss: 'Tailwind CSS',
  bootstrap: 'Bootstrap',
  react: 'React', 'react.js': 'React', reactjs: 'React',
  nextjs: 'Next.js', 'next.js': 'Next.js',
  vue: 'Vue', angular: 'Angular',
  node: 'Node.js', 'node.js': 'Node.js', nodejs: 'Node.js',
  express: 'Express', 'express.js': 'Express', expressjs: 'Express',
  django: 'Django', laravel: 'Laravel',
  mongodb: 'MongoDB', mongo: 'MongoDB',
  mysql: 'MySQL', postgresql: 'PostgreSQL',
  mongoose: 'Mongoose', axios: 'Axios', redux: 'Redux',
  jquery: 'jQuery', firebase: 'Firebase',
  'socket.io': 'Socket.io', socketio: 'Socket.io',
  'framer-motion': 'Framer Motion', framermotion: 'Framer Motion',
  'styled-components': 'styled-components', styledcomponents: 'styled-components',
  jwt: 'JSON Web Token', 'json-web-token': 'JSON Web Token', 'json web token': 'JSON Web Token',
  figma: 'Figma', photoshop: 'Photoshop', illustrator: 'Illustrator',
  netlify: 'Netlify', vercel: 'Vercel', git: 'Git', github: 'GitHub', npm: 'npm'
};

const gradients = [
  'from-blue-600 via-indigo-600 to-purple-600',
  'from-slate-800 via-blue-800 to-indigo-700',
  'from-blue-500 via-blue-600 to-indigo-600',
  'from-indigo-600 via-blue-700 to-slate-700',
  'from-blue-700 via-indigo-700 to-blue-800',
  'from-slate-700 via-indigo-700 to-blue-700'
];

function categorizeTech(allTech) {
  const categories = { languages: [], frameworks: [], libraries: [], databases: [], css: [] };
  allTech.forEach(tech => {
    const normalized = technologyAliases[tech.toLowerCase()] || tech;
    for (const [category, names] of Object.entries(techCategories)) {
      if (names.some(name => normalized.toLowerCase() === name.toLowerCase())) {
        if (!categories[category].includes(normalized)) {
          categories[category].push(normalized);
        }
        return;
      }
    }
  });
  return categories;
}

const fullstackTitleKeywords = ['fullstack', 'full-stack', 'full_stack', 'portfolio', 'social_media', 'socialmedia', 'social-media', 'elderlycare', 'caregiver', 'cleaning'];
const forceFullstackTitles = ['Todo FullStack Project', 'Todo_FullStack_Project', 'Social Media Clone', 'Social_Media_Clone', 'ElderlyCareGiverWeb', 'Final Portfolio', 'Final-Portfolio', 'Portfolio', 'Cleaning Website', 'Cleaning-Website', 'Quriarbox-website', 'CleaningWebsite'];

function determineExpertise(categories, title = '') {
  const normalizedTitle = title ? title.toLowerCase().replace(/[\s-]/g, '_') : '';
  if (forceFullstackTitles.some(t => t.toLowerCase() === (title || '').toLowerCase()) ||
      fullstackTitleKeywords.some(kw => normalizedTitle.includes(kw.toLowerCase()))) {
    return 'fullstack';
  }
  const hasBackend = categories.frameworks.some(f => ['Express', 'Node.js', 'Django', 'Laravel'].includes(f)) ||
                     categories.databases.length > 0;
  const hasFrontend = categories.frameworks.includes('React') ||
                      categories.languages.some(l => ['HTML', 'HTML5', 'CSS', 'CSS3', 'JavaScript'].includes(l));
  if (hasBackend && hasFrontend) return 'fullstack';
  if (hasBackend) return 'backend';
  return 'frontend';
}

function extractHighlights(description, categories, idx) {
  const defaultHighlights = [
    ['Authentication', 'Responsive', 'Modern UI'],
    ['Clean Code', 'Best Practices', 'Optimized'],
    ['Interactive', 'User Friendly', 'Scalable']
  ];
  return defaultHighlights[idx % defaultHighlights.length];
}

function normalizeGithubProject(repository, idx = 0) {
  const rawTechnologies = [repository.language, ...(repository.topics || [])].filter(Boolean);
  const allTech = [...new Set(rawTechnologies
    .map(tech => technologyAliases[tech.toLowerCase()] || (tech === 'js' ? 'JavaScript' : tech))
  )].slice(0, 8);

  const categories = categorizeTech(allTech);
  const expertise = determineExpertise(categories, repository.name || '');

  return {
    title: repository.name.replace(/[-_]/g, ' '),
    description: repository.description || 'A project built and maintained on GitHub.',
    expertise,
    ...categories,
    tech: allTech,
    stars: Number(repository.stargazers_count || 0),
    liveLink: repository.homepage || repository.html_url,
    sourceLink: repository.html_url,
    gradient: gradients[idx % gradients.length],
    highlights: extractHighlights(repository.description, categories, idx)
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
        const importedProjects = projects
          .map((p, i) => normalizeGithubProject(p, i))
          .map(p => ({
            ...p,
            expertise: determineExpertise(
              { frameworks: p.frameworks, databases: p.databases, languages: p.languages },
              p.title || ''
            )
          }))
          .sort((a, b) => (b.stars || 0) - (a.stars || 0))
          .slice(0, 6);

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

          {/* Hero Visual */}
          <div className="relative hidden lg:block animate-in fade-in slide-in-from-right-8 duration-1000">
            <div className="absolute inset-0 bg-linear-to-tr from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative aspect-square rounded-full border border-white/20 dark:border-white/10 bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl shadow-2xl flex items-center justify-center overflow-hidden">
              <img 
                src="/profile.jpg" 
                alt="profile.jpg" 
                className="w-full h-full object-cover object-top" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl tracking-tight">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Projects</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            A showcase of my recent work with technology stack and expertise details.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {selectedProjects.map((project, idx) => {
            const exp = expertiseMap[project.expertise] || expertiseMap.frontend;
            return (
              <article 
                key={project.sourceLink || project.title || idx}
                style={{ animationDelay: `${idx * 100}ms` }}
                className="group relative h-full w-full flex flex-col overflow-hidden rounded-2xl bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200/70 dark:border-slate-800/80 p-5 shadow-md shadow-slate-200/40 dark:shadow-black/30 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-15px_rgba(59,130,246,0.3)] dark:hover:shadow-[0_20px_50px_-15px_rgba(59,130,246,0.25)] hover:border-blue-200/60 dark:hover:border-blue-800/50 animate-in fade-in slide-in-from-bottom-8"
              >
                {/* Subtle gradient glow on hover */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-blue-500/10 blur-3xl"></div>
                  <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-indigo-500/10 blur-3xl"></div>
                </div>

                {/* Image Placeholder - Elegant visual with equal sizing */}
                <div className="aspect-[16/10] w-full rounded-xl overflow-hidden mb-5 relative bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100 dark:from-slate-800 dark:via-slate-800/70 dark:to-slate-900 border border-slate-200/60 dark:border-slate-700/50">
                  {/* Inner glow pattern */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.12),transparent_60%)]"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(99,102,241,0.10),transparent_55%)]"></div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/0 via-indigo-600/0 to-blue-600/0 group-hover:from-blue-600/10 group-hover:via-indigo-600/8 group-hover:to-blue-600/10 transition-all duration-500"></div>
                  
                  {/* Expertise Badge - Refined */}
                  <div className="absolute top-3 left-3 z-10">
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-white/60 dark:border-slate-700/60 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md px-2.5 py-1 shadow-md shadow-slate-900/5 dark:shadow-black/30">
                      <span className="text-sm leading-none">{exp.icon}</span>
                      <span className={`text-[10px] font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r ${exp.color}`}>
                        {exp.label}
                      </span>
                    </div>
                  </div>

                  {/* Project Number + Stars - Elegant */}
                  <div className="absolute top-3 right-3 z-10 flex flex-col items-end gap-2">
                    <div className="rounded-full border border-white/40 dark:border-white/10 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md px-2.5 py-1 text-slate-600/90 dark:text-slate-400 text-[10px] font-black tracking-[0.15em] shadow-sm">
                      0{idx + 1}
                    </div>
                    <div className="inline-flex items-center gap-1 rounded-full border border-amber-200/60 dark:border-amber-500/20 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/20 backdrop-blur-md px-2 py-0.5 shadow-sm">
                      <span className="text-sm leading-none" style={{ filter: 'drop-shadow(0 0 2px rgba(251,191,36,0.4))' }}>⭐</span>
                      <span className="text-[10px] font-extrabold text-amber-700 dark:text-amber-300">{project.stars ?? 0}</span>
                    </div>
                  </div>

                  {/* Center Icon - Elegant presentation */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-3xl bg-blue-500/10 blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                      <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-white/60 dark:bg-slate-800/50 border border-white/70 dark:border-slate-700/50 backdrop-blur-md shadow-lg shadow-slate-900/5 group-hover:scale-110 transition-transform duration-500">
                        <span className="text-3xl drop-shadow-sm">💻</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom subtle shine line */}
                  <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Content - Equal height layout with consistent spacing */}
                <div className="relative z-10 flex-1 flex flex-col min-h-0">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug tracking-tight transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 dark:group-hover:from-blue-400 dark:group-hover:to-indigo-400 line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="mt-2.5 text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3 min-h-[4.5rem]">
                    {project.description}
                  </p>

                  {/* Highlights / Feature Pills - Elegant compact */}
                  {project.highlights?.length > 0 && (
                    <div className="mt-3.5 flex flex-wrap gap-1.5">
                      {project.highlights.map((h, hIdx) => (
                        <span key={hIdx} className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 px-2 py-0.5 text-[10px] font-bold text-indigo-700 border border-blue-100/70 dark:from-blue-950/40 dark:to-indigo-950/30 dark:text-indigo-300 dark:border-blue-900/30">
                          <span className="h-1 w-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"></span>
                          {h}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  {/* Tech & Expertise Section */}
                  <div className="mt-4 flex-1 min-h-0 overflow-hidden flex flex-col justify-start">
                    <div className="mb-2.5 pb-2 border-b border-dashed border-slate-200/70 dark:border-slate-700/60 flex items-center gap-2">
                      <div className="h-4 w-0.5 rounded-full bg-gradient-to-b from-blue-500 to-indigo-500"></div>
                      <p className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">
                        Tech &amp; Expertise
                      </p>
                    </div>
                    <div className="space-y-2.5">
                      {/* Expertise row */}
                      <div>
                        <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400 dark:text-slate-500">
                          Expertise
                        </p>
                        <div className="flex flex-wrap gap-1">
                          <span className="inline-flex items-center gap-1 rounded-md border border-blue-200/70 bg-gradient-to-r from-blue-50 to-indigo-50 px-2 py-0.5 text-[10px] font-extrabold text-blue-700 dark:border-blue-900/40 dark:from-blue-950/40 dark:to-indigo-950/30 dark:text-indigo-300 shadow-sm">
                            <span className="text-sm leading-none">{exp.icon}</span>
                            {exp.label}
                          </span>
                        </div>
                      </div>
                      {project.languages?.length > 0 && (
                        <div>
                          <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400 dark:text-slate-500">
                            Languages
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {project.languages.slice(0, 3).map((tech, tIdx) => (
                              <span
                                key={tIdx}
                                className="rounded-md border border-slate-200/60 bg-slate-50 px-1.5 py-0.5 text-[10px] font-bold text-slate-700 dark:border-slate-700/50 dark:bg-slate-800/80 dark:text-slate-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 dark:hover:border-slate-600"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      {project.frameworks?.length > 0 && (
                        <div>
                          <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400 dark:text-slate-500">
                            Frameworks
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {project.frameworks.slice(0, 4).map((tech, tIdx) => (
                              <span
                                key={tIdx}
                                className="rounded-md border border-blue-200/60 bg-blue-50/80 px-1.5 py-0.5 text-[10px] font-bold text-blue-700 dark:border-blue-900/40 dark:bg-blue-950/30 dark:text-blue-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 dark:hover:border-blue-700"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      {(project.databases?.length > 0 || project.libraries?.length > 0) && (
                        <div>
                          <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400 dark:text-slate-500">
                            Tools &amp; DB
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {project.databases?.slice(0, 2).map((tech, tIdx) => (
                              <span
                                key={`db-${tIdx}`}
                                className="rounded-md border border-indigo-200/60 bg-indigo-50/80 px-1.5 py-0.5 text-[10px] font-bold text-indigo-700 dark:border-indigo-900/40 dark:bg-indigo-950/30 dark:text-indigo-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-300 dark:hover:border-indigo-700"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.libraries?.slice(0, 2).map((tech, tIdx) => (
                              <span
                                key={`lib-${tIdx}`}
                                className="rounded-md border border-slate-200/60 bg-slate-50 px-1.5 py-0.5 text-[10px] font-bold text-slate-700 dark:border-slate-700/50 dark:bg-slate-800/80 dark:text-slate-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 dark:hover:border-slate-600"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      {project.css?.length > 0 && (
                        <div>
                          <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400 dark:text-slate-500">
                            Styling
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {project.css.slice(0, 2).map((tech, tIdx) => (
                              <span
                                key={tIdx}
                                className="rounded-md border border-slate-200/60 bg-slate-50 px-1.5 py-0.5 text-[10px] font-bold text-slate-700 dark:border-slate-700/50 dark:bg-slate-800/80 dark:text-slate-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 dark:hover:border-slate-600"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      {/* Fallback flat tech list if categories are missing (for GitHub imported projects) */}
                      {project.tech?.length > 0 && !project.languages?.length && !project.frameworks?.length && (
                        <div>
                          <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400 dark:text-slate-500">
                            Tech
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {project.tech.slice(0, 6).map(technology => (
                              <span
                                key={technology}
                                className="rounded-md border border-slate-200/60 bg-slate-50 px-1.5 py-0.5 text-[10px] font-bold text-slate-700 dark:border-slate-700/50 dark:bg-slate-800/80 dark:text-slate-300"
                              >
                                {technology}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Actions - Elegant divider with anchored bottom */}
                <div className="relative z-10 mt-5 pt-4 border-t border-slate-200/60 dark:border-slate-800/70 flex items-center gap-4">
                  {project.liveLink && project.liveLink !== '#' && project.sourceLink && project.liveLink !== project.sourceLink && (
                    <a 
                      className="group/link inline-flex items-center gap-1 text-[13px] font-bold text-blue-600 dark:text-blue-400 transition-all duration-200 hover:text-blue-700 dark:hover:text-blue-300 hover:gap-1.5" 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noreferrer"
                    >
                      Live Demo
                      <span className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">↗</span>
                    </a>
                  )}
                  <a 
                    className="group/link ml-auto inline-flex items-center gap-1 text-[13px] font-bold text-slate-700 dark:text-slate-300 transition-all duration-200 hover:text-slate-900 dark:hover:text-white hover:gap-1.5" 
                    href={project.sourceLink || project.liveLink} 
                    target="_blank" 
                    rel="noreferrer"
                  >
                    {project.sourceLink && project.liveLink && project.liveLink !== project.sourceLink ? 'Source' : 'GitHub'}
                    <span className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">↗</span>
                  </a>
                </div>
              </article>
            );
          })}
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