import { AlertTriangle, Flame, Trash2, Filter } from 'lucide-react';
import knotImage from '../../assets/1.png';

const problems = [
  {
    number: '01',
    icon: AlertTriangle,
    title: 'Water-borne & skin diseases',
    description:
      'Families drink, cook, bathe and wash with unclean water, leading to repeated outbreaks of waterborne illnesses and painful skin conditions.',
    color: 'from-red-500 to-orange-500',
    calloutText: 'Children and elderly most vulnerable',
    calloutColor: 'bg-red-500/15 border-red-500/30 text-red-200',
  },
  {
    number: '02',
    icon: Flame,
    title: 'Boiling creates health risks',
    description:
      'Boiling water with charcoal fills homes with smoke, causing respiratory and eye diseases. Hot water stored in plastic increases long-term cancer risk.',
    color: 'from-orange-500 to-amber-500',
    calloutText: 'Indoor air pollution affects entire family',
    calloutColor: 'bg-orange-500/15 border-orange-500/30 text-orange-200',
  },
  {
    number: '03',
    icon: Trash2,
    title: 'Plastic and carbon pollution',
    description:
      'Reliance on bottled water creates mountains of plastic waste and high carbon emissions from manufacturing, transport and disposal.',
    color: 'from-green-500 to-emerald-500',
    calloutText: '30–50 plastic bottles per family monthly',
    calloutColor: 'bg-blue-500/15 border-blue-500/30 text-blue-200',
  },
  {
    number: '04',
    icon: Filter,
    title: 'Incomplete protection',
    description:
      'Most filters only treat a single jug or tap. They are easily forgotten, rarely replaced on time, and leave families exposed to unsafe water in showers, sinks and laundry.',
    color: 'from-blue-500 to-cyan-500',
    calloutText: '70% of water use happens outside kitchen',
    calloutColor: 'bg-purple-500/15 border-purple-500/30 text-purple-200',
  },
];

export default function ProblemSection() {
  return (
    <section
      id="learn"
      className="relative overflow-hidden bg-black py-24 text-white"
      style={{
        backgroundImage: `url(${knotImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/65"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-block rounded-full bg-red-500/10 px-5 py-1.5 text-sm font-medium text-red-300 border border-red-500/30 mb-4">
            The Problem
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-3 sm:mb-4">
            Why families across Africa struggle
            <span className="block">with unsafe, expensive water</span>
          </h2>
          <p className="text-base sm:text-lg text-white/80 max-w-4xl mx-auto leading-relaxed px-4">
            Nearly 1 million people die each year in Sub-Saharan Africa from diarrhoea linked to unsafe water.
          </p>
          <p className="text-base sm:text-lg text-white/70 mt-3 max-w-4xl mx-auto leading-relaxed px-4">
            Current &quot;solutions&quot; create more problems than they solve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {problems.map((problem) => (
            <div
              key={problem.number}
              className="group relative rounded-2xl sm:rounded-3xl border border-white/15 bg-white/10 p-6 sm:p-8 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/15"
            >
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl border border-white/20 bg-white/10 text-white/90 transition-transform duration-300 group-hover:scale-110">
                    <problem.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <span className="text-2xl sm:text-3xl font-semibold text-cyan-300">
                      {problem.number}
                    </span>
                    <h3 className="text-lg sm:text-xl font-semibold text-white">
                      {problem.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                    {problem.description}
                  </p>
                  {problem.calloutText && (
                    <div
                      className={`mt-4 rounded-xl border px-4 py-3 text-xs sm:text-sm font-medium ${problem.calloutColor}`}
                    >
                      → {problem.calloutText}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-14 lg:mt-16 flex justify-center">
          <div className="w-full max-w-2xl rounded-2xl sm:rounded-3xl border border-white/10 bg-[#2d2830] px-6 py-8 sm:px-10 sm:py-12 text-center shadow-2xl backdrop-blur-xl">
            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              1 Million<span className="text-[#E94D60]">+</span>
            </p>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-white/90 leading-relaxed">
              Annual deaths in Sub-Saharan Africa from unsafe water-related diseases
            </p>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base text-white/60">
              WHO estimates • Most victims are children under 5
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
