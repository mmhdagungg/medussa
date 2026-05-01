import { getWhatsAppLink, waMessages } from '../config/site';

const services = [
  {
    image: '/images/card1.jpeg',
    name: 'Traditional Massage',
    desc: 'Traditional Indonesian massage techniques designed to release fatigue and improve blood circulation.',
    duration: '90 / 120 menit',
    price: 'Rp 350.000',
  },
  {
    image: '/images/card2.png',
    name: 'Aromatherapy Massage',
    desc: 'A blend of gentle massage techniques and premium essential oils for ultimate relaxation.',
    duration: '90 / 120 menit',
    price: 'Rp 400.000',
  },
  {
    image: '/images/card3.jpeg',
    name: 'Hot Stone Therapy',
    desc: 'Therapeutic volcanic hot stones used to deeply soothe muscle tension and stress.',
    duration: '90 / 120 menit',
    price: 'Rp 500.000',
  },
  {
    image: '/images/card4.jpeg',
    name: 'Deep Tissue Massage',
    desc: 'Focused deep pressure to target chronic muscle pain and specific areas of tension.',
    duration: '90 / 120 menit',
    price: 'Rp 350.000',
  },
  {
    image: '/images/card5.jpeg',
    name: 'Body Scrub & Lulur',
    desc: 'Traditional skin treatment to exfoliate dead skin cells and brighten your natural skin glow.',
    duration: '90 / 120 menit',
    price: 'Rp 400.000',
  },
  {
    image: '/images/card6.png',
    name: 'Couple Massage',
    desc: 'A romantic package for two, perfect for enjoying a relaxing experience together with your partner.',
    duration: '90 / 120 menit',
    price: 'Rp 550.000',
  },
  {
    image: '/images/card7.jpeg',
    name: 'Dry Massage',
    desc: 'An oil-free massage technique to loosen stiff muscles and improve blood flow without a sticky feeling.',
    duration: '90 / 120 menit',
    price: 'Rp 400.000',
  },
  {
    image: '/images/card8.jpeg',
    name: 'Balinese Massage',
    desc: 'Authentic Balinese techniques combining deep tissue work and aromatherapy for total body and mind relaxation.',
    duration: '90 / 120 menit',
    price: 'Rp 400.000',
  },
  {
    image: '/images/card9.jpeg',
    name: 'Massage & Kerokan',
    desc: 'A combination of relaxing massage and traditional scraping (kerokan) to help relieve cold symptoms and muscle aches.',
    duration: '90 / 120 menit',
    price: 'Rp 450.000',
  },
];

export default function Services() {
  return (
    <section className="py-16 md:py-24 bg-cream" id="layanan">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="fade-up inline-block text-xs font-semibold tracking-[3px] uppercase text-sage-500 mb-3">
            Layanan Kami
          </span>
          <h2 className="fade-up font-heading text-2xl md:text-[2.5rem] font-semibold leading-tight text-gray-900 mb-4">
            Pilihan Perawatan Terbaik
          </h2>
          <p className="fade-up text-gray-500 max-w-[600px] mx-auto">
            Berbagai pilihan treatment profesional untuk memenuhi kebutuhan relaksasi Anda.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
          {services.map((s, i) => (
            <div
              key={i}
              className={`fade-up delay-${Math.min(i + 1, 5)} group bg-white rounded-2xl overflow-hidden
                shadow-[0_1px_3px_rgba(0,0,0,0.06)]
                hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1.5
                transition-all duration-500 flex flex-col`}
            >
              {/* Image */}
              <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out
                    group-hover:scale-110"
                  loading="lazy"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent
                  opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                {/* Service name overlay on image */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                  <h3 className="font-heading text-lg md:text-xl font-semibold text-white drop-shadow-lg">
                    {s.name}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 md:p-6 flex flex-col flex-1">
                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{s.desc}</p>

                {/* Duration & Price */}
                <div className="flex items-center justify-between mb-5 pb-4 border-b border-gray-100">
                  <span className="text-xs text-gray-400 flex items-center gap-1.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      className="text-sage-400">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    {s.duration}
                  </span>
                  <span className="font-heading font-bold text-sage-600 text-lg">{s.price}</span>
                </div>

                {/* CTA */}
                <a
                  href={getWhatsAppLink(waMessages.service(s.name))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full bg-sage-50 text-sage-700
                    font-semibold text-sm py-3 rounded-xl hover:bg-sage-500 hover:text-white
                    transition-all duration-300"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.12 1.52 5.855L.054 23.52a.5.5 0 00.607.596l5.584-1.587A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 01-5.332-1.543l-.382-.229-3.318.943.882-3.397-.237-.393A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" /></svg>
                  Pesan Sekarang
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
