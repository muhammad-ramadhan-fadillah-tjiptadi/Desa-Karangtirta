import { Hero10, type Hero10Props } from "@/components/ui/hero-10";

const values = {
  title: "Selamat Datang di",
  titleLine2Prefix: "Desa",
  titleHighlight: "Karangtirta",
  description:
    "Desa bahari yang mandiri — dari laut, untuk kesejahteraan bersama. Jelajahi potensi kemaritiman, jadwal TPI, dan layanan publik desa pesisir Karangtirta.",
  images: ["/images/hero-1.png", "/images/hero-2.png", "/images/hero-3.png"],
  imageAlts: [
    "Pemandangan pesisir pantai Karangtirta",
    "Kegiatan nelayan dan Tempat Pelelangan Ikan (TPI)",
    "Konservasi mangrove dan ekosistem pesisir",
  ],
  animation: "subtle",
  primaryCTA: {
    ctaEnabled: true,
    text: "Lihat Jadwal TPI",
    link: "#tpi",
    variant: "default",
    size: "default",
    className:
      "!bg-brand-sand hover:!bg-brand-sand-light !text-brand-navy rounded-full px-8 py-6 text-sm font-bold tracking-wide shadow-lg shadow-brand-sand/20 transition-all",
  },
  secondaryCTAs: [
    {
      ctaEnabled: true,
      text: "Cek Cuaca Laut",
      link: "https://maritim.bmkg.go.id/",
      variant: "default",
      size: "default",
      className:
        "!bg-brand-navy hover:!bg-brand-navy-light !text-white rounded-full px-8 py-6 text-sm font-semibold tracking-wide shadow-lg transition-all",
    },
  ],
} satisfies Hero10Props;

export default function Hero10Demo() {
  return <Hero10 {...values} />;
}
