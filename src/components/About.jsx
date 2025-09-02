import { TechStack } from './TechStack';
import { scrollToSection } from '@/lib/utils';

export const About = () => {
    return (
        <section id="about" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-6xl mx-auto">
                {/* About Me Section */}
                <div className="text-center mb-16 sm:mb-20">
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 sm:mb-8 opacity-0 animate-fade-in">
                        About Me
                    </h2>
                    <div className="flex justify-center">
                        <div className="border-2 border-primary rounded-xl bg-background/80 shadow-lg p-6 sm:p-10 max-w-3xl w-full opacity-0 animate-fade-in-delay-1">
                            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-left">
                                While I primarily focus on developing my <span className="nav-glow" style={{ color: 'hsl(var(--primary))' }}>backend</span> skills and my ability to create responsive <span className="nav-glow" style={{ color: 'hsl(var(--primary))' }}>frontend</span> for applications and web sites, I also enjoy exploring different areas of software development.<br /><br />
                                From algorithm design and API architecture to artificial intelligence and even tools in game development.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Tech Stack Section */}
                <div className="opacity-0 animate-fade-in-delay-2">
                    <TechStack />
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="scroll-indicator">
                <button
                    onClick={() => scrollToSection('projects')}
                    className="scroll-indicator-bounce"
                    aria-label="Scroll to projects section"
                >
                    <div className="scroll-indicator-mouse">
                        <div className="scroll-indicator-mouse-dot"></div>
                    </div>
                </button>
            </div>
        </section>
    );
};
