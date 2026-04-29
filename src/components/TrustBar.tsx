const trustItems = [
  { icon: '🏆', label: 'Berpengalaman', desc: '8+ Tahun' },
  { icon: '🕐', label: 'Siap 24 Jam', desc: 'Setiap Hari' },
  { icon: '🧴', label: 'Higienis', desc: 'Alat Steril' },
  { icon: '🔒', label: 'Aman & Nyaman', desc: 'Privasi Terjaga' },
];

export default function TrustBar() {
  return (
    <section className="bg-sage-50 border-y border-sage-100">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-8 md:py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {trustItems.map((item, i) => (
            <div
              key={i}
              className="fade-up flex flex-col items-center text-center gap-1"
            >
              <span className="text-3xl mb-1">{item.icon}</span>
              <span className="text-sage-800 font-semibold text-sm md:text-base">{item.label}</span>
              <span className="text-sage-600 text-xs md:text-sm">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
