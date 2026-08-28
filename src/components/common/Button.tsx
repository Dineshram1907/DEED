import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, ArrowDown } from 'lucide-react';

export type ButtonIconDirection = 'right' | 'up-right' | 'down' | 'none';

interface BaseButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
  icon?: ButtonIconDirection;
  children: React.ReactNode;
  className?: string;
}

interface ButtonAsButtonProps extends BaseButtonProps, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  to?: never;
}

interface ButtonAsLinkProps extends BaseButtonProps {
  to: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
}

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon = 'right',
  children,
  className = '',
  ...rest
}) => {
  const baseStyles = 'relative inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#315BFF]/50 active:scale-[0.98] select-none cursor-pointer text-center';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 min-h-[36px] rounded-full gap-1.5',
    md: 'text-sm px-6 py-2.5 sm:py-3 min-h-[44px] sm:min-h-[48px] rounded-full gap-2',
    lg: 'text-sm sm:text-base px-7 py-3.5 sm:py-4 min-h-[50px] sm:min-h-[54px] rounded-full gap-2.5'
  };

  const variantStyles = {
    primary: 'bg-[#315BFF] text-white hover:bg-[#173BCE] border border-transparent shadow-[0_3px_14px_rgba(49,91,255,0.32)] hover:shadow-[0_6px_20px_rgba(49,91,255,0.42)]',
    secondary: 'bg-white/95 backdrop-blur-xs text-[#101828] hover:bg-white border border-[#EAEBF0] hover:border-[#D0D5DD] shadow-[0_1px_4px_rgba(16,24,40,0.04)]',
    outline: 'bg-transparent text-[#101828] hover:bg-[#DDE6FF]/50 hover:text-[#315BFF] border border-[#EAEBF0] hover:border-[#315BFF]/40',
    ghost: 'bg-transparent text-[#68758F] hover:text-[#101828] hover:bg-black/5 border border-transparent',
    white: 'bg-white text-[#101828] hover:bg-[#FAF9F6] border border-transparent shadow-sm hover:shadow-md'
  };

  const renderIcon = () => {
    if (icon === 'none') return null;
    const iconClass = 'w-4 h-4 shrink-0 transition-transform duration-200';
    if (icon === 'up-right') {
      return <ArrowUpRight className={`${iconClass} group-hover:translate-x-0.5 group-hover:-translate-y-0.5`} />;
    }
    if (icon === 'down') {
      return <ArrowDown className={`${iconClass} group-hover:translate-y-0.5`} />;
    }
    return <ArrowRight className={`${iconClass} group-hover:translate-x-0.5`} />;
  };

  const combinedClasses = `group ${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if ('to' in rest && rest.to) {
    const { to, onClick, target, rel } = rest as ButtonAsLinkProps;
    return (
      <Link
        to={to}
        onClick={onClick}
        target={target}
        rel={rel}
        className={combinedClasses}
      >
        <span>{children}</span>
        {renderIcon()}
      </Link>
    );
  }

  const buttonProps = rest as ButtonAsButtonProps;
  return (
    <button className={combinedClasses} {...buttonProps}>
      <span>{children}</span>
      {renderIcon()}
    </button>
  );
};
