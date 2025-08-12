import { Link } from 'lucide-react';
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  type = 'button',
}) => {
  const baseClasses = 'font-medium rounded-md transition-all duration-200 ease-in-out whitespace-nowrap w-full md:w-auto';

  const variantClasses = {
    primary: 'bg-secondary text-white hover:bg-orange-500 shadow-orange-glow',
    secondary: 'border-2 border-white text-white hover:bg-white hover:text-primary transition-colors',
  };

  const sizeClasses = {
    sm: 'py-1 px-6 text-sm',
    md: 'py-2 px-8 text-base',
    lg: 'py-2 px-10 text-lg font-semibold',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (

    <button
      type={type}
      onClick={onClick}
      className={classes}
    >
      {children}
    </button>
  );
};

export default Button;