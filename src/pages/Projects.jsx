import { useEffect, useState } from 'react';

const projects = [
  {
    title: 'Todo_FullStack_Project',
    desc: 'Full-stack Todo application with user auth and persistent storage (MERN).',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    live: '#',
    code: 'https://github.com/anikroy4/Todo_FullStack_Project',
    languages: ['JavaScript'],
    frameworks: ['React', 'Express'],
    libraries: ['Mongoose', 'JSON Web Token'],
    css: ['CSS3', 'Tailwind CSS']
  },
  {
    title: 'Social_Media_Clone',
    desc: 'Social media clone demo showcasing posts, likes and basic user flows.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    live: '#',
    code: 'https://github.com/anikroy4/Social_Media_Clone',
    languages: ['JavaScript'],
    frameworks: ['React', 'Express'],
    libraries: ['Mongoose'],
    css: ['CSS3']
  },
  {
    title: 'Simple-Calculator',
    desc: 'Lightweight calculator built with vanilla HTML, CSS and JavaScript.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    live: '#',
    code: 'https://github.com/anikroy4/Simple-Calculator',
    languages: ['JavaScript'],
    frameworks: [],
    libraries: [],
    css: ['CSS3']
  },
  {
    title: 'Qwery--React_-_Responsive',
    desc: 'Responsive React UI project demonstrating layouts and interactions.',
    tech: ['React', 'JavaScript', 'CSS'],
    live: '#',
    code: 'https://github.com/anikroy4/Qwery--React_-_Responsive',
    languages: ['JavaScript'],
    frameworks: ['React'],
    libraries: [],
    css: ['CSS3']
  },
  {
    title: 'Quriarbox-website',
    desc: 'Figma to HTML/CSS implementation for a product landing page.',
    tech: ['HTML', 'CSS', 'Figma'],
    live: '#',
    code: 'https://github.com/anikroy4/Quriarbox-website',
    languages: ['HTML'],
    frameworks: [],
    libraries: [],
    css: ['CSS3']
  },
  {
    title: 'ElderlyCareGiverWeb',
    desc: 'A web project intended to provide resources and services for elderly caregivers.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    live: '#',
    code: 'https://github.com/anikroy4/ElderlyCareGiverWeb',
    languages: ['JavaScript'],
    frameworks: [],
    libraries: [],
    css: ['CSS3']
  }
];

const githubUsername = 'anikroy4';

const technologyAliases = {
  javascript: 'JavaScript',
  js: 'JavaScript',
  typescript: 'TypeScript',
  ts: 'TypeScript',
  python: 'Python',
  py: 'Python',
  html: 'HTML',
  html5: 'HTML5',
  css: 'CSS',
  css3: 'CSS3',
  scss: 'SCSS',
  sass: 'Sass',
  tailwind: 'Tailwind CSS',
  tailwindcss: 'Tailwind CSS',
  bootstrap: 'Bootstrap',
  react: 'React',
  'react.js': 'React',
  nextjs: 'Next.js',
  'next.js': 'Next.js',
  vue: 'Vue',
  angular: 'Angular',
  express: 'Express',
  django: 'Django',
  laravel: 'Laravel',
  mongoose: 'Mongoose',
  axios: 'Axios',
  redux: 'Redux',
  jquery: 'jQuery',
  firebase: 'Firebase',
  'socket.io': 'Socket.io',
  socketio: 'Socket.io',
  'framer-motion': 'Framer Motion',
  'styled-components': 'styled-components'
};

const frameworkNames = ['React', 'Next.js', 'Vue', 'Angular', 'Express', 'Django', 'Laravel'];
const cssNames = ['CSS', 'CSS3', 'SCSS', 'Sass', 'Tailwind CSS', 'Bootstrap', 'styled-components'];
const libraryNames = ['Mongoose', 'Axios', 'Redux', 'jQuery', 'Framer Motion', 'Firebase', 'Socket.io'];

function classifyTopics(language, topics) {
  const normalizedLanguage = language
    ? technologyAliases[language.toLowerCase()] || language
    : null;
  const allTechnologies = [...new Set([language, ...topics]
    .filter(Boolean)
    .map(technology => technologyAliases[technology.toLowerCase()] || technology))];
  const matches = names => allTechnologies.filter(technology => (
    names.some(name => technology.toLowerCase() === name.toLowerCase())
  ));

  return {
    languages: normalizedLanguage ? [normalizedLanguage] : [],
    frameworks: matches(frameworkNames),
    libraries: matches(libraryNames),
    css: matches(cssNames)
  };
}

function normalizeRepository(repository) {
  const categories = classifyTopics(repository.language, repository.topics || []);

  return {
    title: repository.name,
    desc: repository.description || 'A project built and maintained on GitHub.',
    tech: [...new Set([
      ...categories.languages,
      ...categories.frameworks,
      ...categories.libraries,
      ...categories.css,
      ...(repository.topics || [])
    ])].slice(0, 8),
    ...categories,
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
          .map(normalizeRepository);
        const projectsByName = new Map(projects.map(project => [project.title, project]));

        importedProjects.forEach(project => {
          projectsByName.set(project.title, {
            ...projectsByName.get(project.title),
            ...project
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {githubProjects.map((p, i) => {
            return (
              <article 
                key={p.title} 
                style={{ animationDelay: `${i * 100}ms` }}
                className="flex flex-col rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200 dark:border-slate-800 p-4 shadow-lg shadow-slate-200/20 dark:shadow-black/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl animate-in fade-in slide-in-from-bottom-8"
              >
                {/* Image Placeholder - Abstract Gradient */}
                <div className="aspect-video w-full rounded-2xl overflow-hidden mb-6 relative group bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900">
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
                  <div className="mt-6">
                    <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Tech
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {p.tech.map(technology => (
                        <span
                          key={technology}
                          className="rounded-lg border border-slate-200/50 bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:border-slate-700/50 dark:bg-slate-800 dark:text-slate-300"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Actions */}
                <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 px-2 flex gap-4">
                  {p.live && p.live !== '#' && (
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