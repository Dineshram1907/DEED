import React from 'react';
import { ArrowUpRight, ArrowDown, ArrowRight } from 'lucide-react';

export type ButtonIconDirection = 'up-right' | 'down' | 'right' | 'none';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'dark' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: ButtonIconDirection;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon = 'up-right',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'group relative inline-flex items-center justify-center flex-nowrap whitespace-nowrap font-semibold tracking-tight transition-all duration-300 rounded-full select-none outline-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer border border-transparent';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2.5 gap-2 min-h-[44px]',
    md: 'text-sm px-6 py-3.5 gap-2.5 min-h-[48px]',
    lg: 'text-sm sm:text-base px-7 py-4 gap-2.5 min-h-[50px]'
  };

  const variantStyles = {
    primary: 'bg-[#FA3800] text-white hover:bg-[#E03200] active:scale-[0.98] shadow-sm',
    secondary: 'bg-[#F2F0EB] text-[#121212] hover:bg-[#E6E4DF] border-[#E6E4DF] active:scale-[0.98]',
    dark: 'bg-[#111110] text-[#FAF9F6] hover:bg-[#222220] active:scale-[0.98]',
    outline: 'bg-transparent text-[#121212] border-[#121212] hover:bg-[#121212] hover:text-[#FAF9F6]',
    ghost: 'bg-transparent text-[#121212] hover:text-[#FA3800] px-0 py-0 border-none'
  };

  const renderIcon = () => {
    if (icon === 'none') return null;
    if (icon === 'down') {
      return (
        <span className="inline-flex items-center justify-center shrink-0 w-4 h-4" aria-hidden="true">
          <ArrowDown className="w-4 h-4 text-[#FA3800] transition-transform duration-300 group-hover:translate-y-0.5" />
        </span>
      );
    }
    if (icon === 'right') {
      return (
        <span className="inline-flex items-center justify-center shrink-0 w-4 h-4" aria-hidden="true">
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </span>
      );
    }
    // Default: up-right
    return (
      <span className="inline-flex items-center justify-center shrink-0 w-4 h-4" aria-hidden="true">
        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    );
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      <span className="whitespace-nowrap font-semibold shrink-0">{children}</span>
      {renderIcon()}
    </button>
  );
};
