import { FormEvent, useState } from 'react';
import { Droplets, CheckCircle, MapPin } from 'lucide-react';

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
    <section id="contact" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-cyan-600 via-blue-600 to-teal-600 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-300 rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="backdrop-blur-lg bg-white/95 border border-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-6 sm:p-10 lg:p-16 text-center">
            <Droplets className="w-12 h-12 sm:w-16 sm:h-16 text-cyan-600 mx-auto mb-4 sm:mb-6" />

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Clean water is a human right.
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed">
              Gawawater turns unsafe, expensive household water into safe, whole-home water for every tap,
              shower and sink — with no big upfront cost. One filter at the main line, maintained for you
              on a simple monthly plan.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="flex items-start gap-3 text-left">
                <CheckCircle className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  Whole-home filtration for drinking, cooking, bathing and cleaning.
                </p>
              </div>
              <div className="flex items-start gap-3 text-left">
                <CheckCircle className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  Filters-as-a-Service (FaaS) — installation, maintenance and replacements included.
                </p>
              </div>
              <div className="flex items-start gap-3 text-left">
                <CheckCircle className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  Less boiling, fewer plastic bottles and lower health and climate risk.
                </p>
              </div>
            </div>

            <div className="backdrop-blur-sm bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 max-w-2xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                Ready to install Gawawater?
              </h3>
              <p className="text-sm sm:text-base text-gray-700 mb-6 sm:mb-8">
                Share your details and we'll contact you to schedule a home assessment and installation.
              </p>

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <input
                  type="text"
                  placeholder="Full name"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-base sm:text-lg bg-white"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  required
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-base sm:text-lg bg-white"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:from-cyan-700 hover:to-blue-700 transform hover:scale-[1.02] transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Sign up for installation'}
                </button>
              </form>
            </div>

            <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-2 text-gray-600 px-4">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
              <p className="text-xs sm:text-sm text-center">
                We're starting in Tanzania and prioritising homes and apartments in Dar es Salaam and nearby cities.
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="relative mt-20 text-center text-white/80">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Droplets className="w-8 h-8" />
          <span className="text-2xl font-bold">Gawawater</span>
        </div>
        <p className="text-white/60">
          Clean water for one billion Africans
        </p>
      </footer>
    </section>
  );
}
