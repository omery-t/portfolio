import StackIcon from "tech-stack-icons";
import { cn } from '@/lib/utils';

export const TechStack = () => {
  const technologies = [
    { name: "python", label: "Python" },
    { name: "java", label: "Java" },
    { name: "c++", label: "C++" },
    { name: "c#", label: "C#" },
    { name: "js", label: "JavaScript" },
    { name: "html5", label: "HTML" },
    { name: "css3", label: "CSS" },
    { name: "mysql", label: "SQL" },
    { name: "flutter", label: "Flutter" },
    { name: "angular", label: "Angular" },
    { name: "github", label: "GitHub" },
    { name: "react", label: "React" },
    { name: "typescript", label: "TypeScript" },
    { name: "nodejs", label: "Node.js" },
    { name: "tailwindcss", label: "Tailwind" },
    { name: "git", label: "Git" },
    { name: "vitejs", label: "Vite" },
    { name: "net", label: ".NET" },
    { name: "netcore", label: ".NET Core" },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10">
            <p className="text-base sm:text-lg text-muted-foreground opacity-0 animate-fade-in-delay-1">
            Tech and Tools I use
            </p>
        </div>

        {/* Compact Grid Layout */}
        <div className="opacity-0 animate-fade-in-delay-2">
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-1 sm:gap-2">
            {technologies.map((tech, index) => (
                <div
                key={tech.label}
                className={cn(
                    "group flex flex-col items-center justify-center p-2 sm:p-3 rounded-lg",
                    "bg-card border border-border transition-all duration-300",
                    "hover:border-primary/50 hover:shadow-md hover:scale-105",
                    "cursor-pointer aspect-square"
                )}
                style={{ animationDelay: `${index * 30}ms` }}
                title={tech.label}
                >
                <div className="transition-all duration-300 group-hover:scale-110">
                    <StackIcon name={tech.name} className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <span className="mt-1 text-xs font-medium text-center group-hover:text-primary transition-colors duration-300 leading-tight">
                    {tech.label}
                </span>
                </div>
            ))}
            </div>
        </div>

        {/* Stack Visual Effect */}
        <div className="mt-6 sm:mt-8 flex justify-center opacity-0 animate-fade-in-delay-3">
            <div className="flex flex-col items-center space-y-1">
            <div className="w-16 h-1 bg-primary/20 rounded-full"></div>
            <div className="w-12 h-1 bg-primary/40 rounded-full"></div>
            <div className="w-8 h-1 bg-primary/60 rounded-full"></div>
            <div className="w-4 h-1 bg-primary rounded-full"></div>
            </div>
        </div>
        </div>
  );
};
