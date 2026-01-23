import Link from 'next/link';
import { Home, Paintbrush, Square, Fence, Building, Palette, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SERVICES } from '@/lib/constants';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home,
  Paintbrush,
  Square,
  Fence,
  Building,
  Palette,
};

export function ServicesPreview() {
  return (
    <section className="section bg-slate-50">
      <div className="container-custom">
        <div className="section-header section-header-center">
          <span className="section-eyebrow">Our Services</span>
          <h2 className="section-title">Professional painting for every project</h2>
          <p className="section-description">
            From fresh interior walls to stunning exterior finishes, we bring precision and premium materials to every project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] || Home;
            const isFeatured = 'featured' in service && service.featured;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`group card p-6 ${
                  isFeatured
                    ? 'bg-gradient-to-br from-red-800 to-red-900 border-transparent text-white'
                    : ''
                }`}
              >
                {isFeatured && (
                  <span className="absolute top-4 right-4 px-3 py-1 bg-yellow-500 text-red-950 text-xs font-bold uppercase tracking-wide rounded-full">
                    Most Popular
                  </span>
                )}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all group-hover:scale-110 ${
                    isFeatured
                      ? 'bg-yellow-500/15 border border-yellow-500/25'
                      : 'bg-red-700/10 border border-red-700/15 group-hover:bg-yellow-500/15 group-hover:border-yellow-500/25'
                  }`}
                >
                  <Icon
                    className={`w-6 h-6 ${
                      isFeatured
                        ? 'text-yellow-400'
                        : 'text-red-700 group-hover:text-yellow-600'
                    }`}
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p
                  className={`text-sm leading-relaxed mb-4 ${
                    isFeatured ? 'text-white/70' : 'text-slate-600'
                  }`}
                >
                  {service.shortDescription}
                </p>
                <span
                  className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
                    isFeatured
                      ? 'text-yellow-400 group-hover:text-yellow-300'
                      : 'text-red-700 group-hover:text-yellow-600'
                  }`}
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}

          {/* Color Consultation CTA */}
          <div className="card-dark p-6 flex flex-col">
            <div className="w-14 h-14 bg-yellow-500/15 border border-yellow-500/25 rounded-xl flex items-center justify-center mb-5">
              <Palette className="w-6 h-6 text-yellow-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Need Color Help?</h3>
            <p className="text-sm text-white/70 leading-relaxed mb-4 flex-1">
              Not sure what colors to choose? Our complimentary color consultation helps you find the perfect palette.
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {['Color Matching', 'Trend Advice', 'Sample Testing'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-white/10 border border-white/10 rounded-full text-xs font-semibold text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Button href="/contact#quote" variant="primary" showArrow>
              Book Consultation
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
