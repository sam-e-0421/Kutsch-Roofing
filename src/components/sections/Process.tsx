import { FileText, Paintbrush, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { PROCESS_STEPS } from '@/lib/constants';

const icons = [FileText, Paintbrush, CheckCircle];

export function Process() {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="section-header section-header-center">
          <span className="section-eyebrow">Our Process</span>
          <h2 className="section-title">Simple, clean, stress-free</h2>
          <p className="section-description">
            From first contact to final walkthrough, we make the entire painting experience seamless.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {PROCESS_STEPS.map((step, index) => {
            const Icon = icons[index];
            return (
              <div
                key={step.number}
                className="relative bg-slate-50 rounded-2xl p-8 text-center hover:-translate-y-2 hover:shadow-xl hover:bg-white transition-all duration-300"
              >
                {/* Connector line */}
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-yellow-500 to-transparent" />
                )}

                {/* Step Number */}
                <div className="text-5xl font-black text-gradient mb-4">{step.number}</div>

                {/* Icon */}
                <div className="absolute top-6 right-6 text-slate-200">
                  <Icon className="w-8 h-8" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button href="/contact#quote" variant="primary" size="lg" showArrow>
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
}
