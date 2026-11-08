import { useEffect, useState, useMemo, useRef } from 'react';
import { githubProjectsData } from '../data/githubProjectsData';

const githubUsername = 'anikroy4';

// Curated concise GitHub project categories derived directly from Anik Roy's repositories (github.com/anikroy4)
// Focused on real project domains without cluttering the UI with dozens of raw technology tags
const githubCategories = [
  { id: 'All', label: 'All', match: () => true },
  { id: 'React & Web Apps', label: 'React & Web Apps', match: p => p.category === 'React & Web Apps' || (p.tech || []).includes('React') },
  { id: 'Full-Stack', label: 'Full-Stack', match: p => p.category === 'Full-Stack' || (p.tech || []).some(t => ['Node.js', 'Express', 'MongoDB', 'PHP'].includes(t)) },
  { id: 'Frontend & UI', label: 'Frontend & UI', match: p => p.category === 'Frontend & UI' },
  { id: 'Live Demos', label: 'Live Demos', match: p => p.isLive || (p.live && p.live !== '#') },
  { id: 'Games', label: 'Games', match: p => p.category === 'Games' || (p.title || '').toLowerCase().includes('game') },
  { id: 'C / Algorithms', label: 'C / Algorithms', match: p => p.category === 'C / Algorithms' || (p.tech || []).some(t => ['C', 'C++', 'Algorithms', 'Data Structures'].includes(t)) },
  { id: 'Java & OOP', label: 'Java & OOP', match: p => p.category === 'Java & OOP' || (p.tech || []).includes('Java') }
];

const expertiseMap = {
  fullstack: { label: 'Full-Stack', icon: '⚡', color: 'from-blue-600 to-indigo-600' },
  frontend: { label: 'Front-End', icon: '🎨', color: 'from-blue-600 to-indigo-600' },
  backend: { label: 'Back-End', icon: '🛠️', color: 'from-blue-600 to-indigo-600' },
  uix: { label: 'UI/UX', icon: '✨', color: 'from-blue-600 to-indigo-600' },
  learning: { label: 'CS & Algorithms', icon: '📐', color: 'from-blue-600 to-indigo-600' }
};

export default function Projects() {
  const [githubProjects, setGithubProjects] = useState(githubProjectsData);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef(null);

  // Keyboard shortcut: Press "/" to focus search bar, "Escape" to blur
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '/' && document.activeElement !== searchInputRef.current) {
        const tagName = document.activeElement?.tagName;
        if (tagName !== 'INPUT' && tagName !== 'TEXTAREA' && !document.activeElement?.isContentEditable) {
          e.preventDefault();
          searchInputRef.current?.focus();
        }
      } else if (e.key === 'Escape' && document.activeElement === searchInputRef.current) {
        searchInputRef.current?.blur();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Fetch real-time live GitHub stars and updates from anikroy4
  useEffect(() => {
    const controller = new AbortController();

    async function loadGithubProjects() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=100`,
          { signal: controller.signal }
        );

        if (!response.ok) return;

        const repositories = await response.json();
        if (!Array.isArray(repositories)) return;

        const projectsByName = new Map(githubProjectsData.map(p => [p.title.toLowerCase(), p]));

        repositories
          .filter(repo => !repo.fork && repo.name !== 'anikroy4')
          .forEach(repo => {
            const key = repo.name.toLowerCase();
            const existing = projectsByName.get(key);

            if (existing) {
              const isLive = Boolean(repo.homepage && repo.homepage.startsWith('http')) || existing.isLive;
              projectsByName.set(key, {
                ...existing,
                stars: Number(repo.stargazers_count || existing.stars || 0),
                updatedAt: repo.updated_at || existing.updatedAt,
                live: (repo.homepage && repo.homepage.startsWith('http')) ? repo.homepage : existing.live,
                code: repo.html_url || existing.code,
                isLive
              });
            }
          });

        setGithubProjects([...projectsByName.values()].sort((a, b) => {
          if (b.isLive !== a.isLive) return b.isLive ? 1 : -1;
          if ((b.stars || 0) !== (a.stars || 0)) return (b.stars || 0) - (a.stars || 0);
          return a.title.localeCompare(b.title);
        }));
      } catch {
        // Keep analyzed repository data intact
      }
    }

    loadGithubProjects();
    return () => controller.abort();
  }, []);

  // Compute category pills with exact counts matching GitHub repositories
  const categoryPillsWithCounts = useMemo(() => {
    return githubCategories.map(cat => ({
      id: cat.id,
      label: cat.label,
      count: cat.id === 'All' ? githubProjects.length : githubProjects.filter(cat.match).length
    }));
  }, [githubProjects]);

  // Filtered projects based on selected category and search query
  const filteredProjects = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    const activeCategoryObj = githubCategories.find(c => c.id === selectedCategory);

    return githubProjects.filter(p => {
      // 1. Category match
      if (selectedCategory !== 'All' && activeCategoryObj) {
        if (!activeCategoryObj.match(p)) return false;
      }

      // 2. Search query filter
      if (!q) return true;

      const titleMatch = (p.title || '').toLowerCase().includes(q);
      const descMatch = (p.desc || p.description || '').toLowerCase().includes(q);
      const categoryMatch = (p.category || '').toLowerCase().includes(q);
      const expertiseMatch = (p.expertise || '').toLowerCase().includes(q);

      const techMatch = [
        ...(p.tech || []),
        ...(p.languages || []),
        ...(p.frameworks || []),
        ...(p.databases || []),
        ...(p.css || []),
        ...(p.libraries || []),
        ...(p.highlights || [])
      ].some(t => t && t.toLowerCase().includes(q));

      return titleMatch || descMatch || categoryMatch || expertiseMatch || techMatch;
    });
  }, [githubProjects, selectedCategory, searchQuery]);

  // Handle clicking a badge inside a card to filter
  const handleBadgeClick = (techName) => {
    // Check if the badge corresponds to an existing category
    const matchedCategory = githubCategories.find(c => c.label.toLowerCase() === techName.toLowerCase());
    if (matchedCategory) {
      setSelectedCategory(matchedCategory.id);
    } else {
      setSearchQuery(techName);
    }
  };

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
        
        {/* Header Section matching Landing Page & Screenshot */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 animate-in fade-in slide-in-from-bottom-6 duration-700">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Projects <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Portfolio</span>
          </h1>
          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Search, filter, and discover all my work.
          </p>
        </div>

        {/* Search & Filter Controls Container */}
        <div className="max-w-3xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
          
          {/* Search Input Bar */}
          <div className="relative group">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400 dark:text-slate-500">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input 
              ref={searchInputRef}
              type="text" 
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search projects by title, tech stack, or description..."
              className="w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 py-3.5 pl-11 pr-20 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 shadow-lg shadow-slate-200/20 dark:shadow-black/20 backdrop-blur-xl transition-all focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-400"
              aria-label="Search projects by title, tech stack, or description"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 gap-1.5">
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="flex h-5 w-5 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-600 dark:hover:text-slate-200 transition-colors text-xs cursor-pointer"
                  aria-label="Clear search query"
                  title="Clear search"
                >
                  ✕
                </button>
              )}
              <kbd 
                onClick={() => searchInputRef.current?.focus()}
                className="hidden sm:inline-flex h-6  min-w-6 items-center justify-center rounded-md border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-[11px] font-mono text-slate-400 dark:text-slate-400 shadow-xs cursor-pointer hover:border-slate-300 dark:hover:border-slate-600"
                title="Press / to search"
              >
                /
              </kbd>
            </div>
          </div>

          {/* Filter Pills based on Landing Page Colors */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-6">
            {categoryPillsWithCounts.map(({ id, label, count }) => {
              const isSelected = selectedCategory.toLowerCase() === id.toLowerCase();
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setSelectedCategory(isSelected && id !== 'All' ? 'All' : id)}
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-950 font-semibold shadow-md shadow-slate-900/10'
                      : 'bg-white/70 dark:bg-slate-900/70 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:text-slate-900 dark:hover:text-white shadow-xs backdrop-blur-md'
                  }`}
                >
                  <span>{label}</span>
                  <span className={`text-xs sm:text-sm font-normal ${
                    isSelected
                      ? 'text-slate-400 dark:text-slate-500'
                      : 'text-slate-400 dark:text-slate-500'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Result Counter matching screenshot left alignment */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono">
            <p>
              Showing {filteredProjects.length} of {githubProjects.length} projects
              {selectedCategory !== 'All' && (
                <span className="ml-2 font-sans text-xs bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 px-2 py-0.5 rounded-md">
                  Filtered by: <strong>{selectedCategory}</strong>
                </span>
              )}
            </p>
            {(searchQuery || selectedCategory !== 'All') && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="font-sans text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer flex items-center gap-1"
              >
                <span>Reset filters</span>
                <span>✕</span>
              </button>
            )}
          </div>

        </div>

        {/* Empty State when no projects match search or filter */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 px-4 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl animate-in fade-in">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-800 text-3xl mb-4">
              🔍
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              No matching GitHub projects found
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
              We couldn&apos;t find any repositories matching {searchQuery ? `"${searchQuery}"` : ''} {selectedCategory !== 'All' ? `with category "${selectedCategory}"` : ''}. Try adjusting your keywords or clearing the active filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-5 inline-flex items-center justify-center rounded-full bg-slate-900 dark:bg-white px-5 py-2.5 text-xs sm:text-sm font-semibold text-white dark:text-slate-900 transition-transform hover:scale-105 cursor-pointer shadow-md"
            >
              Clear Search &amp; Filters
            </button>
          </div>
        )}

        {/* Projects Grid - Retaining User's Original Card Design and Colors */}
        {filteredProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {filteredProjects.map((p, i) => {
              const exp = expertiseMap[p.expertise] || expertiseMap.frontend;
              const hasLive = p.live && p.live !== '#';

              return (
                <article 
                  key={p.title} 
                  style={{ animationDelay: `${i * 40}ms` }}
                  className="group relative h-full w-full flex flex-col overflow-hidden rounded-2xl bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200/70 dark:border-slate-800/80 p-5 shadow-md shadow-slate-200/40 dark:shadow-black/30 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-15px_rgba(59,130,246,0.3)] dark:hover:shadow-[0_20px_50px_-15px_rgba(59,130,246,0.25)] hover:border-blue-200/60 dark:hover:border-blue-800/50 animate-in fade-in slide-in-from-bottom-8"
                >
                  {/* Subtle linear glow on hover */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-blue-500/10 blur-3xl"></div>
                    <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-indigo-500/10 blur-3xl"></div>
                  </div>

                  {/* Image Placeholder - User's Original Aspect Visual Box */}
                  <div className="aspect-16/10 w-full rounded-xl overflow-hidden mb-5 relative bg-linear-to-br from-slate-100 via-slate-50 to-slate-100 dark:from-slate-800 dark:via-slate-800/70 dark:to-slate-900 border border-slate-200/60 dark:border-slate-700/50">
                    {/* Inner glow pattern */}
                    <div className="absolute inset-0 bg-[radial-linear(ellipse_at_top,rgba(59,130,246,0.12),transparent_60%)]"></div>
                    <div className="absolute inset-0 bg-[radial-linear(ellipse_at_bottom_right,rgba(99,102,241,0.10),transparent_55%)]"></div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-linear-to-tr from-blue-600/0 via-indigo-600/0 to-blue-600/0 group-hover:from-blue-600/10 group-hover:via-indigo-600/8 group-hover:to-blue-600/10 transition-all duration-500"></div>
                    
                    {/* Expertise Badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <div className="inline-flex items-center gap-1.5 rounded-full border border-white/60 dark:border-slate-700/60 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md px-2.5 py-1 shadow-md shadow-slate-900/5 dark:shadow-black/30">
                        <span className="text-sm leading-none">{exp.icon}</span>
                        <span className={`text-[10px] font-extrabold tracking-wide bg-clip-text text-transparent bg-linear-to-r ${exp.color}`}>
                          {p.category || exp.label}
                        </span>
                      </div>
                    </div>

                    {/* Project Number / Star Count */}
                    <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5">
                      {p.stars > 0 && (
                        <div className="rounded-full border border-white/40 dark:border-white/10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-2 py-0.5 text-amber-600 dark:text-amber-400 text-[10px] font-bold shadow-xs">
                          ★ {p.stars}
                        </div>
                      )}
                      <div className="rounded-full border border-white/40 dark:border-white/10 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md px-2.5 py-1 text-slate-600/90 dark:text-slate-400 text-[10px] font-black tracking-[0.15em] shadow-sm">
                        {i < 9 ? `0${i + 1}` : i + 1}
                      </div>
                    </div>

                    {/* Center Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 rounded-3xl bg-blue-500/10 blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                        <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-white/60 dark:bg-slate-800/50 border border-white/70 dark:border-slate-700/50 backdrop-blur-md shadow-lg shadow-slate-900/5 group-hover:scale-110 transition-transform duration-500">
                          <span className="text-3xl drop-shadow-sm">
                            {p.category === 'Games' ? '🎮' : (p.category === 'C / Algorithms' ? '📐' : (p.category === 'Java & OOP' ? '☕' : (hasLive ? '🚀' : '💻')))}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Live Deployment indicator on visual box */}
                    {hasLive && (
                      <div className="absolute bottom-2.5 left-3 z-10">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/90 backdrop-blur-md text-white text-[9px] font-extrabold px-2 py-0.5 shadow-sm">
                          <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse"></span>
                          LIVE APP
                        </span>
                      </div>
                    )}

                    {/* Bottom subtle shine line */}
                    <div className="absolute bottom-0 left-4 right-4 h-px bg-linear-to-r from-transparent via-blue-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Content - Equal height layout */}
                  <div className="relative z-10 flex-1 flex flex-col min-h-0">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug tracking-tight transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-blue-600 group-hover:to-indigo-600 dark:group-hover:from-blue-400 dark:group-hover:to-indigo-400 line-clamp-1" title={p.title}>
                      {p.title.replace(/[-_]/g, ' ')}
                    </h3>
                    <p className="mt-2.5 text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3 min-h-18">
                      {p.desc}
                    </p>

                    {/* Highlights / Feature Pills */}
                    {p.highlights?.length > 0 && (
                      <div className="mt-3.5 flex flex-wrap gap-1.5">
                        {p.highlights.map((h, hIdx) => (
                          <span key={hIdx} className="inline-flex items-center gap-1 rounded-full bg-linear-to-r from-blue-50 to-indigo-50 px-2 py-0.5 text-[10px] font-bold text-indigo-700 border border-blue-100/70 dark:from-blue-950/40 dark:to-indigo-950/30 dark:text-indigo-300 dark:border-blue-900/30">
                            <span className="h-1 w-1 rounded-full bg-linear-to-r from-blue-500 to-indigo-500"></span>
                            {h}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    {/* Tech & Expertise Section */}
                    <div className="mt-4 flex-1 min-h-0 overflow-hidden flex flex-col justify-start">
                      <div className="mb-2.5 pb-2 border-b border-dashed border-slate-200/70 dark:border-slate-700/60 flex items-center gap-2">
                        <div className="h-4 w-0.5 rounded-full bg-linear-to-b from-blue-500 to-indigo-500"></div>
                        <p className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">
                          Tech &amp; Expertise
                        </p>
                      </div>

                      <div className="space-y-2.5">
                        {p.languages?.length > 0 && (
                          <div>
                            <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">
                              Languages
                            </p>
                            <div className="flex flex-wrap gap-1">
                              {p.languages.slice(0, 3).map((tech, tIdx) => (
                                <button
                                  key={tIdx}
                                  type="button"
                                  onClick={() => handleBadgeClick(tech)}
                                  title={`Filter by ${tech}`}
                                  className="rounded-md border border-slate-200/60 bg-slate-50 px-1.5 py-0.5 text-[10px] font-bold text-slate-700 dark:border-slate-700/50 dark:bg-slate-800/80 dark:text-slate-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 dark:hover:border-slate-600 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
                                >
                                  {tech}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}

                        {p.frameworks?.length > 0 && (
                          <div>
                            <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">
                              Frameworks &amp; Core
                            </p>
                            <div className="flex flex-wrap gap-1">
                              {p.frameworks.slice(0, 4).map((tech, tIdx) => (
                                <button
                                  key={tIdx}
                                  type="button"
                                  onClick={() => handleBadgeClick(tech)}
                                  title={`Filter by ${tech}`}
                                  className="rounded-md border border-blue-200/60 bg-blue-50/80 px-1.5 py-0.5 text-[10px] font-bold text-blue-700 dark:border-blue-900/40 dark:bg-blue-950/30 dark:text-blue-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 dark:hover:border-blue-700 cursor-pointer"
                                >
                                  {tech}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Flat Tech Badges */}
                        {p.tech?.length > 0 && (
                          <div>
                            <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">
                              Technologies
                            </p>
                            <div className="flex flex-wrap gap-1">
                              {p.tech.slice(0, 6).map((technology) => (
                                <button
                                  key={technology}
                                  type="button"
                                  onClick={() => handleBadgeClick(technology)}
                                  title={`Filter by ${technology}`}
                                  className="rounded-md border border-slate-200/60 bg-slate-50 px-1.5 py-0.5 text-[10px] font-bold text-slate-700 dark:border-slate-700/50 dark:bg-slate-800/80 dark:text-slate-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 dark:hover:border-slate-600 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
                                >
                                  {technology}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Actions - Elegant Anchored Footer */}
                  <div className="relative z-10 mt-5 pt-4 border-t border-slate-200/60 dark:border-slate-800/70 flex items-center gap-4">
                    {hasLive && (
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
                      {hasLive ? 'Source' : 'GitHub'}
                      <span className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">↗</span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
