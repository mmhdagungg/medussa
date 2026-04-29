import { siteConfig, getWhatsAppLink, waMessages } from '../config/site';

export default function CTASection() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="relative bg-gradient-to-br from-sage-500 via-sage-600 to-sage-700
          rounded-3xl overflow-hidden px-8 py-14 md:px-16 md:py-20 text-center">
          
          {/* Decorative circles */}
          <div className="absolute top-[-60px] right-[-60px] w-[200px] h-[200px] bg-white/10 rounded-full" />
          <div className="absolute bottom-[-40px] left-[-40px] w-[150px] h-[150px] bg-white/5 rounded-full" />

          <div className="relative z-10">
            <h2 className="fade-up font-heading text-white text-2xl md:text-4xl font-bold mb-4 leading-tight">
              Siap Merasakan Relaksasi<br className="hidden md:block" /> Terbaik di Jakarta?
            </h2>
            <p className="fade-up text-white/80 text-base md:text-lg mb-8 max-w-[500px] mx-auto">
              Hubungi kami sekarang dan nikmati pengalaman spa premium langsung di tempat Anda.
              Tersedia {siteConfig.operatingHours}.
            </p>
            <a
              href={getWhatsAppLink(waMessages.booking)}
              target="_blank"
              rel="noopener noreferrer"
              className="fade-up inline-flex items-center gap-2.5 bg-white text-sage-700 font-bold
                px-8 py-4 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)]
                hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.2)]
                transition-all duration-500 text-base"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.12 1.52 5.855L.054 23.52a.5.5 0 00.607.596l5.584-1.587A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 01-5.332-1.543l-.382-.229-3.318.943.882-3.397-.237-.393A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
              Booking via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
