import { Droplets, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 sm:pt-6 px-3 sm:px-4 lg:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between rounded-full border border-white/15 bg-white/10 px-3 sm:px-4 py-2.5 sm:py-3 text-sm font-medium uppercase tracking-wide shadow-lg backdrop-blur-xl">
          <div className="flex items-center gap-2">
            <Droplets className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-300" />
            <span className="text-sm sm:text-base font-semibold tracking-normal text-white">Gawawater</span>
          </div>
          <nav className="hidden items-center gap-6 lg:gap-8 text-white/80 md:flex">
            <a className="hover:text-white transition-colors text-xs lg:text-sm" href="#products">
              Products
            </a>
            <a className="hover:text-white transition-colors text-xs lg:text-sm" href="#learn">
              Learn
            </a>
            <a className="hover:text-white transition-colors text-xs lg:text-sm" href="#about">
              About
            </a>
            <a className="hover:text-white transition-colors text-xs lg:text-sm" href="#contact">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden sm:inline-block rounded-full border border-white/30 bg-white/10 px-3 lg:px-4 py-1.5 lg:py-2 text-xs font-semibold text-white/90 transition hover:bg-white/20"
            >
              Get in Touch
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden rounded-full border border-white/30 bg-white/10 p-2 text-white/90 transition hover:bg-white/20"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl shadow-lg p-4 space-y-3">
            <a
              href="#products"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            >
              Products
            </a>
            <a
              href="#learn"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            >
              Learn
            </a>
            <a
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            >
              Contact
            </a>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2 rounded-lg text-center rounded-full border border-white/30 bg-white/10 text-white/90 font-semibold hover:bg-white/20 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
