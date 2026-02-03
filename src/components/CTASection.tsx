import { FormEvent, useState } from 'react';
import { CheckCircle } from 'lucide-react';

const benefits = [
  {
    title: 'Whole-home filtration:',
    text: 'Protection for drinking, cooking, bathing and cleaning at every tap.',
  },
  {
    title: 'Filters-as-a-Service (FaaS):',
    text: 'Installation, maintenance and replacements all included in your monthly plan.',
  },
  {
    title: 'Health & environmental benefits:',
    text: 'Less boiling, fewer plastic bottles and lower health and climate risk for your family.',
  },
];

export default function CTASection() {
  const [formData, setFormData] = useState({ fullName: '', phoneNumber: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form submitted:', formData);
    setFormData({ fullName: '', phoneNumber: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-neutral-950 py-12 sm:py-16 lg:py-24 pb-40 sm:pb-44 lg:pb-48 text-white">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
          backgroundRepeat: 'repeat',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 25%, transparent 50%)',
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.03),_transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: copy */}
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              <span className="text-white">Clean water is a</span>
              <span className="block text-[rgb(59,130,246)]">human right.</span>
            </h2>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-8 sm:mb-10">
              Gawawater turns unsafe, expensive household water into safe, whole-home water for every tap, shower and sink — with no big upfront cost. One filter at the main line, maintained for you on a simple monthly plan.
            </p>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-5">
              What you get with Gawawater:
            </h3>
            <ul className="space-y-4">
              {benefits.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[rgb(59,130,246)] flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">
                    <span className="font-semibold text-white">{item.title}</span>{' '}
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: form card */}
          <div className="lg:sticky lg:top-32">
            <div className="backdrop-blur-xl bg-white/5 border border-white/15 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                Ready to install Gawawater?
              </h3>
              <p className="text-sm sm:text-base text-white/70 mb-6 sm:mb-8">
                Share your details and we'll contact you to schedule a home assessment and installation.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="cta-fullname" className="sr-only">Full name</label>
                  <input
                    id="cta-fullname"
                    type="text"
                    placeholder="Enter your full name"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-white/15 bg-white/10 text-white placeholder-white/40 outline-none transition focus:border-[rgb(59,130,246)] focus:ring-2 focus:ring-[rgb(59,130,246)]/30"
                  />
                </div>
                <div>
                  <label htmlFor="cta-phone" className="sr-only">Phone number</label>
                  <input
                    id="cta-phone"
                    type="tel"
                    placeholder="e.g., 07xx xxx xxx"
                    required
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-white/15 bg-white/10 text-white placeholder-white/40 outline-none transition focus:border-[rgb(59,130,246)] focus:ring-2 focus:ring-[rgb(59,130,246)]/30"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[rgb(59,130,246)] to-indigo-600 text-white px-6 py-3 sm:py-4 rounded-xl font-semibold shadow-[0_18px_45px_rgba(59,130,246,0.35)] transition hover:from-blue-600 hover:to-indigo-700 hover:shadow-[0_18px_45px_rgba(59,130,246,0.45)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Sign up for installation'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
