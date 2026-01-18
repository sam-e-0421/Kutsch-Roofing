import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { QuoteForm } from '@/components/sections/QuoteForm';
import { FAQ } from '@/components/sections/FAQ';
import { COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Kutsch Roofing for a free, no-obligation quote. We respond within 24 hours.',
};

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: COMPANY.phone,
    href: COMPANY.phoneHref,
    description: 'Call us anytime',
  },
  {
    icon: Mail,
    label: 'Email',
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
    description: 'We respond within 24 hours',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: COMPANY.address.full,
    href: COMPANY.social.google,
    description: 'Visit our office',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon–Fri: 7am–6pm',
    description: '24/7 emergency service',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute -top-48 -left-48 w-[500px] h-[500px] bg-gold-500/15 rounded-full blur-[100px]" />

        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Contact Info */}
            <div>
              <span className="section-eyebrow text-gold-500">Contact Us</span>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                Let&apos;s talk about your project
              </h1>
              <p className="text-lg text-white/70 leading-relaxed mb-10">
                Ready to get started? Reach out and we&apos;ll get back to you within 24 hours with a free, no-obligation quote.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((item) => (
                  <div key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="flex items-start gap-4 p-5 glass border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all group"
                      >
                        <div className="w-11 h-11 bg-gold-500/15 border border-gold-500/25 rounded-lg flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-gold-500" />
                        </div>
                        <div>
                          <div className="text-xs text-white/50 uppercase tracking-wider mb-1">{item.label}</div>
                          <div className="font-semibold text-white group-hover:text-gold-400 transition-colors">{item.value}</div>
                          <div className="text-sm text-white/50">{item.description}</div>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-4 p-5 glass border border-white/10 rounded-xl">
                        <div className="w-11 h-11 bg-gold-500/15 border border-gold-500/25 rounded-lg flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-gold-500" />
                        </div>
                        <div>
                          <div className="text-xs text-white/50 uppercase tracking-wider mb-1">{item.label}</div>
                          <div className="font-semibold text-white">{item.value}</div>
                          <div className="text-sm text-white/50">{item.description}</div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Quote Form */}
            <div id="quote">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-96 bg-slate-100">
        <iframe
          title="Kutsch Roofing Location"
          src={`https://www.google.com/maps?q=${encodeURIComponent(COMPANY.address.full)}&output=embed`}
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      <FAQ />
    </>
  );
}
