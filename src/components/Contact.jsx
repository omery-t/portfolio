import { Mail, Github, Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Contact = () => {
    const socialLinks = [
        
    ];

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 sm:mb-8 opacity-0 animate-fade-in">
                    Get In Touch
                </h2>
                <div className="space-y-4 sm:space-y-6 text-base sm:text-lg md:text-xl opacity-0 animate-fade-in-delay-1 mb-8 sm:mb-12">
                    <p className="leading-relaxed">
                        If you have a question, want to collaborate, or just want to say hi, feel free to <span className="nav-glow" style={{ color: 'hsl(var(--primary))' }}>reach out!</span>
                    </p>
                </div>

                {/* Contact Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 opacity-0 animate-fade-in-delay-2">
                    <div className="relative w-full sm:w-auto group">
                        <button className="cosmic-button w-full sm:w-auto relative flex items-center justify-center overflow-hidden" style={{ minHeight: '2.5rem', minWidth: '8rem' }}>
                            <span className="transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0 absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center">
                                Send Email
                            </span>
                            <span className="transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center text-primary">
                                Work in Progress
                            </span>
                        </button>
                    </div>
                </div>

                {/* Social Links */}
                <div className="opacity-0 animate-fade-in-delay-3">
                    <p className="text-sm sm:text-base text-muted-foreground mb-6">
                        Connect with me on social media
                    </p>
                    <div className="flex justify-center gap-4 sm:gap-6">
                        {socialLinks.map((link, index) => {
                            const IconComponent = link.icon;
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={cn(
                                        "p-3 sm:p-4 rounded-full border border-border transition-all duration-300",
                                        "hover:border-primary hover:scale-110 hover:shadow-lg",
                                        link.color
                                    )}
                                    style={{ animationDelay: `${index * 100}ms` }}
                                    aria-label={`Visit my ${link.name}`}
                                >
                                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
