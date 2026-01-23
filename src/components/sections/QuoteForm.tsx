'use client';

import { useState } from 'react';
import { FileText, Shield, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SERVICES } from '@/lib/constants';

export function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      service: formData.get('service'),
      address: formData.get('address'),
      message: formData.get('message'),
    };

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // In production, replace with actual API call
    console.log('Form submitted:', data);

    setIsSubmitting(false);
    setStatus({
      type: 'success',
      message: "Thanks! We'll be in touch within 24 hours to discuss your project.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="glass border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="flex items-center gap-4 p-6 bg-white/5 border-b border-white/5">
        <div className="w-12 h-12 bg-yellow-500/15 border border-yellow-500/25 rounded-xl flex items-center justify-center">
          <FileText className="w-6 h-6 text-yellow-400" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">
            Get Your <span className="text-gradient">FREE</span> Quote
          </h2>
          <p className="text-sm text-white/60">We&apos;ll respond within 24 hours</p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="p-6 space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="label text-white/80">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="John Smith"
              className="input"
            />
          </div>
          <div>
            <label htmlFor="phone" className="label text-white/80">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              placeholder="(402) 555-0123"
              className="input"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="label text-white/80">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="john@example.com"
              className="input"
            />
          </div>
          <div>
            <label htmlFor="service" className="label text-white/80">Service Needed</label>
            <div className="relative">
              <select id="service" name="service" required className="input appearance-none">
                <option value="">Select a service...</option>
                {SERVICES.map((service) => (
                  <option key={service.slug} value={service.title}>
                    {service.title}
                  </option>
                ))}
                <option value="Color Consultation">Color Consultation</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="address" className="label text-white/80">Property Address</label>
          <input
            type="text"
            id="address"
            name="address"
            required
            placeholder="123 Main St, City, NE 68000"
            className="input"
          />
        </div>

        <div>
          <label htmlFor="message" className="label text-white/80">
            Tell Us More <span className="font-normal text-white/50">(optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            placeholder="Describe your painting project, color preferences, timeline..."
            className="input resize-none"
          />
        </div>

        <Button type="submit" variant="primary" size="lg" disabled={isSubmitting} className="w-full">
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Get My Free Quote
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </>
          )}
        </Button>

        <p className="flex items-center justify-center gap-2 text-xs text-white/50 text-center">
          <Shield className="w-3.5 h-3.5" />
          Your information is secure and will never be shared.
        </p>

        {status && (
          <div
            className={`p-4 rounded-xl text-center font-semibold ${
              status.type === 'success'
                ? 'bg-green-500/15 text-green-400'
                : 'bg-red-500/15 text-red-400'
            }`}
          >
            {status.message}
          </div>
        )}
      </form>
    </div>
  );
}
