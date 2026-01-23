import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { COMPANY, SERVICES, NAV_LINKS } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-dark text-white">
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9">
                <svg viewBox="0 0 48 48" className="w-full h-full">
                  <defs>
                    <linearGradient id="logoGradFooter" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#facc15' }} />
                      <stop offset="100%" style={{ stopColor: '#eab308' }} />
                    </linearGradient>
                  </defs>
                  {/* Paint brush icon */}
                  <path
                    d="M12 36c0-4 4-8 12-14 8-6 12-10 12-14 0-2-1-4-4-4s-8 4-12 10c-4 6-8 10-8 14 0 6 4 8 6 8s6-2 6-8"
                    fill="none"
                    stroke="url(#logoGradFooter)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 42c2-2 4-4 6-6"
                    fill="none"
                    stroke="url(#logoGradFooter)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <circle cx="34" cy="8" r="3" fill="url(#logoGradFooter)" opacity="0.6" />
                </svg>
              </div>
              <span className="font-extrabold text-lg">{COMPANY.name}</span>
            </Link>
            <p className="text-sm text-yellow-400 mb-4">{COMPANY.tagline}</p>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Transforming Nebraska homes and businesses with expert painting services and exceptional attention to detail.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-6">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/" className="text-white/70 hover:text-white transition-colors">
                Home
              </Link>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-6">Services</h4>
            <nav className="flex flex-col gap-3">
              {SERVICES.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {service.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact & CTA */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-6">Get Started</h4>
            <p className="text-sm text-white/60 mb-6">Ready to transform your space? Get your free quote today.</p>
            <Button href="/contact#quote" variant="primary" showArrow className="mb-8">
              Free Quote
            </Button>

            <div className="space-y-3 text-sm">
              <a
                href={COMPANY.phoneHref}
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-yellow-400" />
                {COMPANY.phone}
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-yellow-400" />
                {COMPANY.email}
              </a>
              <div className="flex items-start gap-3 text-white/70">
                <MapPin className="w-4 h-4 text-yellow-400 mt-0.5" />
                <span>
                  {COMPANY.address.street}
                  <br />
                  {COMPANY.address.city}, {COMPANY.address.state} {COMPANY.address.zip}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>&copy; {currentYear} {COMPANY.name}. All rights reserved.</p>
          <p className="text-xs">Built with love by Sites by Sam</p>
        </div>
      </div>
    </footer>
  );
}
