import React from 'react';
import { HeadingHero } from './utils/HeadingHero.jsx';
import { GridLine } from './utils/GridLine.jsx';
import { NavBar } from './components/Navbar.jsx';
import { Hero } from './components/Hero.jsx';
import { Skills } from './components/Skills.jsx';
import { Projects } from './components/Projects.jsx';
import { Interests } from './components/Interests.jsx';
import { Footer } from './components/Footer.jsx';

export const App = () => {
  return(
    <>
      <div className='min-h-screen bg-[#121219]'>
        <GridLine />
        <NavBar />
        <Hero />
        <Skills />
        <Projects />
        <Interests />
        <Footer />
      </div>
    </>
  ) 
};