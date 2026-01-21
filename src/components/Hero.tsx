import { Droplets, Waves } from 'lucide-react';
import { useEffect, useState } from 'react';
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

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 pb-20 pt-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
            The first whole-home water filtration
            <span className="block text-white/90">for one billion Africans</span>
          </h1>

          <div className="mt-4 flex items-center justify-center gap-3 text-white/70">
            <Droplets className="h-5 w-5" />
            <span className="text-sm uppercase tracking-[0.3em]">Pure Water, Every Tap</span>
            <Waves className="h-5 w-5" />
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/80 sm:text-xl">
            Gawawater installs a single filtration system at your main line, so every tap in your
            home is safer for drinking, cooking, showering, and washing — without big upfront costs
            or electricity.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection('products')}
              className="rounded-full border border-white/30 bg-white/15 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-white/25"
            >
              Explore Products
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="rounded-full border border-white/40 bg-black/30 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-black/50"
            >
              Get in Touch
            </button>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-white/70">
            <span className="flex items-center gap-2">
              <Droplets className="h-4 w-4 text-cyan-300" />
              No electricity required
            </span>
            <span>•</span>
            <span>One filter for the whole home</span>
            <span>•</span>
            <span>Save up to 90% on water costs</span>
          </div>
        </div>
      </div>
    </section>
  );
}
