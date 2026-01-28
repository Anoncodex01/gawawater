import WhatsAppIcon from './WhatsAppIcon';

const WHATSAPP_URL = 'https://wa.me/255700000000';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 lg:px-6 pt-4 sm:pt-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between rounded-full border border-white/15 bg-white/10 px-4 sm:px-6 py-2.5 sm:py-3 shadow-lg backdrop-blur-xl">
          <div className="flex items-center gap-3 sm:gap-4 min-w-0">
            <div className="flex h-10 w-10 sm:h-11 sm:w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-lg font-bold text-white">
              G
            </div>
            <span className="text-base sm:text-lg font-bold uppercase tracking-tight text-white truncate">
              Gawawater
            </span>
            <div className="hidden sm:block h-6 w-px flex-shrink-0 bg-blue-400/60" />
            <p className="hidden sm:block text-sm text-white/70 truncate">
              Make every water drop pure!
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-shrink-0 items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 sm:px-5 sm:py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#20BD5A] hover:shadow-lg"
          >
            <WhatsAppIcon size={20} className="text-white" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
