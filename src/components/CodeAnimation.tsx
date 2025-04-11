
import React, { useEffect, useRef } from 'react';

const CodeAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Matrix effect properties
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = [];
    
    // Initialize drops position
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -canvas.height);
    }
    
    // Characters to display
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789{}<>/\\|;:[]~`!@#$%^&*()_+-=';
    
    // Code keywords to display occasionally
    const keywords = [
      'AWS', 'AZURE', 'CLOUD', 'DEVOPS', 'PYTHON', 'JAVASCRIPT',
      'DOCKER', 'TERRAFORM', 'CI/CD', 'PRODUCT', 'FLASK', 'DJANGO'
    ];
    
    // Function to draw the matrix effect
    const draw = () => {
      // Partially clear the canvas to create fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Set text properties
      ctx.fillStyle = '#3B82F6'; // Primary blue color
      ctx.font = `${fontSize}px monospace`;
      
      // Draw each character
      for (let i = 0; i < drops.length; i++) {
        // Randomly choose to display a keyword or a random character
        const shouldDisplayKeyword = Math.random() < 0.005; // 0.5% chance
        
        if (shouldDisplayKeyword) {
          const keyword = keywords[Math.floor(Math.random() * keywords.length)];
          ctx.fillStyle = '#F97316'; // Orange for keywords
          ctx.fillText(keyword, i * fontSize, drops[i] * fontSize);
          
          // Move drop position down by keyword length
          drops[i] += keyword.length;
        } else {
          // Get random character
          const char = chars[Math.floor(Math.random() * chars.length)];
          
          // Randomize color a bit to create variety
          if (Math.random() > 0.98) {
            ctx.fillStyle = '#93C5FD'; // Light blue
          } else {
            ctx.fillStyle = '#3B82F6'; // Regular blue
          }
          
          // Draw the character
          ctx.fillText(char, i * fontSize, drops[i] * fontSize);
          
          // If drop reaches bottom of canvas or random chance, reset to top
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          
          // Move drop down
          drops[i]++;
        }
      }
    };
    
    // Animation loop
    const interval = setInterval(draw, 50);
    
    // Cleanup function
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);
  
  return (
    <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full bg-black rounded-lg"
        style={{ boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
      />
    </div>
  );
};

export default CodeAnimation;
