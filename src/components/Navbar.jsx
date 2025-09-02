import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const handleNavClick = (href) => {
        closeMobileMenu();
        if (href.startsWith('#')) {
            const element = document.getElementById(href.slice(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <nav className={cn(
            "w-full p-4 flex justify-between items-center fixed top-0 left-0 z-20 transition-all duration-300",
            isScrolled ? "bg-background/90 backdrop-blur-md shadow-lg" : "bg-background"
        )}>
            <div className={cn("text-2xl font-bold")}>
                MyPortfolio
            </div>

            {/* Desktop Navigation */}
            <div className={cn("hidden md:flex space-x-6")}>
                {navItems.map((item) => (
                    <button
                        key={item.name}
                        onClick={() => handleNavClick(item.href)}
                        className={cn("nav-glow text-lg px-2 py-1 rounded transition duration-300")}
                    >
                        {item.name}
                    </button>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <button
                onClick={toggleMobileMenu}
                className={cn(
                    "flex md:hidden p-2 rounded-lg transition-colors duration-300",
                    "hover:bg-primary/10 focus:outline-none"
                )}
                aria-label="Toggle mobile menu"
            >
                {isMobileMenuOpen ? (
                    <X className="w-6 h-6" />
                ) : (
                    <Menu className="w-6 h-6" />
                )}
            </button>

            {/* Mobile Menu */}
            <div className={cn(
                "absolute top-full left-0 w-full bg-background/95 backdrop-blur-md shadow-lg border-t md:hidden transition-all duration-300 z-30",
                isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            )}>
                <div className="flex flex-col p-4 space-y-4">
                    {navItems.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => handleNavClick(item.href)}
                            className={cn(
                                "nav-glow text-lg px-4 py-3 rounded text-left transition duration-300",
                                "hover:bg-primary/10 border border-transparent hover:border-primary/20"
                            )}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
};
