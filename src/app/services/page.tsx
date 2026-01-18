import type { Metadata } from 'next';
import Link from 'next/link';
import { Home, Wrench, Layers, Square, Droplets, ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { CTA } from '@/components/sections/CTA';
import { SERVICES, COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Complete roofing solutions for Nebraska homes and businesses. Roof repair, installation, replacement, siding, and gutter services.',
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Wrench,
  Home,
  Layers,
  Square,
  Droplets,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute -top-48 -left-48 w-[500px] h-[500px] bg-gold-500/15 rounded-full blur-[100px]" />

        <div className="container-custom relative">
          <div className="max-w-3xl">
            <span className="section-eyebrow text-gold-500">Our Services</span>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
              Complete roofing solutions for every need
            </h1>
            <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-2xl">
              From emergency repairs to full replacements, we bring precision craftsmanship and premium materials to every project in Nebraska.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact#quote" variant="primary" size="lg" showArrow>
                Get a Free Quote
              </Button>
              <Button href={COMPANY.phoneHref} variant="outline" size="lg">
                <Phone className="w-5 h-5" />
                {COMPANY.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {SERVICES.map((service) => {
              const Icon = iconMap[service.icon] || Home;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group card p-8 flex gap-6 hover:border-gold-500"
                >
                  <div className="w-16 h-16 bg-navy-700/10 border border-navy-700/15 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/15 group-hover:border-gold-500/25 transition-all">
                    <Icon className="w-7 h-7 text-navy-700 group-hover:text-gold-600 transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-gold-600 transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-slate-600 mb-4">{service.shortDescription}</p>
                    <ul className="space-y-2 mb-4">
                      {service.features.slice(0, 3).map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                          <span className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-navy-700 group-hover:text-gold-600 transition-colors">
                      Learn more
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <div className="section-header section-header-center">
            <span className="section-eyebrow">Why Choose Us</span>
            <h2 className="section-title">Quality you can count on</h2>
            <p className="section-description">
              We&apos;re committed to delivering exceptional results on every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Licensed & Insured', desc: 'Fully certified for your peace of mind' },
              { title: 'Premium Materials', desc: 'Only top-tier products from trusted brands' },
              { title: 'Clean Job Sites', desc: 'We leave your property spotless every day' },
              { title: 'Transparent Pricing', desc: 'No hidden fees or surprise charges' },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-2xl border border-slate-100 text-center">
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
