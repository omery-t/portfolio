import { useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        if (!isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            aria-label="Toggle Theme"
        >
            {isDarkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-800" />}
        </button>
    );
}