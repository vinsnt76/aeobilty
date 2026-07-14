import React from 'react';
import Welcome from './components/Welcome';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function Page() { // Ensure default export is named 'Page' for App Router
  return (
    <>
      <Welcome />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
