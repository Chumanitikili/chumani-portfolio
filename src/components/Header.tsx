
import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Moon, Sun } from 'lucide-react';
import { cn } from '../lib/utils';
import { useTheme } from './ThemeProvider';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { title: 'Summary', href: '#summary' },
    { title: 'Experience', href: '#experience' },
    { title: 'Projects', href: '#projects' },
    { title: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Chumanitikili', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/chumani-tikili', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:ctikili@gmail.com', label: 'Email' },
  ];

  return (
    <header className={cn(
      'fixed top-0 left-0 w-full z-50 transition-all duration-300',
      scrolled 
        ? 'bg-white/90 dark:bg-black/90 backdrop-blur-sm shadow-sm dark:shadow-[0_2px_10px_rgba(0,255,0,0.1)]'
        : 'bg-transparent'
    )}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a 
          href="#" 
          className="text-xl font-bold gradient-text matrix-text-effect" 
          aria-label="Chumani Tikili"
        >
          CT
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {menuItems.map((item) => (
              <li key={item.title}>
                <a 
                  href={item.href} 
                  className="menu-item dark:text-gray-300 hover:text-capetown-blue dark:hover:text-matrix-green"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center space-x-5">
            {socialLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-capetown-blue dark:hover:text-matrix-green transition-colors"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
            
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button 
            className="text-gray-600 dark:text-gray-400 hover:text-capetown-blue dark:hover:text-matrix-green"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-black/95 shadow-lg dark:shadow-[0_5px_15px_rgba(0,255,0,0.1)]">
          <nav className="container mx-auto px-6 py-6">
            <ul className="space-y-4">
              {menuItems.map((item) => (
                <li key={item.title}>
                  <a 
                    href={item.href}
                    className="block py-2 text-base font-medium hover:text-capetown-blue dark:hover:text-matrix-green transition-colors dark:text-gray-300"
                    onClick={toggleMenu}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="flex items-center space-x-6 mt-6 pt-6 border-t dark:border-gray-800">
              {socialLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-capetown-blue dark:hover:text-matrix-green transition-colors"
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
