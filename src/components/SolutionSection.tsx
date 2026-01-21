import { Zap, Home, Droplets } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'No power needed',
    subtitle: 'No power. No problem.',
    description: 'Gawawater is engineered to work with existing water pressure — no electricity, no batteries. Your family is protected even during blackouts.',
    highlight: 'For households relying on boiling and bottled water, Gawawater turns that monthly spend into a predictable service fee.',
    emoji: '⚡',
    gradient: 'from-yellow-400 to-orange-500',
<<<<<<< HEAD
=======
    bgColor: 'bg-gradient-to-br from-cyan-600 to-blue-600',
    image:
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1600&auto=format&fit=crop',
>>>>>>> 46768df (Initial Gawawater landing page design)
  },
  {
    icon: Home,
    title: 'Whole-house',
    subtitle: 'Every tap. Every shower. Every glass.',
    description: 'We install at the point where water enters your home. That means safer water for: drinking, cooking, brushing teeth, showering, washing baby bottles, and laundry.',
    highlight: 'Instead of protecting just one jug in the kitchen, Gawawater protects your entire home.',
    emoji: '🏠',
    gradient: 'from-cyan-400 to-blue-500',
<<<<<<< HEAD
=======
    bgColor: 'bg-gradient-to-br from-slate-600 to-slate-700',
    image:
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1600&auto=format&fit=crop',
>>>>>>> 46768df (Initial Gawawater landing page design)
  },
  {
    icon: Droplets,
    title: 'Serviced for you',
    subtitle: 'Precision filtration. Managed end to end.',
    description: 'Multi-stage filtration (sediment + ceramic + carbon) is tailored to local water conditions. Our certified technicians install, inspect, and replace filters on schedule.',
    highlight: 'No more guessing if your filter is expired. We monitor service dates and handle the maintenance so you can simply turn on the tap.',
    emoji: '💧',
    gradient: 'from-blue-400 to-cyan-500',
<<<<<<< HEAD
=======
    bgColor: 'bg-gradient-to-br from-orange-600 to-amber-700',
    image:
      'https://images.unsplash.com/photo-1508873699372-7aeab60b44c9?q=80&w=1600&auto=format&fit=crop',
>>>>>>> 46768df (Initial Gawawater landing page design)
  },
];

export default function SolutionSection() {
  return (
<<<<<<< HEAD
    <section className="py-24 bg-gradient-to-b from-white to-cyan-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(6, 182, 212) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Whole-home protection,{' '}
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              designed for Africa.
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
=======
    <section id="products" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-neutral-900 sm:text-5xl">
            Whole-home protection,
            <span className="block text-neutral-800">designed for Africa.</span>
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
>>>>>>> 46768df (Initial Gawawater landing page design)
            One device at the main line. Every tap, shower, and sink benefits.
          </p>
        </div>

<<<<<<< HEAD
        <div className="space-y-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 lg:gap-12 items-center`}
            >
              <div className="flex-1 backdrop-blur-lg bg-white/80 border border-white/40 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg`}>
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-5xl">{feature.emoji}</div>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-xl font-semibold text-cyan-600 mb-4">
                  {feature.subtitle}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {feature.description}
                </p>
                <div className="backdrop-blur-sm bg-cyan-50/50 border border-cyan-100 rounded-xl p-6">
                  <p className="text-gray-700 leading-relaxed font-medium">
                    {feature.highlight}
                  </p>
                </div>
              </div>

              <div className="flex-1 flex items-center justify-center">
                <div className={`relative w-80 h-80 rounded-full bg-gradient-to-br ${feature.gradient} opacity-20 blur-3xl`}></div>
              </div>
            </div>
          ))}
=======
        <div className="grid grid-cols-2 gap-6">
          {/* Row 1: Image (left), Text Card (right) */}
          <div className="relative overflow-hidden rounded-3xl shadow-xl aspect-[4/3]">
            <img
              src={features[0].image}
              alt="Water filtration system"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="bg-gradient-to-br from-cyan-600 to-blue-600 rounded-3xl p-8 shadow-xl text-white flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">NO POWER NEEDED</h3>
            <p className="text-white/90 leading-relaxed">
              Gawawater is engineered to work with existing water pressure — no electricity, no batteries. Your family is protected even during blackouts.
            </p>
            <p className="mt-4 text-white/80">
              For households relying on boiling and bottled water, Gawawater turns that monthly spend into a predictable service fee.
            </p>
          </div>

          {/* Row 2: Text Card (left), Image (right) */}
          <div className="bg-gradient-to-br from-slate-600 to-slate-700 rounded-3xl p-8 shadow-xl text-white flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">WHOLE-HOUSE PROTECTION</h3>
            <p className="text-white/90 leading-relaxed">
              We install at the point where water enters your home. That means safer water for: drinking, cooking, brushing teeth, showering, washing baby bottles, and laundry.
            </p>
            <p className="mt-4 text-white/80">
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
              src={features[2].image}
              alt="Serviced filtration"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="bg-gradient-to-br from-orange-600 to-amber-700 rounded-3xl p-8 shadow-xl text-white flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">SERVICED FOR YOU</h3>
            <p className="text-white/90 leading-relaxed">
              Multi-stage filtration (sediment + ceramic + carbon) is tailored to local water conditions. Our certified technicians install, inspect, and replace filters on schedule.
            </p>
            <p className="mt-4 text-white/80">
              No more guessing if your filter is expired. We monitor service dates and handle the maintenance so you can simply turn on the tap.
            </p>
          </div>
>>>>>>> 46768df (Initial Gawawater landing page design)
        </div>
      </div>
    </section>
  );
}
