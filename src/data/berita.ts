export interface Berita {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
  content: string;
}

export const BERITA_DATA: Berita[] = [
  {
    id: 1,
    title: "Kegiatan Gotong Royong Membersihkan Pesisir Pantai",
    category: "Kegiatan Warga",
    date: "12 Agustus 2026",
    image: "/images/berita-1.png",
    excerpt: "Ratusan warga Desa Karangtirta bersama-sama membersihkan area pesisir pantai untuk menjaga kelestarian lingkungan dan kenyamanan kawasan maritim.",
    content: "Ratusan warga Desa Karangtirta secara sukarela berkumpul pada hari Minggu pagi untuk melakukan kegiatan gotong royong membersihkan pesisir pantai. Kegiatan ini dipelopori oleh Karang Taruna dan didukung penuh oleh jajaran aparatur desa. Selain membersihkan sampah plastik yang terbawa ombak, warga juga menata kembali perahu-perahu nelayan agar terlihat rapi dan tertata. Kegiatan ini bertujuan untuk menjaga kebersihan ekosistem laut, sekaligus memastikan kenyamanan wisatawan yang berkunjung ke kawasan maritim Desa Karangtirta."
  },
  {
    id: 2,
    title: "Hasil Tangkapan Nelayan Karangtirta Meningkat Tajam",
    category: "Ekonomi Pesisir",
    date: "5 Agustus 2026",
    image: "/images/berita-2.png",
    excerpt: "Berkat kondisi cuaca yang bersahabat, hasil tangkapan nelayan lokal mengalami peningkatan, secara langsung mendorong perputaran ekonomi desa.",
    content: "Kabar gembira datang dari sektor kelautan Desa Karangtirta. Sepanjang awal bulan Agustus ini, cuaca laut yang sangat bersahabat telah membantu para nelayan mendapatkan hasil tangkapan yang melimpah, meningkat hingga 20% dibandingkan bulan sebelumnya. Ikan segar yang didaratkan di Tempat Pelelangan Ikan (TPI) Karangtirta langsung diserbu oleh para pedagang dan pengepul. Peningkatan ini tak pelak memberikan dampak positif yang signifikan terhadap perekonomian desa, meningkatkan kesejahteraan keluarga nelayan, serta mendongkrak pendapatan asli desa."
  },
  {
    id: 3,
    title: "Rapat Koordinasi Pembangunan Fasilitas Balai Desa Baru",
    category: "Pemerintahan",
    date: "28 Juli 2026",
    image: "/images/berita-3.png",
    excerpt: "Pemerintah Desa Karangtirta mengadakan rapat terbuka bersama tokoh masyarakat untuk membahas pembaruan ruang publik dan fasilitas balai desa.",
    content: "Dalam upaya meningkatkan kualitas pelayanan kepada masyarakat, Pemerintah Desa Karangtirta telah melangsungkan Rapat Koordinasi tingkat desa yang dihadiri oleh perangkat desa, Badan Permusyawaratan Desa (BPD), tokoh masyarakat, serta perwakilan pemuda. Agenda utama rapat ini adalah membahas rencana renovasi dan penambahan fasilitas di lingkungan Balai Desa. Beberapa usulan yang disepakati antara lain pembuatan ruang tunggu yang lebih nyaman, pengadaan akses internet publik gratis, serta perbaikan sistem administrasi digital terpadu. Proyek pembangunan ini direncanakan akan mulai dieksekusi pada kuartal akhir tahun ini."
  }
];
