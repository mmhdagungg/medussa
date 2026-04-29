import { siteConfig, getWhatsAppLink, waMessages } from '../config/site';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="home">
      {/* Background */}
      <div className="absolute inset-0">
        <img src="/images/hero-bg.png" alt="Spa background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/55 to-gray-900/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-5 md:px-8 max-w-[800px] mx-auto
        pt-[calc(72px+3rem)] pb-24 md:pt-[calc(72px+4rem)]">
        
        {/* Badge */}
        <div className="fade-up inline-block bg-white/15 backdrop-blur-md border border-white/20
          text-gold-light text-sm font-medium px-5 py-2 rounded-full mb-6">
          ✨ Diskon 10% untuk panggilan hotel
        </div>

        {/* Title */}
        <h1 className="fade-up font-heading text-white font-bold leading-tight mb-5
          text-[clamp(2.2rem,6vw,3.8rem)] drop-shadow-[0_2px_20px_rgba(0,0,0,0.3)]">
          {siteConfig.tagline}
        </h1>

        {/* Subtitle */}
        <p className="fade-up text-white/85 leading-relaxed mb-8 max-w-[600px] mx-auto
          text-[clamp(1rem,2vw,1.15rem)]">
          Nikmati layanan spa &amp; massage profesional langsung di rumah, hotel, atau apartemen Anda.
          Terapis berpengalaman &amp; bersertifikasi siap melayani kapan saja.
        </p>

        {/* Actions */}
        <div className="fade-up flex items-center justify-center gap-4 flex-wrap">
          <a
            href={getWhatsAppLink(waMessages.hero)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-sage-500 text-white font-semibold
              px-7 py-3.5 rounded-full shadow-[0_4px_16px_rgba(122,158,126,0.35)]
              hover:bg-sage-600 hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(122,158,126,0.45)]
              transition-all duration-500"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.12 1.52 5.855L.054 23.52a.5.5 0 00.607.596l5.584-1.587A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 01-5.332-1.543l-.382-.229-3.318.943.882-3.397-.237-.393A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
            Pesan via WhatsApp
          </a>
          <a href="#layanan"
            className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5
              rounded-full border-2 border-white/60 hover:bg-white/15 hover:border-white
              transition-all duration-500"
          >
            Lihat Layanan
          </a>
        </div>
      </div>

      {/* Bottom curve */}
      <div className="absolute bottom-[-1px] left-0 right-0 z-20 leading-[0]">
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
          <path d="M0 80V30C240 60 480 80 720 60C960 40 1200 20 1440 40V80H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
