import { useState, useEffect, useRef } from 'react';
import moonAsset from '@/assets/moon.png';

export const Moon = () => {
  const [position, setPosition] = useState({ x: 80, y: 20 });
  const [isDragging, setIsDragging] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  
    const moonRef = useRef(null);
    const animationRef = useRef(null);
    const velocityRef = useRef({ x: 0, y: 0 });
    const lastPositionRef = useRef(position);
    const dragOffsetRef = useRef({ x: 0, y: 0 });

  // Detect system dark mode
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
    if (!isDragging) {
      const animate = () => {
        setPosition((prev) => {
          let { x: vx, y: vy } = velocityRef.current;
          let newX = prev.x + vx;
          let newY = prev.y + vy;

          // Bounce off edges
          if (newX <= 5 || newX >= 95) {
            newX = newX <= 5 ? 5 : 95;
            vx = -vx * 0.7;
          }
          if (newY <= 5 || newY >= 95) {
            newY = newY <= 5 ? 5 : 95;
            vy = -vy * 0.7;
          }

          // Apply friction
          vx *= 0.95;
          vy *= 0.95;

          velocityRef.current = { x: vx, y: vy };

          return { x: newX, y: newY };
        });

        if (
          Math.abs(velocityRef.current.x) > 0.1 ||
          Math.abs(velocityRef.current.y) > 0.1
        ) {
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
  }, [isDragging]);

  // Handle mouse down on moon
  const handleMouseDown = (e) => {
    setIsDragging(true);
    velocityRef.current = { x: 0, y: 0 }; // stop momentum

    if (moonRef.current) {
      const rect = moonRef.current.getBoundingClientRect();
      dragOffsetRef.current = {
        x: e.clientX - rect.left - rect.width / 2,
        y: e.clientY - rect.top - rect.height / 2,
      };
    }
  };

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        const newX =
          ((e.clientX - dragOffsetRef.current.x) / window.innerWidth) * 100;
        const newY =
          ((e.clientY - dragOffsetRef.current.y) / window.innerHeight) * 100;

        const constrainedX = Math.max(5, Math.min(95, newX));
        const constrainedY = Math.max(5, Math.min(95, newY));

        const velX = constrainedX - lastPositionRef.current.x;
        const velY = constrainedY - lastPositionRef.current.y;

        velocityRef.current = { x: velX * 0.3, y: velY * 0.3 };
        lastPositionRef.current = { x: constrainedX, y: constrainedY };

        setPosition({ x: constrainedX, y: constrainedY });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  // Don't render moon in light mode
  if (!isDarkMode) { return null;}

  return (
    <button
      ref={moonRef}
      type="button"
      className={`moon-button ${isDragging ? "dragging" : ""}`}
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
