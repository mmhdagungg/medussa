import { useState, useEffect } from 'react';
import { siteConfig, getWhatsAppLink, waMessages } from '../config/site';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Tentang', href: '#tentang' },
  { label: 'Layanan', href: '#layanan' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'Kontak', href: '#kontak' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-500 ease-out
        ${scrolled ? 'bg-white/95 backdrop-blur-xl shadow-[0_1px_20px_rgba(0,0,0,0.08)]' : 'bg-transparent'}`}
      id="navbar"
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 flex items-center justify-between h-full">
        {/* Logo */}
        <a href="#home" className="flex items-center z-10" onClick={closeMenu}>
          <img 
            src="/images/logo-navbar.jpeg" 
            alt={siteConfig.brandName}
            className="h-16 w-auto object-contain"
          />
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-sm font-medium transition-colors duration-300 relative
                  after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px]
                  after:bg-sage-500 after:transition-all after:duration-500 hover:after:w-full
                  ${scrolled
                    ? 'text-gray-500 hover:text-sage-700'
                    : 'text-white/85 hover:text-white'}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href={getWhatsAppLink(waMessages.booking)}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-sage-500 text-white text-sm font-semibold
            px-5 py-2.5 rounded-full shadow-[0_4px_16px_rgba(122,158,126,0.35)]
            hover:bg-sage-600 hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(122,158,126,0.45)]
            transition-all duration-500"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.12 1.52 5.855L.054 23.52a.5.5 0 00.607.596l5.584-1.587A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 01-5.332-1.543l-.382-.229-3.318.943.882-3.397-.237-.393A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
          Booking
        </a>

        {/* Mobile Toggle */}
        <button
          className="flex md:hidden flex-col gap-[5px] bg-transparent p-1.5 z-10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[2px] rounded transition-all duration-300
            ${scrolled && !menuOpen ? 'bg-gray-800' : 'bg-white'}
            ${menuOpen ? 'translate-y-[7px] rotate-45 !bg-gray-800' : ''}`} />
          <span className={`block w-6 h-[2px] rounded transition-all duration-300
            ${scrolled && !menuOpen ? 'bg-gray-800' : 'bg-white'}
            ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[2px] rounded transition-all duration-300
            ${scrolled && !menuOpen ? 'bg-gray-800' : 'bg-white'}
            ${menuOpen ? '-translate-y-[7px] -rotate-45 !bg-gray-800' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white/[0.98] backdrop-blur-2xl flex flex-col items-center
        justify-center gap-10 transition-opacity duration-500 z-5
        ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <ul className="flex flex-col items-center gap-6">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-heading text-2xl text-gray-800 hover:text-sage-500 transition-colors duration-300"
                onClick={closeMenu}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={getWhatsAppLink(waMessages.booking)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-sage-500 text-white font-semibold px-8 py-3.5
            rounded-full shadow-[0_4px_16px_rgba(122,158,126,0.35)] hover:bg-sage-600 transition-all duration-300"
          onClick={closeMenu}
        >
          Booking via WhatsApp
        </a>
      </div>
    </nav>
  );
}
