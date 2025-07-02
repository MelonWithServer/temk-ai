// src/components/ui/Card.tsx
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`p-4 rounded-2xl shadow-md bg-white ${className}`}>
    {children}
  </div>
);
