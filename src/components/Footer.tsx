import { Mail } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import gawawaterLogo from '../../assets/gawawater official logo-01.png';

const WHATSAPP_URL = 'https://wa.me/255700000000';
const INSTAGRAM_URL = 'https://instagram.com/gawawater';
const EMAIL = 'hello@gawawater.com';
const PHONE_DISPLAY = '+255 700 000 000';

function InstagramIcon({ className = '', size = 20 }: { className?: string; size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

const quickLinks = [
  { label: 'How It Works', href: '#about' },
  { label: 'The Problem', href: '#learn' },
  { label: 'Get Started', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="relative -mt-24 rounded-t-3xl border-t border-white/15 bg-neutral-950/95 py-12 sm:py-14 text-white shadow-2xl backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {/* Brand */}
          <div className="space-y-3 sm:col-span-2 md:col-span-1">
            <div className="flex items-center">
              <img
                src={gawawaterLogo}
                alt="Gawawater"
                className="h-24 sm:h-28 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-white/80">Make every water drop pure!</p>
            <p className="text-sm text-white/60 leading-relaxed">
              Whole-home water filtration for African families.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-base font-bold mb-4">Connect with us</h3>
            <p className="text-sm text-white/70 mb-4">Have questions? We're here to help.</p>
            <div className="flex gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white hover:bg-[#20BD5A] transition"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon size={20} />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white hover:opacity-90 transition"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 text-white hover:bg-cyan-600 transition"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-4 text-xs text-white/50 flex flex-wrap items-center gap-x-1 gap-y-1">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition">
                {PHONE_DISPLAY}
              </a>
              <span aria-hidden>·</span>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition">
                @gawawater
              </a>
              <span aria-hidden>·</span>
              <a href={`mailto:${EMAIL}`} className="hover:text-white/70 transition">{EMAIL}</a>
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-center sm:text-left">
            <p className="text-xs sm:text-sm text-white/60">
              Installed by certified technicians • Registered in Tanzania
            </p>
            <p className="text-xs sm:text-sm text-white/60">
              © 2024 Gawawater. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
