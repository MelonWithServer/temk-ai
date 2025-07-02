import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Читаем из localStorage или prefers-color-scheme
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const activeDark = storedTheme === 'dark' || (!storedTheme && prefersDark);

    setIsDark(activeDark);
    updateThemeClass(activeDark);
  }, []);

  const updateThemeClass = (dark: boolean) => {
    const root = window.document.documentElement;
    if (dark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    updateThemeClass(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 transition-all duration-500 shadow hover:shadow-md hover:scale-105"
      aria-label="Toggle theme"
    >
      <div className={`absolute transition-opacity duration-300 ${!isDark ? 'opacity-100' : 'opacity-0'}`}>
        <Sun className="w-5 h-5 text-yellow-400" />
      </div>
      <div className={`absolute transition-opacity duration-300 ${isDark ? 'opacity-100' : 'opacity-0'}`}>
        <Moon className="w-5 h-5 text-white" />
      </div>
    </button>
  );
}
