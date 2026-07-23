import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Architecture from './components/Architecture';
import Education from './components/Education';
import RecruiterFaq from './components/RecruiterFaq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import ProjectModal from './components/ProjectModal';
import './styles/portfolio.css';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="portfolio-root">
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        openResumeModal={() => setResumeModalOpen(true)}
      />

      <main>
        <Hero openResumeModal={() => setResumeModalOpen(true)} />
        <About />
        <Skills />
        <Experience />
        <Projects openProjectModal={(project) => setSelectedProject(project)} />
        <Architecture />
        <Education />
        <RecruiterFaq />
        <Contact />
      </main>

      <Footer />

      {/* Modals */}
      {resumeModalOpen && (
        <ResumeModal onClose={() => setResumeModalOpen(false)} />
      )}

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
