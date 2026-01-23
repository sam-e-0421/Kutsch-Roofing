import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Home, Paintbrush, Square, Fence, Building, Check, Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CTA } from '@/components/sections/CTA';
import { Testimonials } from '@/components/sections/Testimonials';
import { SERVICES, COMPANY } from '@/lib/constants';
import { getServiceSchema, schemaToScript } from '@/lib/schema';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home,
  Paintbrush,
  Square,
  Fence,
  Building,
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
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | ${COMPANY.name}`,
      description: service.description,
      url: `/services/${service.slug}`,
      type: 'website',
    },
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
  const serviceSchema = getServiceSchema(slug);

  return (
    <>
      {serviceSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: schemaToScript(serviceSchema),
          }}
        />
      )}

      {/* Hero */}
      <section className="pt-36 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute -top-48 -left-48 w-[500px] h-[500px] bg-red-500/15 rounded-full blur-[100px]" />

        <div className="container-custom relative">
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { name: 'Services', href: '/services' },
                { name: service.title, href: `/services/${service.slug}` },
              ]}
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-yellow-500/15 border border-yellow-500/25 rounded-2xl flex items-center justify-center mb-6">
                <Icon className="w-8 h-8 text-yellow-400" />
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
                    <div className="w-6 h-6 bg-yellow-500/15 border border-yellow-500/25 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-yellow-400" />
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
                <div className="w-12 h-12 bg-yellow-500/15 border border-yellow-500/25 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-yellow-600">{index + 1}</span>
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
                  <div className="w-12 h-12 bg-red-700/10 border border-red-700/15 rounded-xl flex items-center justify-center mb-4 group-hover:bg-yellow-500/15 group-hover:border-yellow-500/25 transition-all">
                    <OtherIcon className="w-5 h-5 text-red-700 group-hover:text-yellow-600 transition-colors" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2 group-hover:text-red-600 transition-colors">
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
