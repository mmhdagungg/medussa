import { siteConfig, getWhatsAppLink, waMessages } from '../config/site';

export default function Footer() {
  return (
    <footer className="bg-sage-900 text-white pt-14 md:pt-20 pb-6" id="kontak">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-3 gap-10 md:gap-12 pb-10 border-b border-white/10">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🔱</span>
              <span className="font-heading text-xl font-bold">{siteConfig.brandName}</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Layanan spa &amp; massage panggilan profesional di Jakarta.
              Terapis berpengalaman siap melayani Anda 24/7.
            </p>
            <div className="flex gap-3">
              {[
                { href: siteConfig.social.instagram, label: 'IG' },
                { href: siteConfig.social.facebook, label: 'FB' },
                { href: siteConfig.social.tiktok, label: 'TT' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center
                    text-xs font-semibold text-white/70 hover:bg-sage-500 hover:text-white
                    transition-all duration-300"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="font-heading text-base font-semibold mb-4">Kontak</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-center gap-2">
                <span>📱</span>
                <a
                  href={getWhatsAppLink(waMessages.booking)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sage-300 transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-sage-300 transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>🕐</span>
                <span>{siteConfig.operatingHours}</span>
              </li>
            </ul>
          </div>

          {/* Area Layanan */}
          <div>
            <h4 className="font-heading text-base font-semibold mb-4">Area Layanan</h4>
            <ul className="space-y-2 text-sm text-white/60">
              {siteConfig.areas.map((a) => (
                <li key={a} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sage-400" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 text-center text-white/40 text-xs">
          © {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
