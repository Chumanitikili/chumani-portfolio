
import React, { useEffect, useRef } from 'react';
import { useTheme } from './ThemeProvider';

interface MatrixBackgroundProps {
  density?: number; // Number of characters per column
  speed?: number; // Animation speed (lower is faster)
  opacity?: number; // Background opacity
}

const MatrixBackground: React.FC<MatrixBackgroundProps> = ({ 
  density = 0.05, 
  speed = 50, 
  opacity = 0.05 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const isVisible = theme === 'dark';
  
  useEffect(() => {
    if (!isVisible) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas to full width but limited height for banner effect
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = 80; // Height of the navbar area
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Matrix settings
    const fontSize = 14;
    const columns = Math.ceil(canvas.width / fontSize * density);
    const drops: number[] = [];
    
    // Initialize drop positions randomly
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * canvas.height / fontSize) * -1;
    }
    
    // Characters to use
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ$+-=*/><~^';
    
    const draw = () => {
      // Semi-transparent black to create fade effect
      ctx.fillStyle = `rgba(0, 0, 0, ${opacity})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#00FF00';
      ctx.font = `${fontSize}px monospace`;
      
      // For each column
      for (let i = 0; i < drops.length; i++) {
        // Get random character
        const char = chars[Math.floor(Math.random() * chars.length)];
        
        // Draw character
        const x = i * fontSize * (1/density);
        const y = drops[i] * fontSize;
        
        // Randomize opacity for a more dynamic look
        const charOpacity = Math.random() * 0.5 + 0.5;
        ctx.fillStyle = `rgba(0, 255, 0, ${charOpacity})`;
        
        if (y > 0 && y < canvas.height) { // Only draw if on screen
          ctx.fillText(char, x, y);
        }
        
        // Update drop position
        drops[i]++;
        
        // Reset drop to top with random delay if it's at the bottom
        if (y > canvas.height && Math.random() > 0.99) {
          drops[i] = 0;
        }
      }
    };
    
    const interval = setInterval(draw, speed);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isVisible, density, speed, opacity]);
  
  if (!isVisible) return null;
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full z-[1] pointer-events-none"
      style={{ opacity: 0.3, height: '80px' }}
    />
  );
};

export default MatrixBackground;
