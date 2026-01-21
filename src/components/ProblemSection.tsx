import { AlertTriangle, Flame, Trash2, Filter } from 'lucide-react';
import knotImage from '../../assets/1.png';

const problems = [
  {
    number: '01',
    icon: AlertTriangle,
    title: 'Water-borne and skin diseases',
    description: 'Families drink, cook, bathe and wash with unclean water, leading to repeated outbreaks of water-borne illnesses and painful skin conditions.',
    color: 'from-red-500 to-orange-500',
  },
  {
    number: '02',
    icon: Flame,
    title: 'Boiling water with charcoal',
    description: 'Boiling water with charcoal fills homes with smoke, causing air-borne and eye diseases. Hot water is often stored in plastic buckets, increasing long-term cancer risk.',
    color: 'from-orange-500 to-amber-500',
  },
  {
    number: '03',
    icon: Trash2,
    title: 'Plastic and carbon pollution',
    description: 'Reliance on bottled water creates mountains of plastic waste and high carbon emissions from manufacturing, transport and disposal.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    number: '04',
    icon: Filter,
    title: 'Inconvenient, partial filtration',
    description: 'Most filters only treat a single jug or tap. They are easy to forget, rarely replaced on time, and leave families exposed to unsafe water in showers, sinks and laundry.',
    color: 'from-blue-500 to-cyan-500',
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
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-4">
            The problem
          </h2>
          <p className="text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Water at home is unsafe, expensive and inconvenient.
          </p>
          <p className="text-lg text-white/70 mt-6 max-w-4xl mx-auto leading-relaxed">
            One billion Africans lack clean drinking water in Sub-Saharan Africa and nearly one million
            people die each year from diarrhoea linked to unsafe drinking water, poor sanitation and hand
            hygiene. Because quality whole-home filtration is too expensive upfront, most households are
            forced into unhealthy, costly and environmentally harmful alternatives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem) => (
            <div
              key={problem.number}
              className="group relative rounded-3xl border border-white/15 bg-white/10 p-8 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/15"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white/90 transition-transform duration-300 group-hover:scale-110">
                    <problem.icon className="w-8 h-8" />
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl font-semibold text-cyan-300">
                      {problem.number}
                    </span>
                    <h3 className="text-xl font-semibold text-white">
                      {problem.title}
                    </h3>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
