import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

export const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            setIsDarkMode(false);
            document.documentElement.classList.remove('dark');
        } else {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        if (!isDarkMode) {
            localStorage.setItem('theme', 'dark');
            document.documentElement.classList.add('dark');
        } else {
            localStorage.setItem('theme', 'light');
            document.documentElement.classList.remove('dark');
        }
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
        <header className={cn(
            "w-full fixed top-0 left-0 z-50 transition-all duration-300",
            isScrolled ? "bg-background/90 backdrop-blur-md shadow-lg" : "bg-background/80"
        )}>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
                {/* Logo - Name */}
                <div className="text-xl sm:text-2xl font-bold">
                    <span className="nav-glow" style={{ color: 'hsl(var(--primary))' }}>Ömer</span> Y. Tatlısu
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6">
                    {navItems.map((item) => (
                        <button 
                            key={item.name} 
                            onClick={() => handleNavClick(item.href)}
                            className="nav-glow text-lg px-3 py-2 rounded transition duration-300"
                        >
                            {item.name}
                        </button>
                    ))}
                </nav>

                {/* Right Side Controls */}
                <div className="flex items-center space-x-2">
                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-lg transition-colors duration-300 hover:bg-primary/10"
                        aria-label="Toggle Theme"
                    >
                        {isDarkMode ? 
                            <Sun className="w-5 h-5 text-yellow-400" /> : 
                            <Moon className="w-5 h-5 text-gray-600" />
                        }
                    </button>

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={toggleMobileMenu}
                        className="md:hidden p-2 rounded-lg transition-colors duration-300 hover:bg-primary/10"
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
            "md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md shadow-lg border-t transition-all duration-300",
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}>
            <nav className="max-w-7xl mx-auto px-4 py-4">
                <div className="flex flex-col space-y-2">
                    {navItems.map((item) => (
                        <button 
                            key={item.name} 
                            onClick={() => handleNavClick(item.href)}
                            className="nav-glow text-lg px-4 py-3 rounded-lg text-left transition duration-300 hover:bg-primary/10 border border-transparent hover:border-primary/20"
                        >
                            {item.name}
                        </button>
                    ))}
                </div>
            </nav>
        </div>
    </header>
    );
};
