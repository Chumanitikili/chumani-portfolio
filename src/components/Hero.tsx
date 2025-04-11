
import React, { useEffect, useRef, useState } from 'react';
import { ArrowDownCircle } from 'lucide-react';
import CodeAnimation from './CodeAnimation';

const Hero = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);
  
  const roles = [
    "DevOps", 
    "Automation Specialist", 
    "Cloud Engineer", 
    "SaaS"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex(prevIndex => (prevIndex + 1) % roles.length);
    }, 3000); // Change role every 3 seconds
    
    return () => clearInterval(interval);
  }, []);

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
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden" id="hero">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <div 
          ref={backgroundRef}
          className="absolute inset-0 transition-transform duration-300 ease-out"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1576485375217-d6a95e34d043?q=80&w=2070&auto=format&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.7)',
            transform: 'scale(1.1)',
          }}
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>
      
      <div className="relative z-10 container mx-auto h-full px-6 flex flex-col-reverse md:flex-row items-center justify-center">
        <div className="md:w-1/2 text-center md:text-left text-white mt-8 md:mt-0">
          <div className="animate-fade-in">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="block">Hi, I'm</span>
              <span className="typewriter text-4xl md:text-6xl font-bold">Chumani Tikili</span>
            </h1>
            <h2 className="text-xl md:text-2xl mb-3 text-gray-200 dark:text-matrix-green h-8">
              <span className="typewriter">{roles[roleIndex]}</span>
            </h2>
            <p className="mb-8 text-lg text-gray-300 max-w-lg">
              Based in Cape Town, South Africa. Skilled in building and optimizing enterprise cloud solutions and automation workflows.
            </p>
            <a 
              href="#summary" 
              className="inline-flex items-center px-6 py-3 rounded-full bg-white text-capetown-blue dark:bg-matrix-green/90 dark:text-black font-medium transition-all hover:bg-opacity-90 hover:shadow-lg dark:hover:bg-matrix-green"
            >
              Explore My Work
              <ArrowDownCircle className="ml-2" size={20} />
            </a>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center animate-scale-in">
          <div className="relative w-full max-w-md">
            <CodeAnimation />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <a href="#summary" className="text-white opacity-75 hover:opacity-100 transition-opacity dark:text-matrix-green">
          <ArrowDownCircle size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
