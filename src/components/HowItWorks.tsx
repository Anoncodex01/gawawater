import { HugeiconsIcon } from '@hugeicons/react';
import type { IconSvgElement } from '@hugeicons/react';
import ClipboardIcon from '@hugeicons/core-free-icons/dist/esm/ClipboardIcon';
import Wrench01Icon from '@hugeicons/core-free-icons/dist/esm/Wrench01Icon';
import Calendar01Icon from '@hugeicons/core-free-icons/dist/esm/Calendar01Icon';
import diagonalImage from '../../assets/2.png';

const steps = [
  {
    id: 'assessment',
    icon: ClipboardIcon,
    title: 'Free Home Assessment',
    description: 'We check your water line and recommend the right solution.',
  },
  {
    id: 'installation',
    icon: Wrench01Icon,
    title: 'Professional Installation',
    description: 'Expert technician installs your whole-home filter.',
  },
  {
    id: 'ongoing',
    icon: Calendar01Icon,
    title: 'Ongoing Service',
    description: 'We replace filters every 3 months. WhatsApp support included.',
  },
];

export default function HowItWorks() {
  return (
    <section id="about" className="relative overflow-hidden bg-neutral-950 py-12 sm:py-16 lg:py-24 text-white">
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
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-block rounded-full bg-cyan-500/20 border border-cyan-500/30 px-4 py-1.5 mb-4">
            <span className="text-cyan-300 text-sm font-medium">The Solution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white px-4">
            Simple. Handled for you.
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-white/70 max-w-4xl mx-auto px-4">
            Three steps to safer water in your home
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12 lg:mb-16">
          {steps.map((step) => (
            <div
              key={step.id}
              className="backdrop-blur-xl bg-white/5 border border-white/15 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl transition-all duration-300 hover:border-white/25 hover:-translate-y-1 text-center"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg">
                <HugeiconsIcon icon={step.icon as IconSvgElement} size={28} color="#ffffff" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed max-w-sm mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
