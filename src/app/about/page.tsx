import type { Metadata } from 'next';
import { Shield, Award, Users, MapPin, Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CTA } from '@/components/sections/CTA';
import { Testimonials } from '@/components/sections/Testimonials';
import { COMPANY, SERVICE_AREAS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Kutsch Painting - a trusted Nebraska painting company built on precision, quality craftsmanship, and transforming spaces with color.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: `About Us | ${COMPANY.name}`,
    description:
      'Learn about Kutsch Painting - a trusted Nebraska painting company built on precision, quality craftsmanship, and transforming spaces with color.',
    url: '/about',
    type: 'website',
  },
};

const stats = [
  { value: '1000+', label: 'Projects Completed' },
  { value: '15+', label: 'Years Experience' },
  { value: '5.0', label: 'Google Rating' },
  { value: '100%', label: 'Satisfaction Rate' },
];

const values = [
  {
    icon: Shield,
    title: 'Precision & Care',
    description: 'Every edge is crisp, every surface is smooth. We take the time to do it right the first time.',
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'We use only top-tier paints and materials. Your investment deserves finishes that last.',
  },
  {
    icon: Users,
    title: 'Customer First',
    description: 'Your vision drives our work. We listen, advise, and deliver results that exceed expectations.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute -top-48 -right-48 w-[500px] h-[500px] bg-red-500/15 rounded-full blur-[100px]" />

        <div className="container-custom relative">
          <div className="mb-6">
            <Breadcrumbs items={[{ name: 'About', href: '/about' }]} />
          </div>

          <div className="max-w-3xl">
            <span className="section-eyebrow text-yellow-400">About Us</span>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
              Transforming spaces with precision and passion
            </h1>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              Kutsch Painting is a Nebraska-based painting company dedicated to bringing your vision to life through expert color, flawless finishes, and genuine care for every project.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl lg:text-5xl font-extrabold text-gradient mb-2">{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-eyebrow">Our Story</span>
              <h2 className="section-title">More than just paint on walls</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  At Kutsch Painting, we believe that color has the power to transform not just spaces, but how people feel in them. A fresh coat of paint can breathe new life into a tired room, boost curb appeal, or completely reimagine a home.
                </p>
                <p>
                  Founded with a commitment to precision and customer satisfaction, we&apos;ve built our reputation one project at a time. Every surface we touch receives the same careful preparation, premium materials, and expert application.
                </p>
                <p>
                  We&apos;re not just contractors; we&apos;re your neighbors. When you work with Kutsch Painting, you&apos;re working with people who take pride in enhancing Nebraska homes and businesses.
                </p>
              </div>
            </div>
            <div className="bg-slate-100 rounded-2xl p-8 lg:p-12">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Why homeowners choose us</h3>
              <ul className="space-y-4">
                {[
                  'Locally owned and operated',
                  'Fully licensed and insured',
                  'Premium paints from trusted brands',
                  'Complimentary color consultations',
                  'Clean job sites, every day',
                  'Satisfaction guaranteed',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-yellow-500/15 border border-yellow-500/25 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-yellow-600" />
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <div className="section-header section-header-center">
            <span className="section-eyebrow">Our Values</span>
            <h2 className="section-title">What we stand for</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-2xl p-8 border border-slate-100 text-center">
                <div className="w-14 h-14 bg-yellow-500/15 border border-yellow-500/25 rounded-xl flex items-center justify-center mx-auto mb-5">
                  <value.icon className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-eyebrow">Service Areas</span>
              <h2 className="section-title">Proudly serving central Nebraska</h2>
              <p className="section-description mb-8">
                Based in {COMPANY.address.city}, we serve homeowners and businesses across multiple counties. Don&apos;t see your area? Give us a call — we may still be able to help.
              </p>
              <div className="flex flex-wrap gap-3">
                {SERVICE_AREAS.map((area) => (
                  <div
                    key={area.name}
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-full text-sm font-semibold text-slate-700"
                  >
                    <MapPin className="w-4 h-4 text-red-600" />
                    {area.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-red-900 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to transform your space?</h3>
              <p className="text-white/70 mb-6">
                Schedule your free consultation today and get a no-obligation quote.
              </p>
              <Button href="/contact#quote" variant="primary" size="lg" showArrow>
                Get Your Free Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <CTA />
    </>
  );
}
