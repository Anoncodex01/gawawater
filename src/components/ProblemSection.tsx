import { Bug, Flame, Globe, Droplets } from 'lucide-react';
import knotImage from '../../assets/1.png';

const problems = [
  {
    icon: Bug,
    title: 'Water-borne & skin diseases',
    description:
      'Families drink, cook, bathe and wash with unclean water, leading to repeated outbreaks of waterborne illnesses and painful skin conditions.',
    iconBg: 'bg-emerald-900/80',
    iconColor: 'text-emerald-400',
    calloutText: 'Children, women and elderly most vulnerable',
    calloutColor: 'bg-[rgb(59,130,246)]/20 border-[rgb(59,130,246)]/40 text-blue-200',
  },
  {
    icon: Flame,
    title: 'Boiling creates health risks',
    description:
      'Boiling water with charcoal fills homes with smoke, causing respiratory and eye diseases. Hot water stored in plastic increases long-term cancer risk.',
    iconBg: 'bg-orange-900/80',
    iconColor: 'text-orange-400',
    calloutText: 'Indoor air pollution affects entire family',
    calloutColor: 'bg-[rgb(59,130,246)]/20 border-[rgb(59,130,246)]/40 text-blue-200',
  },
  {
    icon: Globe,
    title: 'Plastic & carbon pollution',
    description:
      'Reliance on bottled water creates mountains of plastic waste and high carbon emissions from manufacturing, transport and disposal.',
    iconBg: 'bg-blue-900/80',
    iconColor: 'text-blue-400',
    calloutText: '30-50 plastic bottles per family monthly',
    calloutColor: 'bg-[rgb(59,130,246)]/20 border-[rgb(59,130,246)]/40 text-blue-200',
  },
  {
    icon: Droplets,
    title: 'Incomplete protection',
    description:
      "Most filters only treat a single jug or tap. They're easily forgotten, rarely replaced on time, and leave families exposed to unsafe water in showers, sinks and laundry.",
    iconBg: 'bg-blue-900/80',
    iconColor: 'text-blue-400',
    calloutText: '70% of water use happens outside kitchen',
    calloutColor: 'bg-[rgb(59,130,246)]/20 border-[rgb(59,130,246)]/40 text-blue-200',
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
          <div className="inline-block rounded-full bg-[rgb(59,130,246)]/20 px-5 py-1.5 text-sm font-medium text-blue-300 border border-[rgb(59,130,246)]/40 mb-4">
            The Problem
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-3 sm:mb-4">
            <span className="text-white">Why families across Africa struggle</span>
            <span className="block text-[rgb(59,130,246)]">with unsafe, expensive water</span>
          </h2>
          <p className="text-base sm:text-lg text-white/80 max-w-4xl mx-auto leading-relaxed px-4">
            One billion Africans lack clean drinking water in Sub-Saharan Africa, and nearly 1 million people die each year there from diarrhoea linked to unsafe water.
          </p>
          <p className="text-base sm:text-lg text-white/70 mt-3 max-w-4xl mx-auto leading-relaxed px-4">
            Current &quot;solutions&quot; create more problems than they solve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {problems.map((problem, i) => (
            <div
              key={i}
              className="group relative min-h-[220px] sm:min-h-[260px] rounded-2xl sm:rounded-3xl border border-white/15 bg-white/5 p-8 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/10"
            >
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <div className={`flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full ${problem.iconBg} ${problem.iconColor} transition-transform duration-300 group-hover:scale-110`}>
                    <problem.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                </div>

                <div className="flex-grow min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                    {problem.title}
                  </h3>
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
      </div>
    </section>
  );
}
