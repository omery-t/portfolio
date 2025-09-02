import { scrollToSection } from '@/lib/utils';

export const Projects = () => {
    const projects = [
        {
            title: "Interactive Portfolio",
            description: "A cosmic-themed portfolio with interactive celestials and stellar movements.",
            tech: ["React", "Tailwind CSS", "Vite"],
            status: "Current Project"
        },
        {
            title: "interesting-quotesAPI",
            description: "Wrapper API collecting notable quotes from various writers and literature.",
            tech: [".NET Core", "C#"],
            status: "Coming Soon!"
        },
        {
            title: "protobufgui",
            description: "GUI for compiling and serializing Protocol Buffers messages.",
            tech: ["C++", "Qt"],
            status: "Work in Progress"
        },
        {
            title: "autoRig",
            description: "Blender addon to auto-generate and connect bones to character meshes.",
            tech: ["Python", "Blender"],
            status: "Work in Progress"
        }

    ];

    return (
        <section id="projects" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8 sm:mb-16 opacity-0 animate-fade-in">
                    My Projects
                </h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div
                            key={project.title}
                            className="project-card animate-fade-in-delay-1"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className="text-left">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="project-title">
                                        {project.title}
                                    </h3>
                                    <span className="project-status">
                                        {project.status}
                                    </span>
                                </div>
                                <p className="project-description">
                                    {project.description}
                                </p>
                                <div className="project-tech">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="project-tech-badge"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="scroll-indicator">
                <button
                    onClick={() => scrollToSection('contact')}
                    className="scroll-indicator-bounce"
                    aria-label="Scroll to contact section"
                >
                    <div className="scroll-indicator-mouse">
                        <div className="scroll-indicator-mouse-dot"></div>
                    </div>
                </button>
            </div>
        </section>
    );
};
