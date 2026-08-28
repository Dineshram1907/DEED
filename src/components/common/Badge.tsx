import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'light' | 'dark' | 'accent' | 'outline';
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'light',
  size = 'sm'
}) => {
  const sizeStyles = size === 'sm' ? 'text-[11px] px-2.5 py-1' : 'text-xs px-3.5 py-1.5';
  
  const variantStyles = {
    light: 'bg-[#F2F0EB] text-[#4A4946] border border-[#E6E4DF]',
    dark: 'bg-[#1E1E1C] text-[#D4D2CB] border border-[#2D2D2A]',
    accent: 'bg-[#FA3800]/10 text-[#FA3800] border border-[#FA3800]/20 font-medium',
    outline: 'bg-transparent text-[#666562] border border-[#D4D2CB]'
  };

  return (
    <span className={`inline-flex items-center rounded-full font-mono uppercase tracking-wider ${sizeStyles} ${variantStyles[variant]}`}>
      {children}
    </span>
  );
};
