import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Projects', to: '/projects' },
    { label: 'Experience', to: '/experience' },
    { label: 'Education', to: '/education' },
    { label: 'Extra-Curricular', to: '/extra-curricular' },
];

export default function Header() {
    const [open, setOpen] = useState(false);
    const [dark, setDark] = useState(false);
    const location = useLocation();

    // Standard tailwind dark mode implementation
    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
        } else {
            document.documentElement.classList.add('light');
            document.documentElement.classList.remove('dark');
        }
    }, [dark]);

    function toggleMenu() { setOpen(v => !v); }

    return (
        // Floating container positioned at the top center
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-300">
            <header className="relative flex items-center justify-between px-2 py-2 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-full shadow-lg shadow-slate-200/20 dark:shadow-black/40">
                
                {/* Logo Area */}
                <a href="/" className="flex items-center gap-2 pl-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold tracking-tighter">
                        AR
                    </div>
                </a>

                {/* Desktop Navigation */}
                <nav aria-label="Primary" className="hidden lg:block absolute left-1/2 -translate-x-1/2">
                    <ul className="flex items-center gap-x-2 p-1 bg-slate-100/50 dark:bg-slate-800/50 rounded-full border border-slate-200/50 dark:border-slate-700/50">
                        {navLinks.map(link => {
                            const isActive = location.pathname === link.to;
                            return (
                                <li key={link.label}>
                                    <Link 
                                        to={link.to}
                                        className={`block px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
                                            isActive 
                                            ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' 
                                            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-700/50'
                                        }`}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Desktop Actions */}
                <div className="hidden lg:flex items-center gap-2 pr-2">
                    <button 
                        onClick={() => setDark(!dark)} 
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        aria-label="Toggle Dark Mode"
                    >
                        {dark ? '☀️' : '🌙'}
                    </button>
                    <a href="/resume" className="hidden xl:inline-flex items-center justify-center h-10 px-4 rounded-full border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                        Resume
                    </a>
                    <a href="/contact" className="inline-flex items-center justify-center h-10 px-5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-semibold transition-transform hover:scale-105 active:scale-95">
                        Let&apos;s Talk
                    </a>
                </div>

                {/* Mobile Toggle & Quick Action */}
                <div className="flex items-center gap-2 lg:hidden pr-2">
                    <a href="/contact" className="inline-flex items-center justify-center h-9 px-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-semibold">
                        Talk
                    </a>
                    <button 
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white" 
                        onClick={toggleMenu} 
                        aria-label="Toggle menu"
                    >
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
                        </svg>
                    </button>
                </div>
            </header>

            {/* Mobile Detached Menu */}
            {open && (
                <div className="absolute top-full left-0 right-0 mt-3 p-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-3xl shadow-xl lg:hidden animate-in fade-in slide-in-from-top-4">
                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                        <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">Navigation</span>
                        <button 
                            onClick={() => setDark(!dark)} 
                            className="text-xs px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300"
                        >
                            {dark ? 'Light Mode' : 'Dark Mode'}
                        </button>
                    </div>
                    <nav aria-label="Mobile">
                        <ul className="flex flex-col gap-1 text-sm font-medium">
                            {navLinks.map(link => {
                                const isActive = location.pathname === link.to;
                                return (
                                    <li key={link.label}>
                                        <Link 
                                            onClick={() => setOpen(false)} 
                                            className={`block w-full rounded-2xl px-4 py-3 transition-colors ${
                                                isActive 
                                                ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white' 
                                                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                                            }`} 
                                            to={link.to}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                );
                            })}
                            <li>
                                <a 
                                    href="/resume" 
                                    className="block w-full rounded-2xl px-4 py-3 mt-2 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-center transition-colors hover:bg-slate-50 dark:hover:bg-slate-800"
                                >
                                    Download Resume
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </div>
    );
}