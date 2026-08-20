import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

type TabId = "sejarah" | "visi-misi" | "potensi" | "peta";

interface TabContent {
  id: TabId;
  label: string;
  header: string;
  content: React.ReactNode;
}

const tabData: TabContent[] = [
  {
    id: "sejarah",
    label: "Sejarah Desa",
    header: "Jejak Masa Lalu",
    content: (
      <div className="flex flex-col gap-8">
        <p className="text-slate-900 leading-relaxed text-lg sm:text-xl">
          Desa Karangtirta adalah sebuah desa yang asri dan kaya akan potensi
          budaya serta pariwisata. Dikelilingi oleh perbukitan hijau dan
          hamparan sawah, desa ini menjadi tempat yang nyaman bagi masyarakat
          yang mengedepankan gotong royong dan kearifan lokal.
        </p>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col gap-2">
            <span className="text-4xl md:text-5xl font-bold font-serif text-[#0F172A] tracking-tight">
              2.5k+
            </span>
            <span className="text-xs md:text-sm font-medium text-slate-500 uppercase tracking-widest">
              Penduduk
            </span>
          </div>
          <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col gap-2">
            <span className="text-4xl md:text-5xl font-bold font-serif text-[#0F172A] tracking-tight">
              150<span className="text-2xl text-slate-400">ha</span>
            </span>
            <span className="text-xs md:text-sm font-medium text-slate-500 uppercase tracking-widest">
              Luas Wilayah
            </span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "visi-misi",
    label: "Visi & Misi",
    header: "Arah & Tujuan",
    content: (
      <div className="flex flex-col gap-10">
        <div>
          <h4 className="text-xl md:text-2xl font-bold font-serif text-[#0F172A] mb-4">
            Visi
          </h4>
          <p className="text-slate-900 leading-relaxed text-lg sm:text-xl">
            Terwujudnya Desa Karangtirta yang mandiri, sejahtera, dan berbudaya
            berlandaskan semangat gotong royong masyarakat.
          </p>
        </div>
        <div className="w-full h-px bg-slate-200"></div>
        <div>
          <h4 className="text-xl md:text-2xl font-bold font-serif text-[#0F172A] mb-6">
            Misi
          </h4>
          <ul className="flex flex-col gap-5 text-slate-900 text-lg sm:text-xl">
            <li className="flex gap-4 items-start">
              <span className="text-slate-400 font-mono mt-1 text-base">
                01
              </span>
              <span>Meningkatkan kualitas infrastruktur desa.</span>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-slate-400 font-mono mt-1 text-base">
                02
              </span>
              <span>
                Memberdayakan ekonomi kerakyatan melalui sentra UMKM dan
                pertanian.
              </span>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-slate-400 font-mono mt-1 text-base">
                03
              </span>
              <span>Melestarikan budaya, kesenian, dan kearifan lokal.</span>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "potensi",
    label: "Potensi Desa",
    header: "Kekayaan Alam",
    content: (
      <div className="flex flex-col gap-8">
        <p className="text-slate-900 leading-relaxed text-lg sm:text-xl">
          Desa Karangtirta memiliki keunggulan komparatif di bidang pertanian
          dan pariwisata alam. Lahan agrikultur yang subur dan kontur perbukitan
          memberikan nuansa asri nan memikat.
        </p>
        <div className="rounded-3xl overflow-hidden aspect-[16/10] bg-slate-200 shadow-xl relative ring-1 ring-slate-900/5">
          <img
            src="https://images.unsplash.com/photo-1590059556277-2f7415170d10?q=80&w=1000&auto=format&fit=crop"
            alt="Potensi Pertanian Desa"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    ),
  },
  {
    id: "peta",
    label: "Peta Interaktif",
    header: "Letak Wilayah",
    content: (
      <div className="flex flex-col gap-8">
        <p className="text-slate-900 leading-relaxed text-lg sm:text-xl">
          Terletak di titik strategis yang menghubungkan pusat kota dengan
          kawasan wisata pegunungan. Akses transportasi yang memadai menjadikan
          desa ini pusat lintasan yang dinamis.
        </p>
        <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-slate-100 shadow-xl relative ring-1 ring-slate-900/5 p-2 md:p-3">
          <div className="w-full h-full rounded-2xl overflow-hidden bg-[#0F172A] relative">
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop"
              alt="Peta Desa"
              className="w-full h-full object-cover opacity-60 mix-blend-luminosity grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 to-transparent mix-blend-overlay"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-5 py-3 rounded-full font-semibold text-sm shadow-2xl text-[#0F172A] flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0EA5E9] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#06B6D4]"></span>
              </span>
              Desa Karangtirta
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export function ProfileSection() {
  const [activeTab, setActiveTab] = useState<TabId>("sejarah");

  const activeContent = tabData.find((t) => t.id === activeTab)!;

  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 lg:py-32">
      {/* Top Navigation Tabs */}
      <div className="flex overflow-x-auto hide-scrollbar mb-16 md:mb-24 pb-4">
        <div className="flex space-x-8 md:space-x-12 border-b border-slate-200 w-full">
          {tabData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "pb-4 text-sm md:text-base font-semibold tracking-wide whitespace-nowrap transition-colors relative",
                activeTab === tab.id
                  ? "text-[#0F172A]"
                  : "text-slate-400 hover:text-slate-600",
              )}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTabProfile"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0F172A]"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        {/* Left Column - Dynamic Big Header */}
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-serif text-[#0F172A] tracking-tighter leading-[1.05]">
                {activeContent.header}
              </h2>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Column - Tab Content */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.05,
              }}
            >
              {activeContent.content}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
