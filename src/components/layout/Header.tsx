'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { COMPANY, NAV_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        'bg-navy-900/85 backdrop-blur-xl border-b border-white/10',
        isScrolled && 'bg-navy-900/95 shadow-2xl shadow-black/20'
      )}
    >
      {/* Top Bar */}
      <div className="bg-black/20 border-b border-white/5">
        <div className="container-custom flex items-center justify-between gap-4 py-2 text-sm text-white/70">
          <div className="hidden md:flex items-center gap-3">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>Available 24/7 for storm emergencies</span>
          </div>
          <div className="flex items-center gap-6 ml-auto">
            <a
              href={`mailto:${COMPANY.email}`}
              className="hidden sm:flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              {COMPANY.email}
            </a>
            <a
              href={COMPANY.phoneHref}
              className="flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/15 rounded-full font-semibold text-white hover:bg-white/15 transition-all"
            >
              <Phone className="w-4 h-4" />
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 text-white">
            <div className="w-10 h-10">
              <svg viewBox="0 0 48 48" className="w-full h-full">
                <defs>
                  <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#f0c654' }} />
                    <stop offset="100%" style={{ stopColor: '#d4a438' }} />
                  </linearGradient>
                </defs>
                <path
                  d="M24 6L4 22v22h40V22L24 6z"
                  fill="none"
                  stroke="url(#logoGrad)"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 44V30h16v14"
                  fill="none"
                  stroke="url(#logoGrad)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M0 20l24-16 24 16"
                  fill="none"
                  stroke="url(#logoGrad)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-extrabold text-xl tracking-tight">{COMPANY.name}</span>
              <span className="text-xs text-white/60">{COMPANY.tagline}</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative font-medium text-white/80 hover:text-white transition-colors',
                  'after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gold-500 after:rounded-full after:transition-all',
                  'hover:after:w-full',
                  pathname === link.href && 'text-white after:w-full'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button href="/contact#quote" variant="primary" showArrow>
              Free Quote
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex items-center justify-center w-11 h-11 bg-white/10 border border-white/15 rounded-xl text-white"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'lg:hidden absolute top-full left-0 right-0 bg-navy-900/98 backdrop-blur-xl border-t border-white/10',
            'transition-all duration-300 origin-top',
            isMobileMenuOpen
              ? 'opacity-100 scale-y-100 visible'
              : 'opacity-0 scale-y-95 invisible'
          )}
        >
          <div className="container-custom py-6 flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'py-3 px-4 rounded-xl font-medium text-white/80 hover:text-white hover:bg-white/10 transition-all',
                  pathname === link.href && 'text-white bg-white/10'
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/10 mt-2">
              <Button href="/contact#quote" variant="primary" showArrow className="w-full justify-center">
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
