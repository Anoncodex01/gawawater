import { Droplets } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-6 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between rounded-full border border-white/15 bg-white/10 px-4 py-3 text-sm font-medium uppercase tracking-wide shadow-lg backdrop-blur-xl">
          <div className="flex items-center gap-2">
            <Droplets className="h-6 w-6 text-cyan-300" />
            <span className="text-base font-semibold tracking-normal text-white">Gawawater</span>
          </div>
          <nav className="hidden items-center gap-8 text-white/80 md:flex">
            <a className="hover:text-white transition-colors" href="#products">
              Products
            </a>
            <a className="hover:text-white transition-colors" href="#learn">
              Learn
            </a>
            <a className="hover:text-white transition-colors" href="#about">
              About
            </a>
            <a className="hover:text-white transition-colors" href="#contact">
              Contact
            </a>
          </nav>
          <a
            href="#contact"
            className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold text-white/90 transition hover:bg-white/20"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
}
