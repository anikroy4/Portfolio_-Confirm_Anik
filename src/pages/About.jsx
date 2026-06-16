import React from 'react';

export default function About() {
  return (
    <main className="min-h-screen px-4 py-12 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="mx-auto max-w-6xl">
        
        {/* Header Section */}
        <div className="mb-10 mt-10">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Me</span>
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Front-End Developer passionate about user experiences and modern web technologies.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          
          {/* Left Column: Profile Card */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200 dark:border-slate-800 p-8 text-center shadow-lg shadow-slate-200/20 dark:shadow-black/40 transition-all hover:shadow-xl">
              <div className="h-32 w-32 mx-auto rounded-full bg-gradient-to-tr from-blue-100 to-indigo-100 dark:from-slate-800 dark:to-slate-700 border-4 border-white dark:border-slate-800 shadow-sm flex items-center justify-center">
                 <span className="text-3xl font-bold text-slate-400 dark:text-slate-500">AR</span>
              </div>
              <h2 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">Anik Roy</h2>
              <p className="mt-1 text-sm font-medium text-blue-600 dark:text-blue-400">Front End Developer</p>
              
              <div className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-400 text-left bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl">
                <p className="flex items-center gap-3">
                  <span>📍</span> Dhaka - 1000, Bangladesh
                </p>
                <p className="flex items-center gap-3 hover:text-slate-900 dark:hover:text-white transition-colors">
                  <span>📧</span> <a href="mailto:anikroy.uiu.ac.bd@gmail.com">anikroy.uiu.ac.bd@gmail.com</a>
                </p>
                <p className="flex items-center gap-3 hover:text-slate-900 dark:hover:text-white transition-colors">
                  <span>📱</span> <a href="tel:+8801521428525">+88 01521 428525</a>
                </p>
              </div>
            </div>

            {/* IT Training Card */}
            <div className="rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200 dark:border-slate-800 p-6 shadow-lg shadow-slate-200/20 dark:shadow-black/40">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">IT Training</h3>
              <div className="space-y-4">
                <div className="relative pl-4 border-l-2 border-blue-500">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">MERN Stack Developer</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">One Year Academy (Running)</p>
                </div>
                <div className="relative pl-4 border-l-2 border-slate-300 dark:border-slate-700">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Front-End Developer</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Creative IT Institute (2024)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Main Content */}
          <div className="md:col-span-8 flex flex-col gap-6">
            
            {/* Biography Card */}
            <div className="rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200 dark:border-slate-800 p-8 shadow-lg shadow-slate-200/20 dark:shadow-black/40">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Journey & Objective</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                I am a highly motivated front-end developer with a strong passion for crafting seamless user experiences. 
                Proficient in HTML5, CSS3, Tailwind CSS, Bootstrap, and JavaScript, I excel in building responsive, 
                accessible web designs and leveraging modern frameworks like React.js. 
              </p>
              <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                Currently, I am eager to dive into MERN stack development. My plan involves mastering Node.js, Express.js, 
                and MongoDB to create full-fledged applications focusing on user authentication, deployment, and optimization.
              </p>
            </div>

            {/* Skills & Tools Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200 dark:border-slate-800 p-6 shadow-lg shadow-slate-200/20 dark:shadow-black/40">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {['React JS', 'JavaScript', 'Tailwind CSS', 'Bootstrap', 'HTML5', 'CSS3', 'jQuery', 'Node.js (Learning)', 'MongoDB (Learning)'].map(skill => (
                    <span key={skill} className="px-3 py-1.5 text-xs font-medium rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200 dark:border-slate-800 p-6 shadow-lg shadow-slate-200/20 dark:shadow-black/40">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Tools & Software</h3>
                <div className="flex flex-wrap gap-2">
                  {['VS Code', 'Git', 'GitHub', 'Netlify', 'Figma', 'Photoshop', 'Illustrator', 'npm'].map(tool => (
                    <span key={tool} className="px-3 py-1.5 text-xs font-medium rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800/30">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Education Timeline */}
            <div className="rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200 dark:border-slate-800 p-8 shadow-lg shadow-slate-200/20 dark:shadow-black/40">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Academic Qualifications</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <div className="w-px h-full bg-slate-200 dark:bg-slate-700 my-1"></div>
                  </div>
                  <div className="pb-2">
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">B.Sc. in Computer Science & Engineering</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">United International University, Dhaka • Expected 2027</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-600"></div>
                    <div className="w-px h-full bg-slate-200 dark:bg-slate-700 my-1"></div>
                  </div>
                  <div className="pb-2">
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">Higher Secondary Certificate (Science)</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Dhaka City College • 2016 • GPA: 4.67/5.00</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-600"></div>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">Secondary School Certificate (Science)</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Motijheel Govt. Boys&apos; High School • 2014 • GPA: 5.00/5.00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Extracurriculars & Interests */}
            <div className="rounded-3xl bg-slate-900 dark:bg-slate-800 p-8 shadow-lg text-white">
              <h3 className="text-xl font-bold mb-4">Interests & Activities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-semibold text-slate-400 mb-2">Tech Interests</h4>
                  <p className="text-sm leading-relaxed">Artificial Intelligence, Machine Learning, and Software Development.</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-400 mb-2">Hobbies</h4>
                  <p className="text-sm leading-relaxed">Photography, Travelling across Bangladesh and India, and playing Football, Cricket, and Volleyball.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}