import { Droplets, Waves } from 'lucide-react';
import { HugeiconsIcon } from '@hugeicons/react';
import type { IconSvgElement } from '@hugeicons/react';
import WaterEnergyIcon from '@hugeicons/core-free-icons/dist/esm/WaterEnergyIcon';
import Home01Icon from '@hugeicons/core-free-icons/dist/esm/Home01Icon';
import SmartPhone01Icon from '@hugeicons/core-free-icons/dist/esm/SmartPhone01Icon';
import { FormEvent, useEffect, useState } from 'react';
import heroVideoOne from '../../assets/video/233867_small.mp4';
import heroVideoTwo from '../../assets/video/199596-910653729_small.mp4';

export default function Hero() {
  const videos = [heroVideoOne, heroVideoTwo];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % videos.length);
    }, 10000); // switch every 10 seconds

    return () => clearInterval(interval);
  }, [videos.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        {videos.map((src, index) => (
          <video
            key={src}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out ${
              index === activeIndex ? 'opacity-100' : 'opacity-0'
            }`}
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={src} type="video/mp4" />
          </video>
        ))}
        <div className="absolute inset-0 bg-black/45"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/70"></div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-4 pb-20 pt-24 sm:pt-32 sm:pb-24 sm:px-6 lg:px-8">
        {/* Top: two-column layout */}
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          {/* Left: text */}
          <div className="max-w-xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-white">
              Clean water{' '}
              <span className="text-[rgb(59,130,246)]">for every tap</span>
              <span className="block mt-1">in your home</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-gray-200">
              One whole-home filter. Drink, cook, bathe, and wash with confidence.
              <br />
              <span className="font-semibold text-white">
                No electricity or batteries needed. Maintenance included.
              </span>
            </p>
          </div>

          {/* Right: CTA card */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md rounded-3xl bg-black/35 px-6 py-8 sm:px-8 sm:py-10 shadow-2xl shadow-black/60 border border-white/20 backdrop-blur-2xl text-left">
              <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 font-['DM_Sans']">
                <span className="text-[rgb(59,130,246)]">Every family deserves safe water.</span>{' '}
                <span className="text-white">Start your journey to clean water now.</span>
              </h2>
              <form
                onSubmit={(e: FormEvent) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className="space-y-4"
              >
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Full name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder-gray-400 outline-none transition focus:border-[rgb(59,130,246)] focus:ring-2 focus:ring-[rgb(59,130,246)]/30"
                    required
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g., 07xx xxx xxx"
                    className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder-gray-400 outline-none transition focus:border-[rgb(59,130,246)] focus:ring-2 focus:ring-[rgb(59,130,246)]/30"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 w-full rounded-xl bg-gradient-to-r from-[rgb(59,130,246)] to-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(59,130,246,0.35)] transition hover:from-blue-600 hover:to-indigo-700 hover:shadow-[0_18px_45px_rgba(59,130,246,0.45)]"
                >
                  Sign Up for Installation
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom: three value cards */}
        <div className="mt-12 grid gap-4 md:gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg px-5 py-5 flex gap-4 items-start">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-500/15 text-2xl">
              <HugeiconsIcon icon={WaterEnergyIcon as IconSvgElement} size={22} color="#38bdf8" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-semibold text-white mb-1.5">
                No Electricity or Batteries
              </h3>
              <p className="text-xs sm:text-sm text-white/70">
                Uses your existing water pressure. Works during power cuts.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg px-5 py-5 flex gap-4 items-start">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/15 text-2xl">
              <HugeiconsIcon icon={Home01Icon as IconSvgElement} size={22} color="#6ee7b7" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-semibold text-white mb-1.5">
                Whole Home Protection
              </h3>
              <p className="text-xs sm:text-sm text-white/70">
                Every tap protected – kitchen, bathroom, laundry.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg px-5 py-5 flex gap-4 items-start">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-500/15 text-2xl">
              <HugeiconsIcon icon={SmartPhone01Icon as IconSvgElement} size={22} color="#a5b4fc" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-semibold text-white mb-1.5">
                Simple Monthly Plan
              </h3>
              <p className="text-xs sm:text-sm text-white/70">
                Pay via mobile money. All service included.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
