import Link from 'next/link';
import { Home, Wrench, Layers, Square, Droplets, Heart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SERVICES } from '@/lib/constants';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Wrench,
  Home,
  Layers,
  Square,
  Droplets,
  Heart,
};

export function ServicesPreview() {
  return (
    <section className="section bg-slate-50">
      <div className="container-custom">
        <div className="section-header section-header-center">
          <span className="section-eyebrow">Our Services</span>
          <h2 className="section-title">Complete roofing solutions for every need</h2>
          <p className="section-description">
            From minor repairs to full replacements, we bring precision craftsmanship and premium materials to every project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] || Home;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`group card p-6 ${
                  service.featured
                    ? 'bg-gradient-to-br from-navy-800 to-navy-900 border-transparent text-white'
                    : ''
                }`}
              >
                {service.featured && (
                  <span className="absolute top-4 right-4 px-3 py-1 bg-gold-500 text-navy-900 text-xs font-bold uppercase tracking-wide rounded-full">
                    Most Popular
                  </span>
                )}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all group-hover:scale-110 ${
                    service.featured
                      ? 'bg-gold-500/15 border border-gold-500/25'
                      : 'bg-navy-700/10 border border-navy-700/15 group-hover:bg-gold-500/15 group-hover:border-gold-500/25'
                  }`}
                >
                  <Icon
                    className={`w-6 h-6 ${
                      service.featured
                        ? 'text-gold-500'
                        : 'text-navy-700 group-hover:text-gold-600'
                    }`}
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p
                  className={`text-sm leading-relaxed mb-4 ${
                    service.featured ? 'text-white/70' : 'text-slate-600'
                  }`}
                >
                  {service.shortDescription}
                </p>
                <span
                  className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
                    service.featured
                      ? 'text-gold-500 group-hover:text-gold-400'
                      : 'text-navy-700 group-hover:text-gold-600'
                  }`}
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}

          {/* Storm Damage CTA */}
          <div className="card-dark p-6 flex flex-col">
            <div className="w-14 h-14 bg-gold-500/15 border border-gold-500/25 rounded-xl flex items-center justify-center mb-5">
              <Heart className="w-6 h-6 text-gold-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Storm Damage?</h3>
            <p className="text-sm text-white/70 leading-relaxed mb-4 flex-1">
              We help document damage, work with your insurance, and restore your roof fast.
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {['Hail Damage', 'Wind Damage', 'Emergency Tarping'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-white/10 border border-white/10 rounded-full text-xs font-semibold text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Button href="/contact#quote" variant="primary" showArrow>
              Get Emergency Help
            </Button>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button href="/services" variant="outline-dark" size="lg" showArrow>
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
