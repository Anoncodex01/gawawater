import { ClipboardCheck, Wrench, Calendar } from 'lucide-react';
<<<<<<< HEAD
=======
import diagonalImage from '../../assets/2.png';
>>>>>>> 46768df (Initial Gawawater landing page design)

const steps = [
  {
    number: '1',
    icon: ClipboardCheck,
    title: 'Home & water assessment',
    description: 'We visit your home, apartment, or site to inspect the main water line, pressure and storage (tanks, rooftop systems, etc.). You receive a clear recommendation and a transparent monthly quote.',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    number: '2',
    icon: Wrench,
    title: 'Professional installation',
    description: 'A certified Gawawater technician installs the whole-home filter at your main line. Most installs are completed in a few hours with minimal disruption, leak checks, and a full walkthrough of how your system works.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    number: '3',
    icon: Calendar,
    title: 'Filters-as-a-Service (FaaS)',
    description: 'You pay a simple monthly fee via mobile money. We schedule and perform filter replacements, monitor service dates, and keep your whole system working — so you never have to guess if your water is safe.',
    gradient: 'from-cyan-500 to-teal-500',
  },
];

export default function HowItWorks() {
  return (
<<<<<<< HEAD
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-cyan-50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            How Gawawater works
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            From bottled water anxiety to whole-home peace of mind in three simple steps.
=======
    <section id="about" className="relative overflow-hidden bg-neutral-950 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_60%)]"></div>
      <div
        className="absolute left-1/2 top-1/2 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2 -rotate-6 opacity-40"
        style={{
          backgroundImage: `url(${diagonalImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="absolute inset-0 bg-neutral-950/70"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/70 shadow-lg">
            How Gawawater Works
          </div>
          <h2 className="mt-6 text-4xl sm:text-5xl font-semibold text-white">
            From bottled water anxiety to whole-home peace of mind.
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-4xl mx-auto">
            A simple three-step journey that keeps your family safe at every tap.
>>>>>>> 46768df (Initial Gawawater landing page design)
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < steps.length - 1 && (
<<<<<<< HEAD
                <div className="hidden md:block absolute top-24 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-cyan-300 to-blue-300"></div>
              )}

              <div className="backdrop-blur-lg bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-lg`}>
                  {step.number}
                </div>

                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-6`}>
                  <step.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
=======
                <div className="hidden md:block absolute top-24 left-[60%] w-[80%] h-px bg-gradient-to-r from-white/30 to-white/5"></div>
              )}

              <div className="backdrop-blur-xl bg-white/5 border border-white/15 rounded-3xl p-8 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-white/30 h-full relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-2xl font-semibold text-white/60">0{step.number}</div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg`}>
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-white mb-4">
                  {step.title}
                </h3>

                <p className="text-white/70 leading-relaxed">
>>>>>>> 46768df (Initial Gawawater landing page design)
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

<<<<<<< HEAD
        <div className="backdrop-blur-lg bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100 rounded-3xl p-10 text-center">
          <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
=======
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/15 bg-white/10 px-8 py-6 text-center shadow-2xl backdrop-blur-xl">
          <p className="text-lg text-white/80">
>>>>>>> 46768df (Initial Gawawater landing page design)
            Built for African cities, starting with Tanzania. No big upfront cost. No dependence on electricity.
          </p>
        </div>
      </div>
    </section>
  );
}
