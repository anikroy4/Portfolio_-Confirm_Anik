import { useState } from 'react';

export default function Contact() {
  const [result, setResult] = useState("");
  const [copiedItem, setCopiedItem] = useState(null);

  const targetEmail = 'anikroy.uiu.ac.bd@gmail.com';
  const targetPhone = '+8801521428525';

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "e4106535-020e-4d43-8efc-40bf4f2e77e9");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        setTimeout(() => setResult(""), 6000);
      } else {
        console.error("Web3Forms error response:", data);
        setResult(data.message || "Error");
      }
    } catch (err) {
      console.error("Fetch Error:", err);
      setResult("Error");
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        
        {/* Page Header */}
        <div className="text-center md:text-left mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-400 text-xs font-semibold mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for new opportunities &amp; projects
          </div>
          
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
            <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-purple-500 rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-30 transition duration-500"></div>
            
            <div className="relative rounded-4xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl border border-white/60 dark:border-slate-700/50 p-8 sm:p-10 shadow-xl shadow-slate-200/50 dark:shadow-black/60 flex flex-col justify-between gap-8">
              
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Contact Details</h3>
                
                <div className="space-y-5">
                  {/* Email Box with 1-Click Copy */}
                  <div 
                    onClick={() => handleCopy(targetEmail, 'email')}
                    className="flex items-center justify-between p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50 hover:border-blue-300 dark:hover:border-blue-700 transition-all cursor-pointer group/item"
                    title="Click to copy email address"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 group-hover/item:scale-105 transition-transform">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                      </div>
                      <div className="truncate">
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email (Click to copy)</p>
                        <p className="text-sm font-medium text-slate-900 dark:text-white truncate">{targetEmail}</p>
                      </div>
                    </div>
                    <span className="ml-2 shrink-0 text-xs font-bold text-blue-600 dark:text-blue-400">
                      {copiedItem === 'email' ? '✓ Copied!' : 'Copy'}
                    </span>
                  </div>

                  {/* Phone Box with 1-Click Copy */}
                  <div 
                    onClick={() => handleCopy(targetPhone, 'phone')}
                    className="flex items-center justify-between p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50 hover:border-blue-300 dark:hover:border-blue-700 transition-all cursor-pointer group/item"
                    title="Click to copy phone number"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 group-hover/item:scale-105 transition-transform">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                      </div>
                      <div className="truncate">
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Phone (Click to copy)</p>
                        <p className="text-sm font-medium text-slate-900 dark:text-white truncate">+88 01521 428525</p>
                      </div>
                    </div>
                    <span className="ml-2 shrink-0 text-xs font-bold text-blue-600 dark:text-blue-400">
                      {copiedItem === 'phone' ? '✓ Copied!' : 'Copy'}
                    </span>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Location &amp; Timezone</p>
                      <p className="text-sm font-medium text-slate-900 dark:text-white">Dhaka - 1000, Bangladesh (GMT+6)</p>
                    </div>
                  </div>
                </div>

                {/* 1-Click WhatsApp Chat Button */}
                <div className="mt-6">
                  <a 
                    href={`https://wa.me/${targetPhone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hello Anik, I saw your portfolio and would like to connect!')}`} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex w-full items-center justify-center gap-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-3.5 text-sm font-bold shadow-lg shadow-emerald-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                    Direct Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-slate-200/60 dark:border-slate-800/60">
                <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">Connect on Socials</p>
                <div className="flex gap-4">
                  <a href="https://github.com/anikroy4" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white transition-all hover:-translate-y-1" aria-label="GitHub">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/in/anik-roy-bd/" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all hover:-translate-y-1" aria-label="LinkedIn">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: The Form */}
          <div className="lg:col-span-7 animate-in fade-in slide-in-from-bottom-8 delay-200">
            <div className="rounded-4xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl border border-white/60 dark:border-slate-700/50 p-8 sm:p-10 shadow-xl shadow-slate-200/50 dark:shadow-black/60">
              
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Send a Message</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Fill out the details below and I&apos;ll get back to you promptly.</p>

              <form onSubmit={onSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 dark:text-slate-300">Your Name</label>
                    <input 
                      id="name"
                      type="text" 
                      name="name" 
                      required
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
                      name="email" 
                      required
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
                    name="message" 
                    required
                    className="w-full rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 px-4 py-3.5 text-sm text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-slate-400 resize-none" 
                    rows={5} 
                    placeholder="Tell me about your project, timeline, or open position..." 
                  />
                </div>

                {/* Submit Button & Result Span */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                  <button 
                    type="submit" 
                    disabled={result === 'Sending....'}
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/30 hover:from-blue-500 hover:to-indigo-500 transition-all hover:-translate-y-0.5 hover:shadow-xl cursor-pointer disabled:opacity-70"
                  >
                    {result === 'Sending....' ? 'Sending....' : 'Submit Form'}
                  </button>
                  {result && (
                    <span className={`text-sm font-semibold animate-in fade-in ${
                      result === 'Form Submitted Successfully'
                        ? 'text-emerald-600 dark:text-emerald-400'
                        : result === 'Sending....'
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-amber-600 dark:text-amber-400'
                    }`}>
                      {result === 'Form Submitted Successfully' ? '✓ ' + result : result}
                    </span>
                  )}
                </div>
                
              </form>
              
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}