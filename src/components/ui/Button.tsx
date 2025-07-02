// src/components/ui/Button.tsx
import React from 'react';

type Variant = 'primary' | 'secondary';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  label: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  label,
  ...props
}) => {
  const baseClasses = 'px-4 py-2 rounded-md font-medium';
  const variantClasses =
    variant === 'primary'
      ? 'bg-blue-600 text-white hover:bg-blue-700'
      : 'bg-gray-200 text-gray-800 hover:bg-gray-300';

  return (
    <button className={`${baseClasses} ${variantClasses}`} {...props}>
      {label}
    </button>
  );
};
