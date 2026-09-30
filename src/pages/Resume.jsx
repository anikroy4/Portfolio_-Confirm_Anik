import { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

const resumeData = {
  name: 'Anik Roy',
  title: ' MERN Stack Developer',
  headline: 'Crafting performant, accessible, and interactive user interfaces with React.js & the modern JavaScript ecosystem.',
  contact: {
    email: 'anikroy.uiu.ac.bd@gmail.com',
    phone: '+88 01521 428525',
    address: 'Dhaka - 1000, Bangladesh',
    github: 'https://github.com/anikroy4',
    linkedin: 'https://www.linkedin.com/in/anik-roy-bd/'
  },
  metrics: [
    { label: 'Practical Experience', value: '2+ Years', detail: 'Hands-on Web Dev & Training', icon: '⚡' },
    { label: 'Projects Built', value: '15+', detail: 'Frontend & Full-Stack Apps', icon: '🚀' },
    { label: 'Tech & Libraries', value: '25+', detail: 'Modern Frontend & Backend Tools', icon: '🛠️' },
    { label: 'Education', value: 'B.Sc. in CSE', detail: 'United International University', icon: '🎓' }
  ],
  summary: "Highly motivated Front-End & MERN Stack Developer with extensive training and hands-on experience building modern, responsive, and accessible web applications. Proficient in React.js, JavaScript (ES6+), Tailwind CSS, Node.js, Express.js, and MongoDB. Certified at NSDA Level 3 for web development with a strong academic foundation in Computer Science & Engineering from United International University.",
  experience: [
    {
      company: 'CraftBit Tech BD Ltd.',
      role: 'CEO & Lead MERN Stack Developer',
      badge: 'Founder & Lead Developer',
      period: '2026',
      location: 'Dhaka, Bangladesh',
      highlights: [
        'Founded and led a tech startup specializing in full-stack web development, delivering high-quality solutions to clients.',
        'Designed and implemented scalable web applications using the MERN stack, ensuring optimal performance and user experience.',
        'Managed a team of developers, overseeing project timelines, code quality, and client communications.'
      ]
    },
    {
      role: 'MERN Stack Developer (Specialized Track)',
      company: 'One Year Academy',
      badge: 'Advanced Specialization',
      period: '2024 - 2025 (Running)',
      location: 'Online / Dhaka',
      highlights: [
        'Developed end-to-end full stack web applications with React.js on the client, Node.js & Express.js REST APIs on the backend, and MongoDB Atlas for data storage.',
        'Implemented secure user authentication with JWT, role-based access control, database aggregation, and cloud deployments on Vercel.',
        'Designed performant RESTful APIs and connected responsive UI components with clean state management.'
      ]
    },
    {
      role: 'Front-End Developer (Professional Training)',
      company: 'Creative IT Institute',
      badge: 'Professional Training',
      period: '2023 - 2024',
      location: 'Dhaka, Bangladesh',
      highlights: [
        'Mastered core web fundamentals: Semantic HTML5, CSS3/SASS, Flexbox, CSS Grid, Tailwind CSS, and Bootstrap.',
        'Built dynamic single-page web applications utilizing JavaScript (ES6+), asynchronous APIs, DOM manipulation, and modern React patterns.',
        'Practiced mobile-first responsive design, component reusability, and clean code formatting.'
      ]
    }
  ],
  education: [
    {
      degree: 'B.Sc. in Computer Science & Engineering',
      institution: 'United International University (UIU)',
      period: 'Expected 2027',
      location: 'Dhaka, Bangladesh',
      status: 'In Progress'
    },
    {
      degree: 'Higher Secondary Certificate (HSC) - Science',
      institution: 'Dhaka City College',
      period: '2016',
      location: 'Dhaka, Bangladesh',
      status: 'Completed'
    },
    {
      degree: 'Secondary School Certificate (SSC) - Science',
      institution: "Motijheel Govt. Boys' High School",
      period: '2014',
      location: 'Dhaka, Bangladesh',
      status: 'Completed'
    }
  ],
  skillCategories: {
    frontend: {
      title: 'Frontend Development',
      items: ['React.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5', 'CSS3', 'Bootstrap', 'jQuery', 'Single Page Apps (SPA)', 'Responsive Web Design']
    },
    backend: {
      title: 'Backend & APIs',
      items: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT Auth', 'Server-Side Logic', 'API Integration']
    },
    database: {
      title: 'Databases & Cloud',
      items: ['MongoDB', 'Mongoose ODM', 'MongoDB Atlas', 'PostgreSQL', 'MySQL', 'Firebase', 'Supabase']
    },
    tools: {
      title: 'Tools & Workflows',
      items: ['Git & GitHub', 'VS Code', 'Postman', 'Vercel', 'Netlify', 'Figma', 'Chrome DevTools', 'npm / yarn', 'Vite']
    },
    core: {
      title: 'Core Fundamentals',
      items: ['Data Structures & Algorithms', 'Object-Oriented Programming (OOP)', 'Component Lifecycle', 'Clean Code Practices', 'Agile & Team Collaboration']
    }
  },
  certifications: [
    {
      title: 'National Skills Development Authority (NSDA) Level 3',
      issuer: 'Creative IT Institute / Govt. of Bangladesh',
      year: '2026',
      tag: 'Certified'
    },
    {
      title: 'MERN Stack Web Development Specialization',
      issuer: 'One Year Academy',
      year: '2025',
      tag: 'Specialized'
    },
    {
      title: 'Certified Front-End Web Development',
      issuer: 'Creative IT Institute',
      year: '2024',
      tag: 'Certified'
    }
  ],
  featuredProjects: [
    {
      title: 'MERN Stack E-Commerce & Management Platform',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      description: 'Comprehensive full-stack web application featuring user authentication, product catalog, cart management, and responsive dashboard.',
      link: '/projects'
    },
    {
      title: 'Interactive Developer Portfolio & Showcase',
      tech: ['React.js', 'Tailwind CSS', 'Web3Forms API', 'Vite'],
      description: 'Ultra-fast personal developer brand featuring GitHub live project importer, dark/light theme, in-page form submissions, and interactive resume.',
      link: '/projects'
    }
  ]
};

const githubUsername = 'anikroy4';
const skillAliases = {
  js: 'JavaScript',
  javascript: 'JavaScript (ES6+)',
  ts: 'TypeScript',
  typescript: 'TypeScript',
  html: 'HTML5',
  html5: 'HTML5',
  css: 'CSS3',
  css3: 'CSS3',
  tailwind: 'Tailwind CSS',
  tailwindcss: 'Tailwind CSS',
  react: 'React.js',
  'react.js': 'React.js',
  node: 'Node.js',
  nodejs: 'Node.js',
  'node.js': 'Node.js',
  express: 'Express.js',
  mongodb: 'MongoDB',
  mongoose: 'Mongoose',
  python: 'Python',
  bootstrap: 'Bootstrap',
  firebase: 'Firebase'
};

function normalizeSkill(skill) {
  return skillAliases[skill.toLowerCase()] || skill;
}

export default function Resume() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedItem, setCopiedItem] = useState(null);
  const [showPdfModal, setShowPdfModal] = useState(false);
  const [githubExtraSkills, setGithubExtraSkills] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    async function loadGithubSkills() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${githubUsername}/repos?per_page=100`,
          { signal: controller.signal }
        );

        if (!response.ok) return;

        const repositories = await response.json();
        const skills = repositories
          .filter(repo => !repo.fork)
          .flatMap(repo => [repo.language, ...(repo.topics || [])])
          .filter(Boolean)
          .map(normalizeSkill);

        setGithubExtraSkills([...new Set(skills)]);
      } catch {
        // Fallback silently
      }
    }

    loadGithubSkills();
    return () => controller.abort();
  }, []);

  const filteredSkills = useMemo(() => {
    let pool = [];
    if (activeCategory === 'all') {
      Object.values(resumeData.skillCategories).forEach(cat => pool.push(...cat.items));
      pool.push(...githubExtraSkills);
    } else if (resumeData.skillCategories[activeCategory]) {
      pool = [...resumeData.skillCategories[activeCategory].items];
    }

    const uniqueSkills = [...new Set(pool)];

    if (!searchQuery.trim()) {
      return uniqueSkills;
    }

    return uniqueSkills.filter(s =>
      s.toLowerCase().includes(searchQuery.toLowerCase().trim())
    );
  }, [activeCategory, searchQuery, githubExtraSkills]);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        
        {/* Top Header Card & Actions */}
        <div className="relative mb-10 overflow-hidden rounded-3xl bg-white/80 dark:bg-slate-900/80 p-6 sm:p-10 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 shadow-xl shadow-slate-200/30 dark:shadow-black/50 print:hidden animate-in fade-in slide-in-from-bottom-6 duration-700">
          
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-blue-500/10 via-indigo-500/10 to-transparent rounded-full blur-3xl pointer-events-none -translate-y-1/3 translate-x-1/3"></div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-400 text-xs font-semibold mb-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Verified Credentials &bull; Open for Roles
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">Resume</span>
              </h1>
              <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                {resumeData.headline}
              </p>
            </div>

            {/* Quick Action Button Group */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button 
                onClick={handlePrint}
                className="inline-flex items-center gap-2 h-11 px-4 sm:px-5 rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all text-xs sm:text-sm shadow-sm cursor-pointer hover:scale-105 active:scale-95"
                title="Print clean A4 document or Save as PDF"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                Print PDF
              </button>

              <button 
                onClick={() => setShowPdfModal(true)}
                className="inline-flex items-center gap-2 h-11 px-4 sm:px-5 rounded-2xl border border-blue-200 dark:border-blue-800 bg-blue-50/90 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 font-semibold hover:bg-blue-100 dark:hover:bg-blue-900/60 transition-all text-xs sm:text-sm cursor-pointer hover:scale-105 active:scale-95"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Preview CV
              </button>

              <a 
                href="/Anik_Roy_CV.pdf" 
                download="Anik_Roy_CV.pdf"
                className="inline-flex items-center gap-2 h-11 px-5 sm:px-6 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/25 text-xs sm:text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download CV
              </a>
            </div>
          </div>
        </div>

        {/* 4 Key Metrics Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8 print:hidden animate-in fade-in slide-in-from-bottom-6 delay-100">
          {resumeData.metrics.map((metric, i) => (
            <div 
              key={i} 
              className="rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 p-5 shadow-sm hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700 transition-all group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xl">{metric.icon}</span>
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {metric.value}
                </span>
              </div>
              <p className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-2">{metric.label}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{metric.detail}</p>
            </div>
          ))}
        </div>

        {/* Main Document Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Sidebar & Sticky Bio */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-8 delay-150">
            
            {/* Profile & Quick Contact Card */}
            <div className="rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-8 shadow-xl shadow-slate-200/30 dark:shadow-black/50">
              
              <div className="flex items-center gap-4 mb-6">
                <div className="relative h-20 w-20 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 p-0.5 shadow-md overflow-hidden shrink-0">
                  <img 
                    src="/profile.jpg" 
                    alt="Anik Roy" 
                    className="w-full h-full object-cover object-top rounded-[14px]" 
                  />
                  <span className="absolute bottom-1 right-1 h-3.5 w-3.5 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900" title="Active & Available"></span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{resumeData.name}</h2>
                  <p className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400">{resumeData.title}</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">B.Sc. in CSE &bull; UIU</p>
                </div>
              </div>

              {/* 1-Click Interactive Contact Rows */}
              <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                
                {/* Email with copy */}
                <div 
                  onClick={() => handleCopy(resumeData.contact.email, 'email')}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50 hover:border-blue-400 dark:hover:border-blue-600 transition-all cursor-pointer group"
                  title="Click to copy email address"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm">
                      ✉
                    </span>
                    <div className="truncate">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Email (Click to copy)</p>
                      <p className="text-xs font-medium text-slate-800 dark:text-slate-200 truncate">{resumeData.contact.email}</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 shrink-0 ml-2">
                    {copiedItem === 'email' ? '✓ Copied' : 'Copy'}
                  </span>
                </div>

                {/* Phone with copy */}
                <div 
                  onClick={() => handleCopy(resumeData.contact.phone, 'phone')}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50 hover:border-blue-400 dark:hover:border-blue-600 transition-all cursor-pointer group"
                  title="Click to copy phone number"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm">
                      ☎
                    </span>
                    <div className="truncate">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Phone (Click to copy)</p>
                      <p className="text-xs font-medium text-slate-800 dark:text-slate-200 truncate">{resumeData.contact.phone}</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 shrink-0 ml-2">
                    {copiedItem === 'phone' ? '✓ Copied' : 'Copy'}
                  </span>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm">
                    📍
                  </span>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Location</p>
                    <p className="text-xs font-medium text-slate-800 dark:text-slate-200">{resumeData.contact.address}</p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp CTA */}
              <div className="mt-4 print:hidden">
                <a 
                  href={`https://wa.me/8801521428525?text=${encodeURIComponent('Hello Anik, I reviewed your interactive resume and would like to connect!')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white p-3 text-xs font-bold transition-all shadow-md shadow-emerald-600/20 hover:scale-[1.02]"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  Chat Directly on WhatsApp
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-3 pt-5 mt-5 border-t border-slate-100 dark:border-slate-800 print:hidden">
                <a 
                  href={resumeData.contact.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold transition-all hover:-translate-y-0.5"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                  GitHub
                </a>
                <a 
                  href={resumeData.contact.linkedin} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 dark:bg-blue-950/40 hover:bg-blue-100 dark:hover:bg-blue-900/60 text-blue-700 dark:text-blue-300 text-xs font-semibold transition-all hover:-translate-y-0.5"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                  LinkedIn
                </a>
              </div>

            </div>

            {/* Interactive Skills Matrix with Search & Filtering */}
            <div className="rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-8 shadow-xl shadow-slate-200/30 dark:shadow-black/50 print:break-inside-avoid">
              
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="text-blue-600 dark:text-blue-400">⚡</span> Skills Matrix
                </h3>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                  {filteredSkills.length} Skills
                </span>
              </div>

              {/* Skills Search Input (Hidden in Print) */}
              <div className="mb-4 print:hidden">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Filter skills (e.g. React, MongoDB)..."
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/70 dark:bg-slate-800/60 px-3.5 py-2 text-xs text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500/50 placeholder:text-slate-400"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>

              {/* Interactive Category Filter Pills (Hidden in Print) */}
              <div className="flex flex-wrap gap-1.5 mb-5 print:hidden">
                <button
                  type="button"
                  onClick={() => setActiveCategory('all')}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    activeCategory === 'all'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  All
                </button>
                {Object.entries(resumeData.skillCategories).map(([key, cat]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActiveCategory(key)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                      activeCategory === key
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {key === 'frontend' ? 'Frontend' : key === 'backend' ? 'Backend' : key === 'database' ? 'DB & Cloud' : key === 'tools' ? 'Tools' : 'Core'}
                  </button>
                ))}
              </div>

              {/* Skills Cloud */}
              <div className="flex flex-wrap gap-2">
                {filteredSkills.map(skill => (
                  <span 
                    key={skill} 
                    className="px-3 py-1.5 text-xs font-medium rounded-xl bg-slate-50 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border border-slate-200/70 dark:border-slate-700/60 hover:border-blue-400 dark:hover:border-blue-500 hover:scale-105 transition-all shadow-xs"
                  >
                    {skill}
                  </span>
                ))}
                {filteredSkills.length === 0 && (
                  <p className="text-xs text-slate-400 italic py-2">No skills matched &quot;{searchQuery}&quot;</p>
                )}
              </div>
            </div>

            {/* Certifications Card */}
            <div className="rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-8 shadow-xl shadow-slate-200/30 dark:shadow-black/50 print:break-inside-avoid">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="text-amber-500">🏆</span> Certifications
              </h3>
              <div className="space-y-4">
                {resumeData.certifications.map((cert, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-xs font-bold text-slate-900 dark:text-white leading-snug">{cert.title}</p>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{cert.issuer}</p>
                      </div>
                      <span className="px-2 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800/50 text-amber-700 dark:text-amber-400 text-[10px] font-bold shrink-0">
                        {cert.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </aside>

          {/* Right Column: Main Content Sections */}
          <div className="lg:col-span-8 flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-8 delay-200">
            
            {/* Professional Summary */}
            <section className="rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-8 shadow-xl shadow-slate-200/30 dark:shadow-black/50">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm">
                  📋
                </span>
                Professional Summary
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                {resumeData.summary}
              </p>
            </section>

            {/* Experience & Professional Training */}
            <section className="rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-8 shadow-xl shadow-slate-200/30 dark:shadow-black/50">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm">
                  💼
                </span>
                Experience & Professional Training
              </h2>

              <div className="space-y-8">
                {resumeData.experience.map((exp, idx) => (
                  <div key={idx} className="relative pl-6 sm:pl-8 border-l-2 border-blue-500/30 dark:border-blue-500/20 print:break-inside-avoid">
                    <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-blue-600 dark:bg-blue-500 border-4 border-white dark:border-slate-900 shadow-sm"></div>

                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                          {exp.badge && (
                            <span className="px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/50 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold">
                              {exp.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-0.5">{exp.company} &bull; <span className="text-slate-500 dark:text-slate-400 text-xs font-normal">{exp.location}</span></p>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2 mt-3">
                      {exp.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2.5 leading-relaxed">
                          <span className="text-blue-500 mt-1 shrink-0 text-xs">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Featured Projects Highlight */}
            <section className="rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-8 shadow-xl shadow-slate-200/30 dark:shadow-black/50 print:break-inside-avoid">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm">
                    🚀
                  </span>
                  Key Projects & Competence
                </h2>
                <Link to="/projects" className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline print:hidden">
                  View All Projects →
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {resumeData.featuredProjects.map((project, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50 flex flex-col justify-between gap-3 hover:border-blue-300 dark:hover:border-blue-700 transition-all">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">{project.title}</h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">{project.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-200/40 dark:border-slate-700/40">
                      {project.tech.map((t, tIdx) => (
                        <span key={tIdx} className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-8 shadow-xl shadow-slate-200/30 dark:shadow-black/50">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm">
                  🎓
                </span>
                Education & Academics
              </h2>

              <div className="space-y-6">
                {resumeData.education.map((edu, idx) => (
                  <div key={idx} className="print:break-inside-avoid">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                      <div>
                        <h3 className="text-base font-bold text-slate-900 dark:text-white">{edu.degree}</h3>
                        <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mt-0.5">{edu.institution} &bull; <span className="text-xs text-slate-400">{edu.location}</span></p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60">
                          {edu.period}
                        </span>
                      </div>
                    </div>
                    {idx !== resumeData.education.length - 1 && (
                      <hr className="mt-6 border-slate-100 dark:border-slate-800" />
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Bottom Call to Action (Hidden in print) */}
            <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-8 sm:p-10 text-white shadow-xl shadow-blue-500/20 print:hidden flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
              <div>
                <h3 className="text-2xl font-extrabold">Ready to collaborate?</h3>
                <p className="text-sm text-blue-100 mt-1 max-w-md">Let&apos;s build fast, responsive, and engaging web applications together.</p>
              </div>
              <Link 
                to="/contact" 
                className="shrink-0 rounded-full bg-white text-slate-900 font-bold px-8 py-3.5 text-sm shadow-lg hover:bg-slate-100 transition-all hover:scale-105 active:scale-95"
              >
                Get in Touch →
              </Link>
            </div>

          </div>
        </div>

      </div>

      {/* PDF Modal Previewer (Embedded in-app viewer) */}
      {showPdfModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-5xl h-[90vh] bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90">
              <div className="flex items-center gap-3">
                <span className="text-xl">📄</span>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">Anik Roy — Original CV</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">PDF Document Preview</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a 
                  href="/Anik_Roy_CV.pdf"
                  download="Anik_Roy_CV.pdf"
                  className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-500 transition-colors"
                >
                  Download PDF
                </a>
                <button 
                  onClick={() => setShowPdfModal(false)}
                  className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                  aria-label="Close modal"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Iframe Body */}
            <div className="flex-1 w-full bg-slate-100 dark:bg-slate-950 p-2">
              <iframe 
                src="/Anik_Roy_CV.pdf#toolbar=1&navpanes=0" 
                title="Anik Roy Resume PDF"
                className="w-full h-full rounded-2xl border border-slate-200 dark:border-slate-800"
              />
            </div>
          </div>
        </div>
      )}

    </main>
  );
}