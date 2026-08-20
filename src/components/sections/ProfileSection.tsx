import { useState } from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { motion, AnimatePresence } from 'framer-motion';

const tabData = [
  {
    key: 'sejarah',
    label: 'Sejarah Desa',
    header: (
      <>
        Jejak Langkah <br />
        <span className="text-blue-600">Karangtirta</span>
      </>
    ),
    content: (
      <div className="flex flex-col gap-6">
        <p className="text-slate-600 leading-relaxed text-lg">
          Desa Karangtirta adalah surga tersembunyi yang berlokasi di pesisir Pangandaran.
          Dikenal dengan lagunanya yang menawan—sebuah estuari tempat bertemunya air laut dan sungai—kawasan
          ini telah berevolusi dari sekadar ladang penggembalaan kerbau menjadi desa bahari yang maju.
        </p>
        <p className="text-slate-600 leading-relaxed text-lg">
          Kini, dengan semangat gotong royong dan kearifan lokal nelayan pesisir, Karangtirta
          terus berbenah menjadi desa mandiri yang memadukan tradisi melaut dengan teknologi modern.
        </p>
        <div className="rounded-3xl overflow-hidden aspect-video bg-slate-200 shadow-xl relative mt-4">
          <img 
            src="https://images.unsplash.com/photo-1590059556277-2f7415170d10?q=80&w=1000&auto=format&fit=crop" 
            alt="Pemandangan Desa" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    ),
  },
  {
    key: 'visi-misi',
    label: 'Visi & Misi',
    header: (
      <>
        Arah Gerak <br />
        <span className="text-blue-600">Pembangunan</span>
      </>
    ),
    content: (
      <div className="flex flex-col gap-8">
        <div>
          <h4 className="text-xl font-bold text-[#0F172A] mb-3">Visi Kami</h4>
          <p className="text-slate-600 leading-relaxed text-lg italic border-l-4 border-blue-600 pl-4">
            "Mewujudkan Desa Karangtirta sebagai desa pesisir digital yang mandiri, sejahtera, dan lestari 
            melalui optimalisasi ekonomi bahari, transparansi informasi maritim, serta pelayanan publik terpadu."
          </p>
        </div>
        <div>
          <h4 className="text-xl font-bold text-[#0F172A] mb-3">Misi Kami</h4>
          <ul className="flex flex-col gap-4 text-slate-600 text-lg">
            <li className="flex items-start gap-3">
              <span className="bg-blue-100 text-blue-600 p-1 rounded-md text-sm mt-1">01</span>
              <span><strong>Optimalisasi Ekonomi Bahari:</strong> Meningkatkan kesejahteraan nelayan melalui modernisasi Tempat Pelelangan Ikan (TPI) dan pengembangan UMKM pengolahan hasil laut.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-100 text-blue-600 p-1 rounded-md text-sm mt-1">02</span>
              <span><strong>Pelestarian Lingkungan:</strong> Melindungi ekosistem pesisir dengan program konservasi hutan mangrove secara berkelanjutan.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-100 text-blue-600 p-1 rounded-md text-sm mt-1">03</span>
              <span><strong>Digitalisasi Pelayanan:</strong> Mewujudkan transparansi informasi maritim dan pelayanan administrasi yang cepat, tepat, dan inklusif.</span>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    key: 'potensi',
    label: 'Potensi Desa',
    header: (
      <>
        Kekayaan <br />
        <span className="text-blue-600">Alam & Bahari</span>
      </>
    ),
    content: (
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <h4 className="font-bold text-[#0F172A] text-xl mb-2">TPI & Hasil Laut</h4>
            <p className="text-slate-600">
              Pusat perputaran ekonomi nelayan. Karangtirta menghasilkan ragam tangkapan laut segar yang menjadi komoditas utama daerah.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <h4 className="font-bold text-[#0F172A] text-xl mb-2">Konservasi Mangrove</h4>
            <p className="text-slate-600">
              Sabuk hijau penjaga pantai. Berfungsi ganda sebagai pelindung abrasi dan destinasi ekowisata yang menenangkan.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow md:col-span-2">
            <h4 className="font-bold text-[#0F172A] text-xl mb-2">Laguna (Estuari)</h4>
            <p className="text-slate-600">
              Kawasan wisata eksotis tempat bertemunya air sungai dan laut, menawarkan panorama alam yang tak tertandingi saat matahari terbenam.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100 text-center">
            <h4 className="font-bold text-blue-900 text-2xl">1.200+</h4>
            <p className="text-sm text-blue-700 font-medium">Nelayan Aktif</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100 text-center">
            <h4 className="font-bold text-blue-900 text-2xl">45 Ha</h4>
            <p className="text-sm text-blue-700 font-medium">Hutan Mangrove</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    key: 'peta',
    label: 'Peta Geografis',
    header: (
      <>
        Letak <br />
        <span className="text-blue-600">Geografis</span>
      </>
    ),
    content: (
      <div className="flex flex-col gap-6">
        <p className="text-slate-600 leading-relaxed text-lg">
          Secara administratif, Karangtirta berbatasan langsung dengan Samudra Hindia di sebelah selatan,
          menjadikannya wilayah yang sangat strategis untuk sektor kemaritiman dan pariwisata.
        </p>
        <div className="rounded-3xl overflow-hidden bg-slate-200 shadow-xl border-4 border-white relative group cursor-crosshair">
          {/* Peta Statis Placeholder (Menggunakan gambar ilustrasi peta atau citra satelit) */}
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop" 
            alt="Peta Desa Karangtirta" 
            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
          
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20">
            <h5 className="font-bold text-[#0F172A] text-sm mb-1">Koordinat Pusat</h5>
            <p className="text-xs text-slate-500 font-mono">7°41'24.0"S 108°39'36.0"E</p>
          </div>
        </div>
      </div>
    ),
  }
];

export function ProfileSection() {
  const [activeKey, setActiveKey] = useState('sejarah');

  const items: TabsProps['items'] = tabData.map((tab) => ({
    key: tab.key,
    label: (
      <span className="text-base md:text-lg font-medium px-2">
        {tab.label}
      </span>
    ),
  }));

  const activeTabData = tabData.find((t) => t.key === activeKey);

  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24">
      {/* Header Utama */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] mb-4">Profil Desa</h2>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg">
          Mengenal lebih dekat perjalanan, cita-cita, dan kekayaan pesisir yang kami miliki.
        </p>
      </div>
      
      {/* Tab Navigasi Ant Design */}
      <div className="mb-16 custom-profile-tabs">
        <Tabs 
          activeKey={activeKey}
          onChange={setActiveKey}
          items={items} 
          centered 
          size="large"
          tabBarStyle={{ borderBottom: '2px solid #e2e8f0', marginBottom: 0 }}
        />
      </div>

      {/* Konten Dinamis (Layout 2 Kolom) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 min-h-[400px]">
        {/* Kolom Kiri: Header Dinamis */}
        <div className="lg:col-span-5">
          <div className="sticky top-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={`header-${activeKey}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F172A] leading-tight">
                  {activeTabData?.header}
                </h3>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Kolom Kanan: Konten Dinamis */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${activeKey}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {activeTabData?.content}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
