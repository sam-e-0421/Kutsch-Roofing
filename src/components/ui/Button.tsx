'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'outline' | 'outline-dark' | 'ghost';
  size?: 'default' | 'lg';
  className?: string;
  showArrow?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'default',
  className,
  showArrow = false,
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const baseStyles = cn(
    'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 whitespace-nowrap',
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500',
    {
      // Variants
      'bg-gradient-to-br from-gold-400 to-gold-500 text-navy-900 shadow-lg shadow-gold-500/30 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-gold-500/40':
        variant === 'primary',
      'border border-white/20 text-white bg-transparent hover:bg-white/10 hover:border-white/30 hover:-translate-y-0.5':
        variant === 'outline',
      'border border-slate-200 text-slate-700 bg-transparent hover:bg-slate-100 hover:border-slate-300 hover:-translate-y-0.5':
        variant === 'outline-dark',
      'text-slate-600 hover:text-slate-900 hover:bg-slate-100':
        variant === 'ghost',
      // Sizes
      'px-5 py-3 text-sm': size === 'default',
      'px-6 py-4 text-base': size === 'lg',
      // States
      'opacity-50 cursor-not-allowed': disabled,
    },
    className
  );

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cn(baseStyles, 'group')}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(baseStyles, 'group')}
    >
      {content}
    </button>
  );
}
