import { ThemeToggle } from './ThemeToggle';
import { BackButton } from './BackButton';

interface HeaderProps {
  title: string;
  showBack?: boolean;
}

export function Header({ title, showBack = false }: HeaderProps) {
  return (
    <header className="relative flex items-center justify-between px-6 py-4">
      {/* Слева: Назад + Заголовок */}
      <div className="flex items-center gap-4 z-10">
        {showBack && <BackButton />}
        <h1 className="text-2xl font-bold tracking-wide hover:text-blue-500 transition-all duration-300">
          {title}
        </h1>
      </div>

      {/* Центр: Логотип */}
      <div className="absolute left-1/2 transform -translate-x-1/2 z-0">
        <div className="border-2 px-6 py-2 rounded-xl font-semibold text-lg hover:scale-105 transition-transform duration-500 border-blue-500 dark:border-white shadow-md">
          TEMK AI <span className="text-blue-500">[Logo]</span>
        </div>
      </div>

      {/* Справа: Тема + Аккаунт */}
      <div className="flex items-end gap-6 z-10">
        <ThemeToggle />
        <div className="flex flex-col items-center group transition-all duration-500">
          <span className="text-sm mb-1 group-hover:text-blue-400 transition">Account</span>
          <img
            src="https://via.placeholder.com/40"
            alt="avatar"
            className="w-11 h-11 rounded-full border-2 dark:border-gray-400 hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </header>
  );
}
