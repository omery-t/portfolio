import { useState, useEffect, useRef } from 'react';
import moonAsset from '@/assets/moon.png';

export const Moon = () => {
  const [position, setPosition] = useState({ x: 50, y: 30 }); // Initial position
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const moonRef = useRef(null);

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

  return (
    <button
      ref={moonRef}
      type="button"
      className={`
        fixed z-10 cursor-pointer select-none transition-transform duration-300
        hover:scale-110 active:scale-95 border-none bg-transparent p-0
        ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}
      `}
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: 'translate(-50%, -50%)',
        width: '80px',
        height: '80px',
      }}
      onMouseDown={handleMouseDown}
      aria-label="Interactive moon - click and drag to move"
    >
      <div
        className="w-full h-full rounded-full animate-float"
        style={{
          animation: 'float 6s ease-in-out infinite, spin 20s linear infinite',
          background: `url(${moonAsset}) center/cover`,
          backgroundSize: '100% 100%',
          boxShadow: `
            0 0 20px rgba(255, 255, 255, 0.3),
            inset -5px -5px 10px rgba(0, 0, 0, 0.1),
            inset 5px 5px 10px rgba(255, 255, 255, 0.2)
          `,
        }}
      />
      
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
          animation: 'pulse-subtle 4s ease-in-out infinite',
        }}
      />
    </button>
  );
};
