
import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const Footer = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    const cellSize = Math.floor(canvas.width / 50); // Adjust for desired snake size
    
    // Colors
    const backgroundColor = theme === 'dark' ? '#000000' : '#121212';
    const snakeColor = theme === 'dark' ? '#00FF00' : '#3B82F6';
    const foodColor = theme === 'dark' ? '#00FF80' : '#F97316';
    
    // Initialize snake
    let snake = [
      { x: 10, y: 10 },
      { x: 9, y: 10 },
      { x: 8, y: 10 }
    ];
    
    // Initialize food
    let food = {
      x: Math.floor(Math.random() * (canvas.width / cellSize)),
      y: Math.floor(Math.random() * (canvas.height / cellSize))
    };
    
    // Snake direction and speed
    let dx = 1;
    let dy = 0;
    let speed = 120; // ms between moves
    let lastRender = 0;
    
    // Game state
    let gameRunning = true;
    
    const draw = (timestamp: number) => {
      if (!ctx || !gameRunning) return;
      
      // Time-based animation
      if (timestamp - lastRender >= speed) {
        // Clear canvas
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw snake
        snake.forEach((segment, index) => {
          const alpha = index === 0 ? 'FF' : (90 - index * 5).toString(16).padStart(2, '0');
          ctx.fillStyle = theme === 'dark' 
            ? `#00FF00${alpha}` 
            : `${snakeColor}${alpha}`;
          ctx.fillRect(segment.x * cellSize, segment.y * cellSize, cellSize, cellSize);
        });
        
        // Draw food
        ctx.fillStyle = foodColor;
        ctx.fillRect(food.x * cellSize, food.y * cellSize, cellSize, cellSize);
        
        // Move snake
        const head = { x: snake[0].x + dx, y: snake[0].y + dy };
        
        // Wrap around edges
        if (head.x >= canvas.width / cellSize) head.x = 0;
        if (head.x < 0) head.x = Math.floor(canvas.width / cellSize) - 1;
        if (head.y >= canvas.height / cellSize) head.y = 0;
        if (head.y < 0) head.y = Math.floor(canvas.height / cellSize) - 1;
        
        // Add new head
        snake.unshift(head);
        
        // Check if ate food
        if (head.x === food.x && head.y === food.y) {
          // Generate new food
          food = {
            x: Math.floor(Math.random() * (canvas.width / cellSize)),
            y: Math.floor(Math.random() * (canvas.height / cellSize))
          };
          
          // Speed up slightly
          speed = Math.max(80, speed - 2);
        } else {
          // Remove tail if didn't eat
          snake.pop();
        }
        
        lastRender = timestamp;
      }
      
      // Automatic direction changes to create interesting patterns
      if (Math.random() < 0.01) { // 1% chance each frame to change direction
        const directions = [
          { dx: 1, dy: 0 },
          { dx: -1, dy: 0 },
          { dx: 0, dy: 1 },
          { dx: 0, dy: -1 }
        ];
        
        // Filter out the opposite of current direction to avoid 180 turns
        const validDirections = directions.filter(dir => 
          !(dir.dx === -dx && dir.dy === -dy)
        );
        
        const newDir = validDirections[Math.floor(Math.random() * validDirections.length)];
        dx = newDir.dx;
        dy = newDir.dy;
      }
      
      requestAnimationFrame(draw);
    };
    
    // Start game loop
    requestAnimationFrame(draw);
    
    // Cleanup on unmount
    return () => {
      gameRunning = false;
    };
  }, [theme]);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="relative bg-gray-900 dark:bg-black text-white">
      {/* Snake Game Canvas */}
      <div className="relative h-40 md:h-48 overflow-hidden">
        <canvas 
          ref={canvasRef} 
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 to-gray-900 dark:from-black/0 dark:to-black"></div>
      </div>
      
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white dark:text-matrix-green">Chumani Tikili</h3>
            <p className="text-gray-400 mb-6">
              Automation Specialist & Cloud Engineer specializing in infrastructure automation and DevOps.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Chumanitikili" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white dark:hover:text-matrix-green transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/chumani-tikili" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white dark:hover:text-matrix-green transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:ctikili@gmail.com" 
                className="text-gray-400 hover:text-white dark:hover:text-matrix-green transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white dark:text-matrix-green">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#summary" className="text-gray-400 hover:text-white dark:hover:text-matrix-green transition-colors">
                  Professional Summary
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-white dark:hover:text-matrix-green transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white dark:hover:text-matrix-green transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white dark:hover:text-matrix-green transition-colors">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white dark:text-matrix-green">Contact Details</h3>
            <ul className="space-y-2 text-gray-400">
              <li>📞 +27 794 520 973</li>
              <li>📧 ctikili@gmail.com</li>
              <li>📍 Cape Town, South Africa</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 dark:border-gray-800/50 flex flex-col-reverse md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} Chumani Tikili. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="p-3 bg-gray-800 dark:bg-gray-800/50 rounded-full text-gray-400 hover:text-white dark:hover:text-matrix-green hover:bg-gray-700 dark:hover:bg-black transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
