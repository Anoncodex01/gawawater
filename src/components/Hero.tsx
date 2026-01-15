import { Droplets, Waves } from 'lucide-react';
import { FormEvent, useState } from 'react';

export default function Hero() {
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
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="absolute inset-0">
        <Waves className="absolute top-1/4 left-1/4 w-8 h-8 text-cyan-400 opacity-20 animate-float" />
        <Droplets className="absolute top-1/3 right-1/3 w-6 h-6 text-blue-400 opacity-20 animate-float-delayed" />
        <Waves className="absolute bottom-1/3 right-1/4 w-10 h-10 text-teal-400 opacity-20 animate-float" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-8">
            <Droplets className="w-12 h-12 text-cyan-600" />
            <span className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Gawawater
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            The first whole-home water filtration{' '}
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              for one billion Africans
            </span>
          </h1>

          <p className="text-2xl sm:text-3xl text-gray-700 mb-8 font-medium">
            Make every water drop pure.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-lg text-gray-600 mb-12">
            <span className="flex items-center gap-2">
              <Droplets className="w-5 h-5 text-cyan-500" /> drinking
            </span>
            <span>•</span>
            <span>cooking</span>
            <span>•</span>
            <span>showering</span>
            <span>•</span>
            <span>washing</span>
          </div>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-16 leading-relaxed">
            Gawawater is a whole-house water purification service built for one billion Africans.
            We install one filter at your main line, so every tap in your home is safer — without
            big upfront costs or electricity.
          </p>

          <div className="backdrop-blur-lg bg-white/70 border border-white/20 rounded-3xl shadow-2xl p-8 sm:p-12 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Do you want to stop boiling drinking water?<br />
              Do you want to save up to 90% cost of buying drinking water?
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Full name"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-lg bg-white/50 backdrop-blur-sm"
              />
              <input
                type="tel"
                placeholder="Phone number"
                required
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-lg bg-white/50 backdrop-blur-sm"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-cyan-700 hover:to-blue-700 transform hover:scale-[1.02] transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
}
