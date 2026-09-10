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
    const [dark, setDark] = useState(() => {
        const savedTheme = window.localStorage.getItem('portfolio-theme');
        return savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    });
    const location = useLocation();

    useEffect(() => {
        document.documentElement.classList.toggle('dark', dark);
        document.documentElement.classList.toggle('light', !dark);
        window.localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light');
    }, [dark]);

    function toggleTheme() {
        setDark(currentTheme => !currentTheme);
    }

    return (
        // Floating container positioned at the top center
        <div className="fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 transition-all duration-300 sm:w-[calc(100%-3rem)]">
            <header className="relative flex min-h-14 min-w-0 items-center justify-between whitespace-nowrap rounded-full border border-slate-200/80 bg-white/80 px-2 py-2 shadow-lg shadow-slate-200/20 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-900/80 dark:shadow-black/40">
                
                {/* Logo Area */}
                <Link to="/" className="flex shrink-0 items-center gap-2 pl-2" aria-label="Anik Roy home">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 font-bold tracking-tighter text-white transition-transform hover:scale-105 dark:bg-white dark:text-slate-900">
                        AR
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav aria-label="Primary" className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
                    <ul className="flex items-center gap-1 rounded-full border border-slate-200/50 bg-slate-100/50 p-1 dark:border-slate-700/50 dark:bg-slate-800/50">
                        {navLinks.map(link => {
                            const isActive = location.pathname === link.to;
                            return (
                                <li key={link.label}>
                                    <Link 
                                        to={link.to}
                                        className={`block whitespace-nowrap rounded-full px-3.5 py-1.5 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900 ${
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
                <div className="hidden shrink-0 items-center gap-2 pr-2 lg:flex">
                    <button
                        type="button"
                        onClick={toggleTheme}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                        aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
                        aria-pressed={dark}
                        title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
                    >
                        {dark ? '☀' : '☾'}
                    </button>
                    <Link to="/resume" className="hidden h-10 items-center justify-center rounded-full border border-slate-200 px-4 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 xl:inline-flex dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800">
                        Resume
                    </Link>
                    <Link to="/contact" className="inline-flex h-10 shrink-0 items-center justify-center rounded-full bg-slate-900 px-5 text-sm font-semibold text-white transition-transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:bg-white dark:text-slate-900">
                        Let&apos;s Talk
                    </Link>
                </div>

                {/* Mobile Toggle & Quick Action */}
                <div className="flex shrink-0 items-center gap-2 pr-2 lg:hidden">
                    <button
                        type="button"
                        onClick={toggleTheme}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-base text-slate-700 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                        aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
                        aria-pressed={dark}
                    >
                        {dark ? '☀' : '☾'}
                    </button>
                    <Link to="/contact" className="inline-flex h-9 items-center justify-center rounded-full bg-slate-900 px-4 text-xs font-semibold text-white dark:bg-white dark:text-slate-900">
                        Talk
                    </Link>
                    <button 
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-900 transition-colors hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
                        onClick={() => setOpen(currentOpen => !currentOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={open}
                    >
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
                        </svg>
                    </button>
                </div>
            </header>

            {/* Mobile Detached Menu */}
            {open && (
                <div className="absolute left-0 right-0 top-full mt-3 rounded-3xl border border-slate-200 bg-white/95 p-4 shadow-xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/95 lg:hidden animate-in fade-in slide-in-from-top-4">
                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                        <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">Navigation</span>
                        <span className="text-xs font-medium text-slate-400 dark:text-slate-500">{dark ? 'Dark mode' : 'Light mode'}</span>
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
                                <Link
                                    to="/resume"
                                    onClick={() => setOpen(false)}
                                    className="mt-2 block w-full rounded-2xl border border-slate-200 px-4 py-3 text-center text-slate-700 transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                                >
                                    Download Resume
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </div>
    );
}