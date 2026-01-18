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
                      <stop offset="0%" style={{ stopColor: '#f0c654' }} />
                      <stop offset="100%" style={{ stopColor: '#d4a438' }} />
                    </linearGradient>
                  </defs>
                  <path
                    d="M24 6L4 22v22h40V22L24 6z"
                    fill="none"
                    stroke="url(#logoGradFooter)"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 44V30h16v14"
                    fill="none"
                    stroke="url(#logoGradFooter)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M0 20l24-16 24 16"
                    fill="none"
                    stroke="url(#logoGradFooter)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="font-extrabold text-lg">{COMPANY.name}</span>
            </Link>
            <p className="text-sm text-gold-500 mb-4">{COMPANY.tagline}</p>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Delivering quality craftsmanship and exceptional service to homeowners across central Nebraska.
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
            <p className="text-sm text-white/60 mb-6">Ready for a new roof? Get your free quote today.</p>
            <Button href="/contact#quote" variant="primary" showArrow className="mb-8">
              Free Quote
            </Button>

            <div className="space-y-3 text-sm">
              <a
                href={COMPANY.phoneHref}
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-gold-500" />
                {COMPANY.phone}
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-gold-500" />
                {COMPANY.email}
              </a>
              <div className="flex items-start gap-3 text-white/70">
                <MapPin className="w-4 h-4 text-gold-500 mt-0.5" />
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
          <p className="text-xs">Built with ❤️ by Sites by Sam</p>
        </div>
      </div>
    </footer>
  );
}
