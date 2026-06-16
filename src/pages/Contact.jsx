import React, { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  // Hardcoded to your actual email
  const targetEmail = 'anikroy.uiu.ac.bd@gmail.com';

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`New message from ${name} via Portfolio`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    
    // Trigger the default email client
    window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
    
    // Show a quick visual success state on the button
    setIsSent(true);
    setTimeout(() => setIsSent(false), 3000);
    
    // Optional: clear the form
    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        
        {/* Page Header */}
        <div className="text-center md:text-left mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Touch</span>
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
            Interested in working together? Feel free to reach out for collaborations, freelance work, or just to say hello.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Information Card */}
          <div className="lg:col-span-5 relative group animate-in fade-in slide-in-from-bottom-8 delay-100">
            {/* Ambient Background Glow */}
            <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-purple-500 rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-30 transition duration-500"></div>
            
            <div className="relative rounded-[2rem] bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl border border-white/60 dark:border-slate-700/50 p-8 sm:p-10 shadow-xl shadow-slate-200/50 dark:shadow-black/60 h-full flex flex-col justify-between">
              
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Contact Details</h3>
                
                <div className="space-y-6">
                  {/* Email */}
                  <a href={`mailto:${targetEmail}`} className="flex items-start gap-4 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/link">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 group-hover/link:bg-blue-100 dark:group-hover/link:bg-blue-900/40 transition-colors">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white mb-1">Email</p>
                      <p className="text-sm break-all">{targetEmail}</p>
                    </div>
                  </a>

                  {/* Phone */}
                  <a href="tel:+8801521428525" className="flex items-start gap-4 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/link">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 group-hover/link:bg-blue-100 dark:group-hover/link:bg-blue-900/40 transition-colors">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white mb-1">Phone</p>
                      <p className="text-sm">+88 01521 428525</p>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-start gap-4 text-slate-600 dark:text-slate-400">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white mb-1">Location</p>
                      <p className="text-sm">Dhaka - 1000, Bangladesh</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10 pt-6 border-t border-slate-200/60 dark:border-slate-800/60">
                <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">Connect on Socials</p>
                <div className="flex gap-4">
                  <a href="https://github.com/anikroy4" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white transition-all hover:-translate-y-1">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/in/anik-roy-bd/" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all hover:-translate-y-1">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className="lg:col-span-7 animate-in fade-in slide-in-from-bottom-8 delay-200">
            <div className="rounded-[2rem] bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl border border-white/60 dark:border-slate-700/50 p-8 sm:p-10 shadow-xl shadow-slate-200/50 dark:shadow-black/60">
              
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 dark:text-slate-300">Your Name</label>
                    <input 
                      id="name"
                      type="text"
                      required
                      value={name} 
                      onChange={e => setName(e.target.value)} 
                      className="w-full rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 px-4 py-3.5 text-sm text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-slate-400" 
                      placeholder="John Doe" 
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-slate-300">Email Address</label>
                    <input 
                      id="email"
                      type="email"
                      required
                      value={email} 
                      onChange={e => setEmail(e.target.value)} 
                      className="w-full rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 px-4 py-3.5 text-sm text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-slate-400" 
                      placeholder="john@example.com" 
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 dark:text-slate-300">Your Message</label>
                  <textarea 
                    id="message"
                    required
                    value={message} 
                    onChange={e => setMessage(e.target.value)} 
                    className="w-full rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 px-4 py-3.5 text-sm text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-slate-400 resize-none" 
                    rows={6} 
                    placeholder="How can I help you? Let me know about your project..." 
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button 
                    type="submit" 
                    className={`inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl ${
                      isSent 
                      ? 'bg-emerald-500 shadow-emerald-500/30' 
                      : 'bg-gradient-to-r from-blue-600 to-indigo-600 shadow-blue-500/30 hover:from-blue-500 hover:to-indigo-500'
                    }`}
                  >
                    {isSent ? (
                      <>
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                        Opening Email Client...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                      </>
                    )}
                  </button>
                  <p className="mt-4 text-xs text-slate-500 dark:text-slate-400 text-center sm:text-left">
                    This will securely open your default email client.
                  </p>
                </div>
                
              </form>
              
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}