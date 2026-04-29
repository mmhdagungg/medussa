const features = [
  {
    icon: '⚡',
    title: 'Respon Cepat',
    desc: 'Tim kami merespon dalam hitungan menit dan terapis tiba dalam 30–60 menit.',
  },
  {
    icon: '🎓',
    title: 'Terapis Tersertifikasi',
    desc: 'Semua terapis kami memiliki sertifikasi resmi dan pengalaman minimal 3 tahun.',
  },
  {
    icon: '🧹',
    title: 'Peralatan Steril',
    desc: 'Setiap peralatan disterilkan sebelum dan sesudah digunakan untuk keamanan Anda.',
  },
  {
    icon: '🛡️',
    title: 'Privasi Terjaga',
    desc: 'Kami menjamin kerahasiaan dan kenyamanan privasi setiap klien kami.',
  },
];

export default function WhyUs() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="fade-up inline-block text-xs font-semibold tracking-[3px] uppercase text-sage-500 mb-3">
            Keunggulan
          </span>
          <h2 className="fade-up font-heading text-2xl md:text-[2.5rem] font-semibold leading-tight text-gray-900 mb-4">
            Kenapa Pilih Kami?
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="fade-up text-center bg-white rounded-2xl p-7 md:p-8
                shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)]
                hover:-translate-y-1 transition-all duration-500"
            >
              <span className="inline-flex items-center justify-center w-16 h-16 bg-sage-50
                rounded-2xl text-3xl mb-5">
                {f.icon}
              </span>
              <h3 className="font-heading text-lg font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
