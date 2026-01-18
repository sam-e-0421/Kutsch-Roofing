import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Home, Wrench, Layers, Square, Droplets, Check, Phone, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { CTA } from '@/components/sections/CTA';
import { Testimonials } from '@/components/sections/Testimonials';
import { SERVICES, COMPANY } from '@/lib/constants';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Wrench,
  Home,
  Layers,
  Square,
  Droplets,
};

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return { title: 'Service Not Found' };
  }

  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = iconMap[service.icon] || Home;
  const otherServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute -top-48 -left-48 w-[500px] h-[500px] bg-gold-500/15 rounded-full blur-[100px]" />

        <div className="container-custom relative">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-gold-500/15 border border-gold-500/25 rounded-2xl flex items-center justify-center mb-6">
                <Icon className="w-8 h-8 text-gold-500" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                {service.title}
              </h1>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                {service.description}
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

            {/* Features Card */}
            <div className="glass border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">What&apos;s Included</h3>
              <ul className="space-y-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gold-500/15 border border-gold-500/25 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-gold-500" />
                    </div>
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="section-header section-header-center">
            <span className="section-eyebrow">Benefits</span>
            <h2 className="section-title">Why choose our {service.title.toLowerCase()} service?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.benefits.map((benefit, index) => (
              <div
                key={benefit}
                className="bg-slate-50 rounded-2xl p-6 text-center hover:-translate-y-1 hover:shadow-lg hover:bg-white transition-all"
              >
                <div className="w-12 h-12 bg-gold-500/15 border border-gold-500/25 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-gold-600">{index + 1}</span>
                </div>
                <p className="font-semibold text-slate-900">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <div className="section-header section-header-center">
            <span className="section-eyebrow">More Services</span>
            <h2 className="section-title">Explore our other services</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {otherServices.map((otherService) => {
              const OtherIcon = iconMap[otherService.icon] || Home;
              return (
                <Link
                  key={otherService.slug}
                  href={`/services/${otherService.slug}`}
                  className="group card p-6"
                >
                  <div className="w-12 h-12 bg-navy-700/10 border border-navy-700/15 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold-500/15 group-hover:border-gold-500/25 transition-all">
                    <OtherIcon className="w-5 h-5 text-navy-700 group-hover:text-gold-600 transition-colors" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2 group-hover:text-gold-600 transition-colors">
                    {otherService.title}
                  </h3>
                  <p className="text-sm text-slate-600">{otherService.shortDescription}</p>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Button href="/services" variant="outline-dark" showArrow>
              View All Services
            </Button>
          </div>
        </div>
      </section>

      <Testimonials />
      <CTA />
    </>
  );
}
