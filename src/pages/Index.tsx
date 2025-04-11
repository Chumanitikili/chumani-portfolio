
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Summary from '../components/Summary';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { ThemeProvider } from '../components/ThemeProvider';
import MatrixBackground from '../components/MatrixBackground';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen dark:bg-black/95 transition-colors">
        <MatrixBackground />
        <Header />
        <Hero />
        <Summary />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
