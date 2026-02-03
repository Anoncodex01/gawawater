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
          <div className="inline-block rounded-full bg-[rgb(59,130,246)]/20 border border-[rgb(59,130,246)]/40 px-4 py-1.5 mb-4">
            <span className="text-blue-300 text-sm font-medium">The Solution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white px-4">
            Simple. Handled for you.
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-white/70 max-w-4xl mx-auto px-4">
            Three steps to safer water in your home
          </p>
        </div>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-10 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-transparent via-[rgb(59,130,246)]/50 to-transparent" />

          <div className="grid md:grid-cols-3 gap-10 sm:gap-12 lg:gap-16">
            {steps.map((step, index) => (
              <div key={step.id} className="relative flex flex-col items-center text-center group">
                <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[rgb(59,130,246)] to-indigo-600 flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.3)] transition-transform duration-300 group-hover:scale-110">
                  <HugeiconsIcon icon={step.icon as IconSvgElement} size={32} color="#ffffff" />
                </div>
                <div className="mt-6">
                  <span className="inline-block text-xs font-semibold text-[rgb(59,130,246)] tracking-wider uppercase mb-2">
                    Step {index + 1}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
