import { 
    StarBackground, 
    Moon, 
    Header,
    Hero, 
    About, 
    Projects, 
    Contact, 
    Footer 
} from "@/components";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Background Layer */}
            <StarBackground />
            
            {/* Celestial Objects */}
            <Moon />
            
            {/* UI layer */}
            <Header />
            
            {/* Content Layer */}
            <main className="relative z-[5]">
                <Hero />
                <About />
                <Projects />
                <Contact />
            </main>
            
            <Footer />
        </div>
    );
};