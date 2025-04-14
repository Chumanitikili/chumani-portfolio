
import React, { useEffect, useRef, useState } from 'react';
import { ArrowDownCircle } from 'lucide-react';
import CodeAnimation from './CodeAnimation';
import throttle from 'lodash/throttle';

const Hero = () => {
  const backgroundRef = useRef<HTMLDivElement | null>(null);
  const [roleIndex, setRoleIndex] = useState(0);
  
  const roles = [
    "DevOps", 
    "Automation Specialist", 
    "Cloud Engineer", 
    "CSM",
    "SaaS Specialist",
    "Web Developer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000); // Change role every 3 seconds
    
    return () => clearInterval(interval);
  }, [roles.length]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!backgroundRef.current) return;
      
      const { clientX, clientY } = e;
      const xPos = clientX / window.innerWidth;
      const yPos = clientY / window.innerHeight;
      
      const xOffset = (xPos - 0.5) * 20;
      const yOffset = (yPos - 0.5) * 20;
      
      backgroundRef.current.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    };

    // Throttle mousemove event to improve performance
    const throttledMouseMove = throttle(handleMouseMove, 100);

    window.addEventListener('mousemove', throttledMouseMove);
    return () => window.removeEventListener('mousemove', throttledMouseMove);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden font-matrix" id="hero">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <div 
          ref={backgroundRef}
          className="absolute inset-0 transition-transform duration-300 ease-out"
          style={{
            backgroundImage: 'url(/images/background.jpg)', // Use a local or CDN-hosted image
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.7)',
            transform: 'scale(1.1)',
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>
      
      <div className="relative z-10 container mx-auto h-full px-6 flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 text-center md:text-left text-white mt-8 md:mt-0">
          <div className="animate-fade-in flex flex-col items-center md:items-start">
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4">
              <h1 className="text-4xl md:text-5xl font-bold">
                <span className="name">CHUMANI TIKILI</span>        
              </h1>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-xl md:text-2xl text-gray-200 dark:text-matrix-green">
                <span className="typewriter">{roles[roleIndex]}</span>
              </h2>
            </div>
            <p className="mb-8 text-lg text-gray-300 max-w-lg">
              Based in Cape Town, South Africa. Skilled in building and optimizing enterprise cloud solutions and automation workflows.
            </p>
            <a 
              href="#summary" 
              className="inline-flex items-center px-6 py-3 rounded-full bg-white text-capetown-blue dark:bg-matrix-green/90 dark:text-black font-medium transition-all hover:bg-opacity-90 hover:shadow-lg dark:hover:bg-matrix-green"
            >
              Explore My Work
              <ArrowDownCircle className="ml-2" size={20} aria-hidden="true" />
            </a>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center animate-scale-in mt-8 md:mt-0">
          <div className="relative w-full max-w-md">
            <CodeAnimation />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <a href="#summary" className="text-white opacity-75 hover:opacity-100 transition-opacity dark:text-matrix-green">
          <ArrowDownCircle size={32} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
