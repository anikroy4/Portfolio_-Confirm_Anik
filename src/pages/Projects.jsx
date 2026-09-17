import { useEffect, useState } from 'react';

const projects = [
  {
    title: 'Todo_FullStack_Project',
    desc: 'Full-stack Todo application with user auth and persistent storage (MERN).',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    live: '#',
    code: 'https://github.com/anikroy4/Todo_FullStack_Project',
    expertise: 'fullstack',
    highlights: ['Authentication', 'CRUD API', 'Data Persistence'],
    stars: 3,
    languages: ['JavaScript'],
    frameworks: ['React', 'Express', 'Node.js'],
    libraries: ['Mongoose', 'JSON Web Token'],
    databases: ['MongoDB'],
    css: ['CSS3', 'Tailwind CSS']
  },
  {
    title: 'Social_Media_Clone',
    desc: 'Social media clone demo showcasing posts, likes and basic user flows.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    live: '#',
    code: 'https://github.com/anikroy4/Social_Media_Clone',
    expertise: 'fullstack',
    highlights: ['Post System', 'Like/Comment', 'User Auth'],
    stars: 2,
    languages: ['JavaScript'],
    frameworks: ['React', 'Express', 'Node.js'],
    libraries: ['Mongoose'],
    databases: ['MongoDB'],
    css: ['CSS3']
  },
  {
    title: 'Simple-Calculator',
    desc: 'Lightweight calculator built with vanilla HTML, CSS and JavaScript.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    live: '#',
    code: 'https://github.com/anikroy4/Simple-Calculator',
    expertise: 'frontend',
    highlights: ['Vanilla JS', 'Clean UI', 'Responsive'],
    stars: 1,
    languages: ['JavaScript', 'HTML', 'CSS'],
    frameworks: [],
    libraries: [],
    databases: [],
    css: ['CSS3']
  },
  {
    title: 'Qwery--React_-_Responsive',
    desc: 'Responsive React UI project demonstrating layouts and interactions.',
    tech: ['React', 'JavaScript', 'CSS'],
    live: '#',
    code: 'https://github.com/anikroy4/Qwery--React_-_Responsive',
    expertise: 'frontend',
    highlights: ['Responsive Layout', 'Animations', 'Modern UI'],
    stars: 1,
    languages: ['JavaScript'],
    frameworks: ['React'],
    libraries: [],
    databases: [],
    css: ['CSS3']
  },
  {
    title: 'Quriarbox-website',
    desc: 'Full-stack cleaning services website with booking system, responsive UI and database-backed services.',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Figma'],
    live: '#',
    code: 'https://github.com/anikroy4/Quriarbox-website',
    expertise: 'fullstack',
    highlights: ['Booking System', 'Service Pages', 'Responsive'],
    stars: 2,
    languages: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    frameworks: [],
    libraries: [],
    databases: ['MySQL'],
    css: ['CSS3']
  },
  {
    title: 'ElderlyCareGiverWeb',
    desc: 'Full-stack web platform providing resources and booking services for elderly caregivers.',
    tech: ['HTML', 'CSS', 'JavaScript','PHP', 'MySQL'],
    live: '#',
    code: 'https://github.com/anikroy4/ElderlyCareGiverWeb',
    expertise: 'fullstack',
    highlights: ['User Friendly', 'Booking System', 'Scalable'],
    stars: 2,
    languages: ['JavaScript', 'PHP'],
    frameworks: [],
    libraries: [],
    databases: ['MySQL'],
    css: ['CSS3']
  },
  {
    title: 'Final-Portfolio',
    desc: 'Full-stack developer portfolio website with GitHub integration, dynamic projects, and modern UI.',
    tech: ['React', 'JavaScript', 'Node.js', 'Vite', 'Tailwind CSS', 'GitHub API'],
    live: '#',
    code: 'https://github.com/anikroy4/Final-Portfolio',
    expertise: 'fullstack',
    highlights: ['GitHub API', 'Dynamic Projects', 'Modern UI'],
    stars: 5,
    languages: ['JavaScript'],
    frameworks: ['React', 'Node.js'],
    libraries: [],
    databases: [],
    css: ['Tailwind CSS', 'CSS3']
  }
];

const githubUsername = 'anikroy4';

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

const frameworkNames = ['React', 'Next.js', 'Vue', 'Angular', 'Express', 'Django', 'Laravel', 'Node.js'];
const cssNames = ['CSS', 'CSS3', 'SCSS', 'Sass', 'Tailwind CSS', 'Bootstrap', 'styled-components'];
const libraryNames = ['Mongoose', 'Axios', 'Redux', 'jQuery', 'Framer Motion', 'Firebase', 'Socket.io', 'JSON Web Token'];
const databaseNames = ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase'];
const languageNames = ['JavaScript', 'TypeScript', 'Python', 'PHP', 'HTML', 'HTML5', 'CSS', 'CSS3'];

const expertiseMap = {
  fullstack: { label: 'Full-Stack', icon: '⚡', color: 'from-blue-600 to-indigo-600' },
  frontend: { label: 'Front-End', icon: '🎨', color: 'from-blue-600 to-indigo-600' },
  backend: { label: 'Back-End', icon: '🛠️', color: 'from-blue-600 to-indigo-600' },
  uix: { label: 'UI/UX', icon: '✨', color: 'from-blue-600 to-indigo-600' },
  learning: { label: 'Learning', icon: '📚', color: 'from-blue-600 to-indigo-600' }
};

const highlightPool = [
  ['Authentication', 'Responsive', 'Modern UI'],
  ['Clean Code', 'Best Practices', 'Optimized'],
  ['Interactive', 'User Friendly', 'Scalable'],
  ['Responsive Layout', 'Animations', 'Performance'],
  ['REST APIs', 'Data Flow', 'Secure'],
  ['Figma to Code', 'Pixel Perfect', 'Accessible']
];

const fullstackTitleKeywords = ['fullstack', 'full-stack', 'full_stack', 'portfolio', 'social_media', 'socialmedia', 'social-media', 'elderlycare', 'caregiver', 'cleaning'];
const forceFullstackTitles = ['Todo_FullStack_Project', 'Social_Media_Clone', 'ElderlyCareGiverWeb', 'Final-Portfolio', 'Portfolio', 'Cleaning-Website', 'cleaning-website', 'CleaningWebsite'];

function determineExpertise(categories, title = '') {
  const normalizedTitle = title ? title.toLowerCase().replace(/[\s-]/g, '_') : '';
  if (forceFullstackTitles.some(t => t.toLowerCase() === title.toLowerCase()) ||
      fullstackTitleKeywords.some(kw => normalizedTitle.includes(kw.toLowerCase()))) {
    return 'fullstack';
  }
  const hasBackend = categories.frameworks?.some(f => ['Express', 'Node.js', 'Django', 'Laravel'].includes(f)) ||
                     categories.databases?.length > 0;
  const hasFrontend = categories.frameworks?.includes('React') ||
                      categories.languages?.some(l => ['HTML', 'HTML5', 'CSS', 'CSS3', 'JavaScript'].includes(l));
  if (hasBackend && hasFrontend) return 'fullstack';
  if (hasBackend) return 'backend';
  return 'frontend';
}

function classifyTopics(language, topics) {
  const normalizedLanguage = language
    ? technologyAliases[language.toLowerCase()] || language
    : null;
  const allRawTech = [language, ...topics].filter(Boolean);
  const allTechnologies = [...new Set(allRawTech
    .map(technology => technologyAliases[technology.toLowerCase()] || technology))];
  const matches = names => allTechnologies.filter(technology => (
    names.some(name => technology.toLowerCase() === name.toLowerCase())
  ));
  const allLanguagesMatched = matches(languageNames);
  const primaryLangList = normalizedLanguage && allLanguagesMatched.includes(normalizedLanguage)
    ? [normalizedLanguage]
    : (normalizedLanguage ? [normalizedLanguage] : allLanguagesMatched);

  return {
    languages: [...new Set([...primaryLangList, ...allLanguagesMatched])],
    frameworks: matches(frameworkNames),
    libraries: matches(libraryNames),
    databases: matches(databaseNames),
    css: matches(cssNames)
  };
}

function normalizeRepository(repository, idx = 0) {
  const categories = classifyTopics(repository.language, repository.topics || []);
  const expertise = determineExpertise(categories, repository.name || '');
  const highlights = highlightPool[idx % highlightPool.length];

  return {
    title: repository.name,
    desc: repository.description || 'A project built and maintained on GitHub.',
    tech: [...new Set([
      ...categories.languages,
      ...categories.frameworks,
      ...categories.libraries,
      ...categories.databases,
      ...categories.css,
      ...(repository.topics || [])
    ])].slice(0, 8),
    ...categories,
    expertise,
    highlights,
    stars: Number(repository.stargazers_count || 0),
    live: repository.homepage || '#',
    code: repository.html_url,
    updatedAt: repository.updated_at
  };
}

export default function Projects() {
  const [githubProjects, setGithubProjects] = useState(projects);
  const [isLoading, setIsLoading] = useState(true);
  const [hasFetchError, setHasFetchError] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    async function loadGithubProjects() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=100`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error(`GitHub request failed with ${response.status}`);
        }

        const repositories = await response.json();
        const importedProjects = repositories
          .filter(repository => !repository.fork)
          .map((repo, i) => normalizeRepository(repo, i));
        const projectsByName = new Map(projects.map(project => [project.title, project]));

        importedProjects.forEach(project => {
          const existing = projectsByName.get(project.title) || {};
          projectsByName.set(project.title, {
            ...existing,
            ...project,
            expertise: determineExpertise(
              { frameworks: project.frameworks, databases: project.databases, languages: project.languages },
              project.title || ''
            )
          });
        });

        setGithubProjects([...projectsByName.values()].sort((first, second) => (
          new Date(second.updatedAt || 0) - new Date(first.updatedAt || 0)
        )));
      } catch (error) {
        if (error.name !== 'AbortError') {
          setHasFetchError(true);
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    loadGithubProjects();

    return () => controller.abort();
  }, [refreshKey]);

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        
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

        <div className="mb-8 flex min-h-10 flex-wrap items-center justify-between gap-3 text-sm text-slate-500 dark:text-slate-400" aria-live="polite">
          <div className="flex items-center gap-2">
            {isLoading && (
              <>
                <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
                Updating repositories from GitHub...
              </>
            )}
            {!isLoading && hasFetchError && (
              <>
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                Showing saved projects. GitHub could not be reached.
              </>
            )}
            {!isLoading && !hasFetchError && `${githubProjects.length} public projects from GitHub`}
          </div>
          <button
            type="button"
            onClick={() => {
              setHasFetchError(false);
              setIsLoading(true);
              setRefreshKey(currentKey => currentKey + 1);
            }}
            disabled={isLoading}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-blue-300 hover:text-blue-600 disabled:cursor-wait disabled:opacity-60 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:border-blue-700 dark:hover:text-blue-400"
          >
            <span className={isLoading ? 'animate-spin' : ''}>↻</span>
            {isLoading ? 'Updating...' : 'Update from GitHub'}
          </button>
        </div>

        {/* Projects Grid - Elegant equal-height cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {githubProjects.map((p, i) => {
            const exp = expertiseMap[p.expertise] || expertiseMap.frontend;
            const highlights = p.highlights || highlightPool[i % highlightPool.length];
            return (
              <article 
                key={p.title} 
                style={{ animationDelay: `${i * 80}ms` }}
                className="group relative h-full w-full flex flex-col overflow-hidden rounded-2xl bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200/70 dark:border-slate-800/80 p-5 shadow-md shadow-slate-200/40 dark:shadow-black/30 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-15px_rgba(59,130,246,0.3)] dark:hover:shadow-[0_20px_50px_-15px_rgba(59,130,246,0.25)] hover:border-blue-200/60 dark:hover:border-blue-800/50 animate-in fade-in slide-in-from-bottom-8"
              >
                {/* Subtle gradient glow on hover */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-blue-500/10 blur-3xl"></div>
                  <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-indigo-500/10 blur-3xl"></div>
                </div>

                {/* Image Placeholder - Elegant visual */}
                <div className="aspect-[16/10] w-full rounded-xl overflow-hidden mb-5 relative bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100 dark:from-slate-800 dark:via-slate-800/70 dark:to-slate-900 border border-slate-200/60 dark:border-slate-700/50">
                  {/* Inner glow pattern */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.12),transparent_60%)]"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(99,102,241,0.10),transparent_55%)]"></div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/0 via-indigo-600/0 to-blue-600/0 group-hover:from-blue-600/10 group-hover:via-indigo-600/8 group-hover:to-blue-600/10 transition-all duration-500"></div>
                  
                  {/* Expertise Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-white/60 dark:border-slate-700/60 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md px-2.5 py-1 shadow-md shadow-slate-900/5 dark:shadow-black/30">
                      <span className="text-sm leading-none">{exp.icon}</span>
                      <span className={`text-[10px] font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r ${exp.color}`}>
                        {exp.label}
                      </span>
                    </div>
                  </div>

                  {/* Project Number - Elegant */}
                  <div className="absolute top-3 right-3 z-10">
                    <div className="rounded-full border border-white/40 dark:border-white/10 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md px-2.5 py-1 text-slate-600/90 dark:text-slate-400 text-[10px] font-black tracking-[0.15em] shadow-sm">
                      0{i + 1}
                    </div>
                  </div>

                  {/* Center Icon */}
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
                
                {/* Content - Equal height layout */}
                <div className="relative z-10 flex-1 flex flex-col min-h-0">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug tracking-tight transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 dark:group-hover:from-blue-400 dark:group-hover:to-indigo-400 line-clamp-1" title={p.title}>
                    {p.title.replace(/[-_]/g, ' ')}
                  </h3>
                  <p className="mt-2.5 text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3 min-h-[4.5rem]">
                    {p.desc}
                  </p>

                  {/* Highlights / Feature Pills */}
                  {highlights?.length > 0 && (
                    <div className="mt-3.5 flex flex-wrap gap-1.5">
                      {highlights.map((h, hIdx) => (
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
                      {p.languages?.length > 0 && (
                        <div>
                          <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400 dark:text-slate-500">
                            Languages
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {p.languages.slice(0, 3).map((tech, tIdx) => (
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
                      {p.frameworks?.length > 0 && (
                        <div>
                          <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400 dark:text-slate-500">
                            Frameworks
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {p.frameworks.slice(0, 4).map((tech, tIdx) => (
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
                      {(p.databases?.length > 0 || p.libraries?.length > 0) && (
                        <div>
                          <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400 dark:text-slate-500">
                            Tools &amp; DB
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {p.databases?.slice(0, 2).map((tech, tIdx) => (
                              <span
                                key={`db-${tIdx}`}
                                className="rounded-md border border-indigo-200/60 bg-indigo-50/80 px-1.5 py-0.5 text-[10px] font-bold text-indigo-700 dark:border-indigo-900/40 dark:bg-indigo-950/30 dark:text-indigo-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-300 dark:hover:border-indigo-700"
                              >
                                {tech}
                              </span>
                            ))}
                            {p.libraries?.slice(0, 2).map((tech, tIdx) => (
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
                      {p.css?.length > 0 && (
                        <div>
                          <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400 dark:text-slate-500">
                            Styling
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {p.css.slice(0, 2).map((tech, tIdx) => (
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
                      {/* Fallback flat tech list if categories are missing */}
                      {p.tech?.length > 0 && !p.languages?.length && !p.frameworks?.length && (
                        <div>
                          <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400 dark:text-slate-500">
                            Tech
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {p.tech.slice(0, 6).map(technology => (
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
                
                {/* Actions - Elegant anchored footer */}
                <div className="relative z-10 mt-5 pt-4 border-t border-slate-200/60 dark:border-slate-800/70 flex items-center gap-4">
                  {p.live && p.live !== '#' && (
                    <a 
                      className="group/link inline-flex items-center gap-1 text-[13px] font-bold text-blue-600 dark:text-blue-400 transition-all duration-200 hover:text-blue-700 dark:hover:text-blue-300 hover:gap-1.5" 
                      href={p.live} 
                      target="_blank" 
                      rel="noreferrer"
                    >
                      Live Demo
                      <span className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">↗</span>
                    </a>
                  )}
                  <a 
                    className="group/link ml-auto inline-flex items-center gap-1 text-[13px] font-bold text-slate-700 dark:text-slate-300 transition-all duration-200 hover:text-slate-900 dark:hover:text-white hover:gap-1.5" 
                    href={p.code} 
                    target="_blank" 
                    rel="noreferrer"
                  >
                    {p.live && p.live !== '#' ? 'Source' : 'GitHub'}
                    <span className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">↗</span>
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