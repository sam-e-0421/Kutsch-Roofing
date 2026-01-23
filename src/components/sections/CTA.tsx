import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { COMPANY } from '@/lib/constants';

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-red-800 to-red-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-500/10 rounded-full blur-[100px]" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-yellow-500/10 rounded-full blur-[80px]" />

      <div className="container-custom relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
            Ready to transform your space?
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-xl mx-auto">
            Get your free, no-obligation quote today. We&apos;ll assess your project and provide transparent pricing — no surprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact#quote" variant="primary" size="lg" showArrow>
              Get Your Free Quote
            </Button>
            <Button href={COMPANY.phoneHref} variant="outline" size="lg">
              <Phone className="w-5 h-5" />
              Call {COMPANY.phone}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
