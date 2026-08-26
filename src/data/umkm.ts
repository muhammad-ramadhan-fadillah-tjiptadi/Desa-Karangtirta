export interface Umkm {
  id: number;
  name: string;
  category: string;
  owner: string;
  image: string;
  description: string;
  whatsapp: string;
}

export const UMKM_DATA: Umkm[] = [
  {
    id: 1,
    name: "Tirta Craft",
    category: "Kerajinan",
    owner: "Ibu Suryati",
    image: "/images/umkm_kerajinan.png",
    description: "Kerajinan tangan otentik berbahan dasar cangkang kerang dan rotan pilihan. Cocok untuk suvenir maupun pajangan interior bergaya pesisir yang elegan.",
    whatsapp: "6281234567890"
  },
  {
    id: 2,
    name: "Hasil Laut Bahari",
    category: "Kuliner",
    owner: "Bapak Rusdi",
    image: "/images/umkm_ikan_asin.png",
    description: "Ikan asin premium tangkapan segar nelayan Karangtirta. Diproses secara alami di bawah sinar matahari pantai dengan garam murni tanpa pengawet buatan.",
    whatsapp: "6281234567891"
  },
  {
    id: 3,
    name: "Batik Ombak Tirta",
    category: "Tekstil",
    owner: "Ibu Ningsih",
    image: "/images/umkm_batik.png",
    description: "Kain batik tulis dan cap dengan motif ombak, biota laut, dan pasir pantai. Menggunakan pewarna alami bernuansa indigo blue dan golden sand.",
    whatsapp: "6281234567892"
  },
  {
    id: 4,
    name: "Keripik Rumput Laut Segar",
    category: "Camilan",
    owner: "Kelompok Tani Mekar",
    image: "/images/umkm_keripik.png",
    description: "Camilan sehat nan renyah dari rumput laut segar yang dibudidayakan langsung di perairan Karangtirta. Digoreng dengan minyak berkualitas tinggi.",
    whatsapp: "6281234567893"
  }
];
