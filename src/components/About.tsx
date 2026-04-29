import { siteConfig } from '../config/site';

export default function About() {
  return (
    <section className="py-16 md:py-24" id="tentang">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="fade-up relative">
            <div className="rounded-2xl overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.12)]">
              <img
                src="/images/about.png"
                alt="Suasana spa Medussa"
                className="w-full h-[300px] md:h-[420px] object-cover"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-sage-100 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-gold-light/30 rounded-full -z-10" />
          </div>

          {/* Text */}
          <div className="fade-up">
            <span className="inline-block font-body text-xs font-semibold tracking-[3px] uppercase text-sage-500 mb-3">
              Tentang Kami
            </span>
            <h2 className="font-heading text-2xl md:text-[2.5rem] font-semibold leading-tight text-gray-900 mb-5">
              Relaksasi Premium,<br />Langsung ke Tempat Anda
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              <strong className="text-gray-700">{siteConfig.brandName}</strong> hadir sebagai layanan spa &amp; massage panggilan terpercaya di Jakarta.
              Dengan terapis profesional bersertifikasi, kami membawa pengalaman spa bintang lima langsung
              ke kenyamanan rumah, hotel, atau apartemen Anda.
            </p>
            <p className="text-gray-500 leading-relaxed mb-6">
              Kami melayani seluruh area <strong className="text-gray-700">{siteConfig.areas.join(', ')}</strong> dengan
              peralatan steril dan produk berkualitas tinggi.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center bg-sage-50 rounded-xl py-4 px-2">
                <div className="font-heading text-2xl md:text-3xl font-bold text-sage-600">
                  {siteConfig.stats.yearsExperience}+
                </div>
                <div className="text-xs md:text-sm text-gray-500 mt-1">Tahun</div>
              </div>
              <div className="text-center bg-sage-50 rounded-xl py-4 px-2">
                <div className="font-heading text-2xl md:text-3xl font-bold text-sage-600">
                  {siteConfig.stats.totalClients}
                </div>
                <div className="text-xs md:text-sm text-gray-500 mt-1">Klien</div>
              </div>
              <div className="text-center bg-sage-50 rounded-xl py-4 px-2">
                <div className="font-heading text-2xl md:text-3xl font-bold text-sage-600">
                  {siteConfig.stats.activeTherapists}+
                </div>
                <div className="text-xs md:text-sm text-gray-500 mt-1">Terapis</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
