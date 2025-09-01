export const Projects = () => {
    const projects = [
        {
            title: "Interactive Portfolio",
            description: "A cosmic-themed portfolio with interactive celestials and stellar animations",
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
        <section id="projects" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8 sm:mb-16 opacity-0 animate-fade-in">
                    My Projects
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {projects.map((project, index) => (
                        <div 
                            key={project.title}
                            className="card-hover p-4 sm:p-6 bg-card rounded-lg border opacity-0 animate-fade-in-delay-1 group cursor-pointer"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className="text-left">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-lg sm:text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <span className="text-xs sm:text-sm px-2 py-1 bg-primary/10 text-primary rounded-full">
                                        {project.status}
                                    </span>
                                </div>
                                <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span 
                                            key={tech}
                                            className="text-xs sm:text-sm px-2 py-1 bg-secondary rounded-md text-secondary-foreground"
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
        </section>
    );
};
