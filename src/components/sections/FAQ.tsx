'use client';

import { useState } from 'react';
import { Plus, Minus, Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { FAQ as FAQData, COMPANY } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-2">
            <span className="section-eyebrow">FAQ</span>
            <h2 className="section-title">Common questions, clear answers</h2>
            <p className="section-description mb-8">
              Everything you need to know about working with Kutsch Roofing. Still have questions? We&apos;re just a call away.
            </p>
            <Button href={COMPANY.phoneHref} variant="outline-dark">
              <Phone className="w-4 h-4" />
              Call {COMPANY.phone}
            </Button>
          </div>

          {/* Accordion */}
          <div className="lg:col-span-3 space-y-4">
            {FAQData.map((item, index) => (
              <div
                key={index}
                className={cn(
                  'rounded-xl transition-all',
                  openIndex === index
                    ? 'bg-white shadow-lg border border-slate-200'
                    : 'bg-slate-50 border border-transparent'
                )}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-semibold text-slate-900">{item.question}</span>
                  <div
                    className={cn(
                      'w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all',
                      openIndex === index
                        ? 'bg-gold-500 text-navy-900'
                        : 'bg-navy-700/10 text-navy-700'
                    )}
                  >
                    {openIndex === index ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>
                <div
                  className={cn(
                    'overflow-hidden transition-all duration-300',
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  )}
                >
                  <div className="px-5 pb-5 text-slate-600 leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
