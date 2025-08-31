import { useState, useEffect, useRef } from 'react';
import moonAsset from '@/assets/moon.png';

export const Moon = () => {
  const [position, setPosition] = useState({ x: 50, y: 30 }); // Initial position
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isDarkMode, setIsDarkMode] = useState(true);
  const moonRef = useRef(null);

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

  // Handle mouse down on moon
  const handleMouseDown = (e) => {
    setIsDragging(true);
    
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
        
        setPosition({ x: constrainedX, y: constrainedY });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset]);

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
