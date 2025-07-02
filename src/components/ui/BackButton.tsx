import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="group flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-500 shadow-md hover:shadow-lg text-gray-800 dark:text-white"
    >
      <ArrowLeft className="w-5 h-5 transition-transform duration-500 group-hover:-translate-x-1" />
      <span className="text-sm font-medium group-hover:text-blue-500 transition-colors duration-500">Назад</span>
    </button>
  );
}
