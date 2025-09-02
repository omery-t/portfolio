import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className={cn(
      "min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-16 transition-all duration-1000",
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    )}>
      <div className="text-center max-w-4xl mx-auto">
        <h1 className={cn(
          "text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-glow leading-tight",
          "animate-fade-in"
        )}>
          Welcome to <span className="nav-glow" style={{ color: 'hsl(var(--primary))' }}>My Universe</span>
        </h1>

        <p className={cn(
          "text-lg sm:text-xl md:text-1xl mb-6 sm:mb-8 text-foreground/80 px-2",
          "animate-fade-in-delay-1"
        )}>
          Versatile junior <span className="nav-glow" style={{ color: 'hsl(var(--primary))' }}>full-stack</span> developer with a passion for diverse fields of <span className="nav-glow" style={{ color: 'hsl(var(--primary))' }}>technology</span> and <span className="nav-glow" style={{ color: 'hsl(var(--primary))' }}>creativity</span>
        </p>

        <div className={cn(
          "flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 mb-8 sm:mb-12",
          "animate-fade-in-delay-2"
        )}>
          <button
            onClick={() => scrollToSection('projects')}
            className="cosmic-button w-full sm:w-auto"
          >
            View My Work
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className={cn(
              "px-6 py-3 rounded-full border border-primary text-primary w-full sm:w-auto",
              "hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            )}
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={cn(
        "absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2",
        "animate-fade-in-delay-3"
      )}>
        <button
          onClick={() => scrollToSection('about')}
          className="animate-bounce p-2 rounded-full hover:bg-primary/10 transition-colors duration-300"
          aria-label="Scroll to about section"
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </button>
      </div>
    </section>
  );
};
