import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/ui/Header';

interface Tool {
  title: string;
  description: string;
  route?: string;
}

export default function Dashboard() {
  const navigate = useNavigate();

  const tools: Tool[] = [
    {
      title: 'Chat Bots',
      description: 'Интерактивные диалоги с AI-ботами для общения и консультаций.',
    },
    {
      title: 'AI Agents',
      description: 'Готовые агенты с ролями для автоматизации ваших задач.',
      route: '/ai-agents',
    },
    {
      title: 'AI Art',
      description: 'Генерация иллюстраций, презентаций, видео и голосовых эффектов.',
    },
    {
      title: 'AI Tools',
      description: 'Перевод, работа с документами и другие утилиты на базе AI.',
    },
    {
      title: 'Create Your Own AI Agent',
      description: 'Создайте кастомного агента для своих процессов и бизнеса.',
    },
    {
      title: 'Coming soon...',
      description: 'В разработке: ожидайте новых возможностей совсем скоро.',
    },
    {
      title: 'Consult with Specialists',
      description: 'Обратитесь к нашим экспертам для настройки индивидуальных решений.',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500 ease-in-out">
      <Header title="Dashboard" />

      <main className="p-6 animate-fade-in-slow">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map(({ title, description, route }) => (
            <div
              key={title}
              onClick={() => route && navigate(route)}
              className="p-6 min-h-[180px] border dark:border-gray-700 rounded-2xl shadow-md bg-white dark:bg-gray-800
                         hover:scale-[1.02] hover:shadow-xl transition-transform duration-500 ease-in-out cursor-pointer"
            >
              <h2 className="text-xl font-semibold mb-2 hover:text-blue-500 transition-colors duration-300">
                {title}
              </h2>
              <p className="text-sm text-gray-700 dark:text-gray-300">{description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
