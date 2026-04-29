// ============================================================
// Site Configuration — Edit this file to update brand & contact
// ============================================================

export const siteConfig = {
  // Brand
  brandName: "Medussa Spa",
  tagline: "Massage Panggilan Jakarta — 24 Jam",

  // WhatsApp
  whatsappNumber: "6287761030810", // Format: country code + number, no +

  // Contact
  phone: "+62 877-6103-0810",
  email: "info@medussaspa.com",
  operatingHours: "24/7 — Setiap Hari",

  // Coverage areas
  areas: ["Jakarta Selatan", "Jakarta Pusat", "Jakarta Barat", "Jakarta Timur", "Jakarta Utara", "Bandung"],

  // Social media (placeholder)
  social: {
    instagram: "https://instagram.com/medussaspa",
    facebook: "https://facebook.com/medussaspa",
    tiktok: "https://tiktok.com/@medussaspa",
  },

  // Stats
  stats: {
    yearsExperience: 8,
    totalClients: "5,000+",
    activeTherapists: 30,
  },
} as const;

// Helper: build WhatsApp link with custom message
export function getWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}

// Pre-built messages
export const waMessages = {
  hero: `Halo ${siteConfig.brandName}, saya ingin booking terapis panggilan di Jakarta.`,
  booking: `Halo ${siteConfig.brandName}, saya ingin melakukan reservasi.`,
  service: (serviceName: string) =>
    `Halo ${siteConfig.brandName}, saya tertarik memesan layanan ${serviceName}. Bisa info lebih lanjut?`,
} as const;
