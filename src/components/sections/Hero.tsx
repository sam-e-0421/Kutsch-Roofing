'use client';

import { Phone, Shield, Star, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { COMPANY } from '@/lib/constants';
import { QuoteForm } from './QuoteForm';

export function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute -top-48 -left-48 w-[600px] h-[600px] bg-gold-500/20 rounded-full blur-[120px] animate-glow" />
      <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-navy-600/30 rounded-full blur-[100px] animate-glow" style={{ animationDelay: '-4s' }} />

      <div className="container-custom relative pt-36 lg:pt-44 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Content */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/80 mb-8">
              <span className="w-2 h-2 bg-gold-500 rounded-full shadow-lg shadow-gold-500/50" />
              Licensed & Insured • Est. Nebraska
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
              <span className="block">Roofing that</span>
              <span className="block text-gradient">protects what</span>
              <span className="block">matters most.</span>
            </h1>

            <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-lg">
              From storm damage repairs to complete roof replacements, we deliver craftsmanship you can trust — backed by transparent pricing and a clean job site guarantee.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button href="/contact#quote" variant="primary" size="lg" showArrow>
                Get Your Free Quote
              </Button>
              <Button href={COMPANY.phoneHref} variant="outline" size="lg">
                <Phone className="w-5 h-5" />
                {COMPANY.phone}
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-10">
              <div>
                <div className="text-3xl font-extrabold text-white">500+</div>
                <div className="text-sm text-white/60">Roofs Completed</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-white">5.0</div>
                <div className="text-sm text-white/60">Google Rating</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-white">24hr</div>
                <div className="text-sm text-white/60">Response Time</div>
              </div>
            </div>
          </div>

          {/* Quote Form */}
          <div id="quote" className="lg:pt-0">
            <QuoteForm />
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="bg-black/30 border-t border-white/5">
        <div className="container-custom py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Shield, title: 'Fully Licensed', subtitle: '& Insured' },
              { icon: Star, title: '5-Star Rated', subtitle: 'on Google' },
              { icon: Clock, title: 'Fast Response', subtitle: '24hr Turnaround' },
              { icon: ArrowRight, title: 'Financing', subtitle: 'Available' },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 hover:border-white/10 transition-all"
              >
                <div className="w-11 h-11 bg-gold-500/15 border border-gold-500/25 rounded-lg flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <div className="font-bold text-white text-sm">{item.title}</div>
                  <div className="text-xs text-white/60">{item.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
