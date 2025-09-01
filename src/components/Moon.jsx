import { useState, useEffect, useRef } from 'react';
import moonAsset from '@/assets/moon.png';

export const Moon = () => {
  const [position, setPosition] = useState({ x: 80, y: 20 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const [lastPosition, setLastPosition] = useState({ x: 50, y: 30 });
  const moonRef = useRef(null);
  const animationRef = useRef(null);

  // Check for theme changes (Temporary, later replace with sun)
  useEffect(() => {
    const checkTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    // Check initially
    checkTheme();

    // Listen for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  // Physics animation for momentum
  useEffect(() => {
    if (!isDragging && (Math.abs(velocity.x) > 0.1 || Math.abs(velocity.y) > 0.1)) {
      const animate = () => {
        setPosition(prev => {
          const newX = prev.x + velocity.x;
          const newY = prev.y + velocity.y;
          
          // Bounce off edges
          let finalX = newX;
          let finalY = newY;
          let newVelX = velocity.x;
          let newVelY = velocity.y;
          
          if (newX <= 5 || newX >= 95) {
            finalX = newX <= 5 ? 5 : 95;
            newVelX = -velocity.x * 0.7; // Bounce with energy loss
          }
          
          if (newY <= 5 || newY >= 95) {
            finalY = newY <= 5 ? 5 : 95;
            newVelY = -velocity.y * 0.7; // Bounce with energy loss
          }
          
          // Apply friction
          newVelX *= 0.95;
          newVelY *= 0.95;
          
          setVelocity({ x: newVelX, y: newVelY });
          
          return { x: finalX, y: finalY };
        });
        
        if (Math.abs(velocity.x) > 0.1 || Math.abs(velocity.y) > 0.1) {
          animationRef.current = requestAnimationFrame(animate);
        }
      };
      
      animationRef.current = requestAnimationFrame(animate);
    }
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDragging, velocity]);

  // Handle mouse down on moon
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setVelocity({ x: 0, y: 0 }); // Stop any momentum
    
    if (moonRef.current) {
      const rect = moonRef.current.getBoundingClientRect();
      const offsetX = e.clientX - rect.left - rect.width / 2;
      const offsetY = e.clientY - rect.top - rect.height / 2;
      setDragOffset({ x: offsetX, y: offsetY });
    }
  };

  // Handle mouse movement for dragging
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        const newX = ((e.clientX - dragOffset.x) / window.innerWidth) * 100;
        const newY = ((e.clientY - dragOffset.y) / window.innerHeight) * 100;
        
        // Constrain to viewport bounds
        const constrainedX = Math.max(5, Math.min(95, newX));
        const constrainedY = Math.max(5, Math.min(95, newY));
        
        // Calculate velocity for momentum
        const velX = constrainedX - lastPosition.x;
        const velY = constrainedY - lastPosition.y;
        
        setVelocity({ x: velX * 0.3, y: velY * 0.3 }); // Scale down for smoother movement
        setLastPosition({ x: constrainedX, y: constrainedY });
        setPosition({ x: constrainedX, y: constrainedY });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      // Velocity will continue the movement via the physics useEffect
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset, lastPosition]);

  // Don't render moon in light mode
  if (!isDarkMode) {
    return null;
  }

  return (
    <button
      ref={moonRef}
      type="button"
      className={`moon-button ${isDragging ? 'dragging' : ''}`}
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
      }}
      onMouseDown={handleMouseDown}
      aria-label="Interactive moon - click and drag to move"
    >
      <div
        className="moon-surface"
        style={{
          backgroundImage: `url(${moonAsset})`,
        }}
      />
      
      <div className="moon-glow" />
    </button>
  );
};
