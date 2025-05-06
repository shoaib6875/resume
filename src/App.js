import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div className="App">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Intro />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      <footer>
        <p>&copy; 2025 Shoaib Akhtar. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;