import { Zap, Home, Droplets } from 'lucide-react';
import powerImage from '../../assets/12.jpeg';
import filterImage from '../../assets/filter.jpeg';

const features = [
  {
    icon: Zap,
    title: 'No power needed',
    subtitle: 'No power. No problem.',
    description: 'Gawawater is engineered to work with existing water pressure — no electricity, no batteries. Your family is protected even during blackouts.',
    highlight: 'For households relying on boiling and bottled water, Gawawater turns that monthly spend into a predictable service fee.',
    emoji: '⚡',
    gradient: 'from-yellow-400 to-orange-500',
    bgColor: 'bg-gradient-to-br from-cyan-600 to-blue-600',
    image:
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1600&auto=format&fit=crop',
  },
  {
    icon: Home,
    title: 'Whole-house',
    subtitle: 'Every tap. Every shower. Every glass.',
    description: 'We install at the point where water enters your home. That means safer water for: drinking, cooking, brushing teeth, showering, washing baby bottles, and laundry.',
    highlight: 'Instead of protecting just one jug in the kitchen, Gawawater protects your entire home.',
    emoji: '🏠',
    gradient: 'from-cyan-400 to-blue-500',
    bgColor: 'bg-gradient-to-br from-slate-600 to-slate-700',
    image:
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1600&auto=format&fit=crop',
  },
  {
    icon: Droplets,
    title: 'Serviced for you',
    subtitle: 'Precision filtration. Managed end to end.',
    description: 'Multi-stage filtration (sediment + ceramic + carbon) is tailored to local water conditions. Our certified technicians install, inspect, and replace filters on schedule.',
    highlight: 'No more guessing if your filter is expired. We monitor service dates and handle the maintenance so you can simply turn on the tap.',
    emoji: '💧',
    gradient: 'from-blue-400 to-cyan-500',
    bgColor: 'bg-gradient-to-br from-orange-600 to-amber-700',
    image:
      'https://images.unsplash.com/photo-1508873699372-7aeab60b44c9?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function SolutionSection() {
  return (
    <section id="products" className="bg-white py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-900">
            Whole-home protection,
            <span className="block text-neutral-800">designed for Africa.</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-neutral-600">
            One device at the main line. Every tap, shower, and sink benefits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Row 1: Image (left), Text Card (right) */}
          <div className="relative overflow-hidden rounded-3xl shadow-xl aspect-[4/3]">
            <img
              src={powerImage}
              alt="Water filtration system"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl text-white flex flex-col justify-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">NO POWER NEEDED</h3>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed">
              Gawawater is engineered to work with existing water pressure — no electricity, no batteries. Your family is protected even during blackouts.
            </p>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/80">
              For households relying on boiling and bottled water, Gawawater turns that monthly spend into a predictable service fee.
            </p>
          </div>

          {/* Row 2: Text Card (left), Image (right) */}
          <div className="bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl text-white flex flex-col justify-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">WHOLE-HOUSE PROTECTION</h3>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed">
              We install at the point where water enters your home. That means safer water for: drinking, cooking, brushing teeth, showering, washing baby bottles, and laundry.
            </p>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/80">
              Instead of protecting just one jug in the kitchen, Gawawater protects your entire home.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl shadow-xl aspect-[4/3]">
            <img
              src={features[1].image}
              alt="Whole house installation"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Row 3: Image (left), Text Card (right) */}
          <div className="relative overflow-hidden rounded-3xl shadow-xl aspect-[4/3]">
            <img
              src={filterImage}
              alt="Serviced filtration"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="bg-gradient-to-br from-orange-600 to-amber-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl text-white flex flex-col justify-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">SERVICED FOR YOU</h3>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed">
              Multi-stage filtration (sediment + ceramic + carbon) is tailored to local water conditions. Our certified technicians install, inspect, and replace filters on schedule.
            </p>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/80">
              No more guessing if your filter is expired. We monitor service dates and handle the maintenance so you can simply turn on the tap.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
