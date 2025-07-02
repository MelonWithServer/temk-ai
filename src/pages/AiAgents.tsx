import React from 'react';
import { Header } from '../components/ui/Header';

interface Exam {
  title: string;
  description: string;
}

export default function AiAgents() {
  const exams: Exam[] = [
    {
      title: 'SAT',
      description: 'Полноценная подготовка к SAT: практика, разбор задач и советы.',
    },
    {
      title: 'IELTS',
      description: 'Тренировки аудирования, чтения, письма и говорения с обратной связью.',
    },
    {
      title: 'TOEFL',
      description: 'Интерактивные тесты и рекомендации по всем разделам TOEFL.',
    },
    {
      title: 'Duolingo English Test',
      description: 'Быстрый онлайн-тренинг с мгновенным анализом ошибок.',
    },
    {
      title: 'GMAT',
      description: 'Стратегии решения задач, тайм-менеджмент и аналитика прогресса.',
    },
    {
      title: 'GRE',
      description: 'Подбор словарного запаса, математические задачи и эссе.',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500 ease-in-out">
      <Header title="AI Agents" showBack />

      <main className="p-6 animate-fade-in-slow">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {exams.map(({ title, description }) => (
            <div
              key={title}
              className="p-6 min-h-[200px] border dark:border-gray-700 rounded-2xl shadow-md bg-white dark:bg-gray-800
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
