import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import RootLayout from './root/RootLayout'
import Home from './pages/Home'
import About from './pages/About'
// import AboutUs from './pages/AboutUs'
import Service from './pages/Service'
import Contact from './pages/Contact'
import Education from './pages/Education'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Resume from './pages/Resume'
import Extracurriculum from './pages/Extracurriculum'

function App() {
 

  return (
    <>
 <Routes>
        <Route path="/" element={<RootLayout/>} >
          <Route index element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/service" element={<Service />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/extra-curricular" element={<Extracurriculum />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
