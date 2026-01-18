import type { Metadata } from 'next';
import { Shield, Award, Users, MapPin, Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { CTA } from '@/components/sections/CTA';
import { Testimonials } from '@/components/sections/Testimonials';
import { COMPANY, SERVICE_AREAS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Kutsch Roofing - a trusted Nebraska roofing company built on honesty, quality craftsmanship, and community values.',
};

const stats = [
  { value: '500+', label: 'Roofs Completed' },
  { value: '15+', label: 'Years Experience' },
  { value: '5.0', label: 'Google Rating' },
  { value: '100%', label: 'Satisfaction Rate' },
];

const values = [
  {
    icon: Shield,
    title: 'Integrity First',
    description: 'We do what we say, when we say it. Honest assessments, transparent pricing, no surprises.',
  },
  {
    icon: Award,
    title: 'Quality Craftsmanship',
    description: 'Every roof we touch is built to last. Premium materials, precise installation, attention to detail.',
  },
  {
    icon: Users,
    title: 'Community Focused',
    description: 'We\'re your neighbors. We take pride in protecting Nebraska homes and building lasting relationships.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute -top-48 -right-48 w-[500px] h-[500px] bg-gold-500/15 rounded-full blur-[100px]" />

        <div className="container-custom relative">
          <div className="max-w-3xl">
            <span className="section-eyebrow text-gold-500">About Us</span>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
              Built on honesty, driven by quality
            </h1>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              Kutsch Roofing is a Nebraska-based roofing company dedicated to protecting homes and businesses with exceptional craftsmanship and genuine care.
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
              <h2 className="section-title">Nebraska roots, Nebraska values</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  At Kutsch Roofing, we understand what Nebraska weather can do to a roof. From summer hail storms to winter ice dams, we&apos;ve seen it all — and we know how to fix it.
                </p>
                <p>
                  Founded with a simple mission — to provide honest, quality roofing services to our neighbors — we&apos;ve built our reputation one roof at a time. Every project we take on reflects our commitment to doing things right.
                </p>
                <p>
                  We&apos;re not just contractors; we&apos;re members of this community. When you work with Kutsch Roofing, you&apos;re working with people who take pride in protecting Nebraska homes.
                </p>
              </div>
            </div>
            <div className="bg-slate-100 rounded-2xl p-8 lg:p-12">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Why homeowners choose us</h3>
              <ul className="space-y-4">
                {[
                  'Locally owned and operated',
                  'Fully licensed and insured',
                  'Premium materials from trusted brands',
                  'Transparent, upfront pricing',
                  'Clean job sites, every day',
                  'Manufacturer warranties honored',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gold-500/15 border border-gold-500/25 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-gold-600" />
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
                <div className="w-14 h-14 bg-gold-500/15 border border-gold-500/25 rounded-xl flex items-center justify-center mx-auto mb-5">
                  <value.icon className="w-6 h-6 text-gold-600" />
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
                    <MapPin className="w-4 h-4 text-gold-600" />
                    {area.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-navy-900 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to get started?</h3>
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
