import { useState, useEffect, createContext, useContext } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { ShieldCheck, Check, Map as MapIcon, Building2, Cctv, Lightbulb, GraduationCap, TreePine, Cross } from "lucide-react";

type TabId = "sejarah" | "visi-misi" | "potensi" | "peta";

const mapFilters = [
  { id: "batas", label: "Batas Wilayah RW & RT", icon: MapIcon },
  { id: "fasilitas", label: "Fasilitas Umum (Aset Desa)", icon: Building2 },
  { id: "cctv", label: "CCTV Pengawas Publik", icon: Cctv },
  { id: "pju", label: "PJU (Penerangan Jalan)", icon: Lightbulb },
];

const mapMarkers = [
  { id: 1, type: "fasilitas", iconType: "building", x: 45, y: 35, label: "Balai Desa" },
  { id: 2, type: "fasilitas", iconType: "hospital", x: 65, y: 50, label: "Puskesmas" },
  { id: 3, type: "fasilitas", iconType: "mosque", x: 30, y: 70, label: "Masjid Raya" },
  { id: 10, type: "fasilitas", iconType: "school", x: 80, y: 60, label: "SDN 1 Karangtirta" },
  { id: 11, type: "fasilitas", iconType: "park", x: 20, y: 30, label: "Taman Desa" },
  { id: 4, type: "cctv", x: 50, y: 40, label: "CCTV Pertigaan" },
  { id: 5, type: "cctv", x: 75, y: 25, label: "CCTV Gerbang" },
  { id: 6, type: "cctv", x: 35, y: 80, label: "CCTV Pasar" },
  { id: 7, type: "pju", x: 42, y: 48, label: "PJU 01" },
  { id: 8, type: "pju", x: 60, y: 35, label: "PJU 02" },
  { id: 9, type: "pju", x: 25, y: 60, label: "PJU 03" },
];

const rwRegions = [
  { id: "rw01", name: "RW 01", color: "text-blue-700", borderColor: "stroke-blue-500", bgColor: "bg-blue-50", fillColor: "fill-blue-500/20", hoverColor: "hover:fill-blue-500/40", points: "0,55 35,45 45,100 0,100", x: 20, y: 75, populasi: 1250, rumah: 320, luas: "15.2 Ha" },
  { id: "rw02", name: "RW 02", color: "text-purple-700", borderColor: "stroke-purple-500", bgColor: "bg-purple-50", fillColor: "fill-purple-500/20", hoverColor: "hover:fill-purple-500/40", points: "0,0 45,0 35,45 0,55", x: 20, y: 20, populasi: 1420, rumah: 380, luas: "12.8 Ha" },
  { id: "rw03", name: "RW 03", color: "text-pink-700", borderColor: "stroke-pink-500", bgColor: "bg-pink-50", fillColor: "fill-pink-500/20", hoverColor: "hover:fill-pink-500/40", points: "45,0 100,0 100,35 60,35 35,45", x: 70, y: 15, populasi: 980, rumah: 210, luas: "18.5 Ha" },
  { id: "rw04", name: "RW 04", color: "text-orange-700", borderColor: "stroke-orange-500", bgColor: "bg-orange-50", fillColor: "fill-orange-500/20", hoverColor: "hover:fill-orange-500/40", points: "60,35 100,35 100,70 65,55", x: 80, y: 50, populasi: 1100, rumah: 290, luas: "14.1 Ha" },
  { id: "rw05", name: "RW 05", color: "text-emerald-700", borderColor: "stroke-emerald-500", bgColor: "bg-emerald-50", fillColor: "fill-emerald-500/20", hoverColor: "hover:fill-emerald-500/40", points: "45,100 35,45 60,35 65,55 100,70 100,100", x: 75, y: 85, populasi: 1560, rumah: 410, luas: "21.0 Ha" },
];

interface MapContextProps {
  activeLayers: string[];
  toggleLayer: (id: string) => void;
  isSOSActive: boolean;
  triggerSOS: () => void;
}

const MapContext = createContext<MapContextProps>({
  activeLayers: [],
  toggleLayer: () => {},
  isSOSActive: false,
  triggerSOS: () => {},
});

const InteractiveMapRenderer = () => {
  const { activeLayers, isSOSActive } = useContext(MapContext);
  const [hoveredRW, setHoveredRW] = useState<string | null>(null);
  const [hoveredMarker, setHoveredMarker] = useState<number | null>(null);

  return (
    <div 
      className="w-full rounded-[2rem] overflow-hidden bg-brand-navy relative shadow-inner"
      onClick={() => {
        setHoveredRW(null);
        setHoveredMarker(null);
      }}
    >
      <img
        src="/images/peta-interaktif.png"
        alt="Peta Wilayah Interaktif"
        className="w-full h-auto block"
      />
      <div className="absolute inset-0 bg-brand-navy/10"></div>
      
      {activeLayers.includes("batas") && (
        <>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            {rwRegions.map((rw) => (
              <polygon
                key={`poly-${rw.id}`}
                points={rw.points}
                className={cn(rw.borderColor, rw.fillColor, rw.hoverColor, "pointer-events-auto cursor-pointer transition-colors duration-300")}
                strokeWidth="0.3"
                strokeDasharray="1,1"
                onMouseEnter={() => setHoveredRW(rw.id)}
                onMouseLeave={() => setHoveredRW(null)}
                onClick={(e) => {
                  e.stopPropagation();
                  setHoveredRW(hoveredRW === rw.id ? null : rw.id);
                  setHoveredMarker(null);
                }}
              />
            ))}
          </svg>
          
          {/* Label RW */}
          {rwRegions.map((rw) => (
            <div
              key={`label-${rw.id}`}
              className={cn(
                "absolute -translate-x-1/2 -translate-y-1/2 px-1.5 py-0.5 md:px-3 md:py-1 rounded-full font-bold text-[8px] md:text-xs shadow-sm border border-white/50 backdrop-blur-sm tracking-wider pointer-events-none transition-all duration-300 z-10", 
                rw.bgColor, 
                rw.color,
                hoveredRW === rw.id ? "scale-110 shadow-md" : "scale-100"
              )}
              style={{ left: `${rw.x}%`, top: `${rw.y}%` }}
            >
              {rw.name}
            </div>
          ))}

          {/* Tooltip RW */}
          <AnimatePresence>
            {hoveredRW && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                className="absolute z-20 top-5 right-5 bg-brand-navy/95 backdrop-blur-sm text-white p-4 rounded-xl shadow-xl border border-white/10 pointer-events-none w-56"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="font-bold text-sm">{rwRegions.find(r => r.id === hoveredRW)?.name}</span>
                    <MapIcon className="w-4 h-4 text-brand-sand" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-white/70">Luas Wilayah:</span>
                      <span className="font-semibold text-brand-sand">{rwRegions.find(r => r.id === hoveredRW)?.luas}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-white/70">Populasi:</span>
                      <span className="font-semibold text-brand-sand">{rwRegions.find(r => r.id === hoveredRW)?.populasi} Jiwa</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-white/70">Jumlah Rumah:</span>
                      <span className="font-semibold text-brand-sand">{rwRegions.find(r => r.id === hoveredRW)?.rumah}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}

      {mapMarkers.map((marker) => {
        if (!activeLayers.includes(marker.type)) return null;

        const isBlinking = isSOSActive && (marker.type === "cctv" || marker.type === "fasilitas");
        let Icon = Building2;
        let colorClass = "bg-brand-sand text-brand-navy";
        
        if (marker.type === "fasilitas") {
          colorClass = "bg-brand-sand text-brand-navy";
          if (marker.iconType === "hospital") Icon = Cross;
          else if (marker.iconType === "school") Icon = GraduationCap;
          else if (marker.iconType === "park") Icon = TreePine;
        } else if (marker.type === "cctv") {
          Icon = Cctv;
          colorClass = "bg-slate-800 text-white";
        } else if (marker.type === "pju") {
          Icon = Lightbulb;
          colorClass = "bg-amber-400 text-brand-navy";
        }

        return (
          <div 
            key={marker.id} 
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
            onMouseEnter={() => setHoveredMarker(marker.id)}
            onMouseLeave={() => setHoveredMarker(null)}
            onClick={(e) => {
              e.stopPropagation();
              setHoveredMarker(hoveredMarker === marker.id ? null : marker.id);
              setHoveredRW(null);
            }}
          >
             {isBlinking && (
               <span className="absolute -inset-2 rounded-full animate-ping bg-red-500 opacity-75"></span>
             )}
             <div className={cn("relative p-2 rounded-full shadow-lg border-2 border-white transition-transform hover:scale-110 cursor-pointer", isBlinking ? "bg-red-600 text-white" : colorClass)}>
               <Icon className="w-3.5 h-3.5" />
             </div>
             
             {/* Tooltip */}
             <div className={cn(
               "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 bg-brand-navy text-white text-[10px] rounded transition-opacity whitespace-nowrap shadow-xl pointer-events-none",
               hoveredMarker === marker.id ? "opacity-100" : "opacity-0"
             )}>
                {marker.label}
             </div>
          </div>
        );
      })}


    </div>
  );
};

interface SectionContent {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface TabContent {
  id: TabId;
  label: string;
  header: string;
  sections: SectionContent[];
}

const tabData: TabContent[] = [
  {
    id: "sejarah",
    label: "Sejarah Desa",
    header: "Jejak Masa Lalu",
    sections: [
      {
        id: "sejarah-deskripsi",
        title: "Konteks & Latar Belakang",
        content: (
          <p className="text-brand-navy/80 leading-relaxed text-lg sm:text-xl">
            Desa Karangtirta adalah sebuah desa yang asri dan kaya akan potensi
            budaya serta pariwisata. Dikelilingi oleh perbukitan hijau dan
            hamparan sawah, desa ini menjadi tempat yang nyaman bagi masyarakat
            yang mengedepankan gotong royong dan kearifan lokal.
          </p>
        ),
      },
      {
        id: "sejarah-galeri",
        title: "Potret Lampau",
        content: (
          <div className="rounded-3xl overflow-hidden aspect-[4/3] md:aspect-[16/10] bg-brand-sand/10 shadow-sm relative ring-1 ring-brand-navy/5 w-full">
            <img
              src="/images/sejarah-desa.png"
              alt="Sejarah Desa Nelayan Karangtirta"
              className="w-full h-full object-cover"
            />
          </div>
        ),
      },
    ],
  },
  {
    id: "visi-misi",
    label: "Visi & Misi",
    header: "Arah & Tujuan",
    sections: [
      {
        id: "visi-utama",
        title: "Visi Utama",
        content: (
          <div className="flex flex-col gap-4">
            <h4 className="text-xl md:text-2xl font-bold font-serif text-brand-navy">
              Terwujudnya kemandirian bahari.
            </h4>
            <p className="text-brand-navy/80 leading-relaxed text-lg sm:text-xl">
              Mewujudkan Desa Karangtirta yang mandiri, sejahtera, dan berbudaya
              berlandaskan semangat gotong royong masyarakat serta optimalisasi
              potensi maritim.
            </p>
          </div>
        ),
      },
      {
        id: "tiga-misi",
        title: "Misi Desa",
        content: (
          <ul className="flex flex-col gap-8 text-brand-navy/80 text-lg sm:text-xl">
            <li className="flex gap-6 items-start">
              <span className="text-brand-sand font-mono mt-1 text-sm tracking-widest uppercase">
                01
              </span>
              <span>Meningkatkan kualitas infrastruktur desa.</span>
            </li>
            <li className="flex gap-6 items-start">
              <span className="text-brand-sand font-mono mt-1 text-sm tracking-widest uppercase">
                02
              </span>
              <span>
                Memberdayakan ekonomi kerakyatan melalui sentra UMKM dan
                pertanian.
              </span>
            </li>
            <li className="flex gap-6 items-start">
              <span className="text-brand-sand font-mono mt-1 text-sm tracking-widest uppercase">
                03
              </span>
              <span>Melestarikan budaya, kesenian, dan kearifan lokal.</span>
            </li>
          </ul>
        ),
      },
    ],
  },
  {
    id: "potensi",
    label: "Potensi Desa",
    header: "Kekayaan Alam",
    sections: [
      {
        id: "potensi-deskripsi",
        title: "Pertanian & Pariwisata",
        content: (
          <p className="text-brand-navy/80 leading-relaxed text-lg sm:text-xl">
            Desa Karangtirta memiliki keunggulan komparatif di bidang pertanian
            dan pariwisata alam. Lahan agrikultur yang subur dan kontur
            perbukitan memberikan nuansa asri nan memikat, bersanding dengan
            garis pantai yang indah.
          </p>
        ),
      },
      {
        id: "potensi-galeri",
        title: "Pemandangan Udara",
        content: (
          <div className="rounded-3xl overflow-hidden aspect-[4/3] md:aspect-[16/10] bg-brand-sand/10 shadow-sm relative ring-1 ring-brand-navy/5 w-full">
            <img
              src="/images/potensi-desa.png"
              alt="Potensi Pertanian dan Bahari Desa"
              className="w-full h-full object-cover"
            />
          </div>
        ),
      },
    ],
  },
  {
    id: "peta",
    label: "Peta Interaktif",
    header: "Letak Wilayah",
    sections: [
      {
        id: "peta-deskripsi",
        title: "Aksesibilitas",
        content: (
          <p className="text-brand-navy/80 leading-relaxed text-lg sm:text-xl">
            Terletak di titik strategis yang menghubungkan pusat kota dengan
            kawasan wisata pegunungan. Akses transportasi yang memadai
            menjadikan desa ini pusat lintasan yang dinamis bagi para wisatawan
            maritim.
          </p>
        ),
      },
      {
        id: "peta-visual",
        title: "Peta Interaktif",
        content: (
          <InteractiveMapRenderer />
        ),
      },
    ],
  },
];

const ScrollSpyContent = ({
  sections,
  onActiveChange,
}: {
  sections: SectionContent[];
  onActiveChange: (id: string) => void;
}) => {
  useEffect(() => {
    const sectionElements = document.querySelectorAll(".scroll-spy-section");
    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onActiveChange(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -40% 0px",
        threshold: 0,
      },
    );

    sectionElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections, onActiveChange]);

  return (
    <div className="flex flex-col gap-24">
      {sections.map((section) => (
        <div
          key={section.id}
          id={section.id}
          className="scroll-spy-section flex flex-col gap-6 scroll-mt-32"
        >
          <h3 className="lg:hidden text-2xl font-bold font-serif text-brand-navy">
            {section.title}
          </h3>
          {section.content}
        </div>
      ))}
    </div>
  );
};

export function ProfileSection() {
  const [activeTab, setActiveTab] = useState<TabId>("sejarah");
  const [activeSectionId, setActiveSectionId] = useState<string>("");
  
  // Map Interactive States
  const [activeLayers, setActiveLayers] = useState<string[]>(["batas", "fasilitas", "cctv", "pju"]);
  const [isSOSActive, setIsSOSActive] = useState(false);

  const toggleLayer = (id: string) => {
    setActiveLayers(prev => 
      prev.includes(id) ? prev.filter(layer => layer !== id) : [...prev, id]
    );
  };

  const triggerSOS = () => {
    setIsSOSActive(true);
    setTimeout(() => setIsSOSActive(false), 5000);
  };

  const activeContent = tabData.find((t) => t.id === activeTab)!;

  const handleTabClick = (id: TabId) => {
    setActiveTab(id);
    const newTab = tabData.find((t) => t.id === id);
    if (newTab && newTab.sections.length > 0) {
      setActiveSectionId(newTab.sections[0].id);
    }
  };

  // Active section set by ScrollSpyContent

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      // Offset for sticky header if any, plus padding
      const yOffset = -150;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <MapContext.Provider value={{ activeLayers, toggleLayer, isSOSActive, triggerSOS }}>
    <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-24 lg:py-32">
      {/* Top Navigation Tabs */}
      <div className="flex overflow-x-auto hide-scrollbar mb-8 md:mb-12 pb-4">
        <div className="flex space-x-8 md:space-x-12 border-b border-brand-sand/30 w-full">
          {tabData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={cn(
                "pb-4 text-sm md:text-base font-semibold tracking-wide whitespace-nowrap transition-colors relative",
                activeTab === tab.id
                  ? "text-brand-navy"
                  : "text-brand-navy/50 hover:text-brand-navy/80",
              )}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTabProfile"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-sand"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* The Big Card Wrapper */}
      <div className="bg-white rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-sm ring-1 ring-brand-navy/5 min-h-[70vh]">
        {/* ScrollSpy Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start relative">
          {/* Left Sidebar (Sticky Table of Contents & Header) */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 hidden lg:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab + "-sidebar"}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-12"
              >
                {/* Dynamic Big Header */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-brand-navy tracking-tighter leading-[1.05]">
                  {activeContent.header}
                </h2>

                {/* TOC List */}
                <div className="flex flex-col gap-6">
                  <div className="text-xs font-semibold uppercase tracking-widest text-brand-sand mb-2">
                    Daftar Isi
                  </div>
                  {activeContent.sections.map((section) => {
                    const isActive = activeSectionId === section.id;
                    return (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={cn(
                          "group text-left text-sm font-medium transition-all duration-300 relative pl-5",
                          isActive
                            ? "text-brand-navy"
                            : "text-brand-navy/50 hover:text-brand-navy/80",
                        )}
                      >
                        <div
                          className={cn(
                            "absolute left-0 top-1/2 -translate-y-1/2 rounded-full transition-all duration-300",
                            isActive
                              ? "w-2 h-2 bg-brand-sand"
                              : "w-1.5 h-1.5 bg-brand-sand/30 group-hover:bg-brand-sand",
                          )}
                        />
                        {section.title}
                      </button>
                    );
                  })}
                </div>

                {/* Tambahan Sidebar Khusus Peta Interaktif */}
                {activeTab === "peta" && (
                  <div className="flex flex-col gap-8 pt-8 border-t border-brand-sand/30">
                    <div className="bg-brand-sand/10 border border-brand-sand/30 rounded-2xl p-5 flex flex-col gap-5">
                      <div className="flex gap-4 items-start">
                        <div className="bg-brand-navy text-brand-sand p-2.5 rounded-full shrink-0">
                          <ShieldCheck className="w-6 h-6" />
                        </div>
                        <div className="flex flex-col gap-1">
                          <h4 className="font-bold text-brand-navy text-base leading-tight">Sistem Keamanan Aman</h4>
                          <p className="text-brand-navy/70 text-xs leading-relaxed mt-1">
                            Seluruh titik pemukiman dan batas RW Karangtirta dalam kondisi tertib dan aman.
                          </p>
                        </div>
                      </div>
                      <button onClick={triggerSOS} className="w-full bg-brand-navy hover:bg-brand-navy/90 text-white font-semibold text-sm py-3 rounded-xl transition-colors shadow-sm">
                        Simulasikan Alarm SOS Warga
                      </button>
                    </div>

                    <div className="flex flex-col gap-3">
                      <span className="text-[10px] font-bold text-brand-navy/60 uppercase tracking-widest px-1">
                        Filter Tampilan Layer Peta
                      </span>
                      <div className="flex flex-col gap-2">
                        {mapFilters.map((filter) => {
                          const isActive = activeLayers.includes(filter.id);
                          return (
                            <div 
                              key={filter.id}
                              onClick={() => toggleLayer(filter.id)}
                              className={cn(
                                "flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer transition-all shadow-sm",
                                isActive 
                                  ? "bg-brand-navy text-white hover:bg-brand-navy/90" 
                                  : "bg-slate-100 text-brand-navy/60 hover:bg-slate-200"
                              )}
                            >
                              <div className="flex items-center gap-2">
                                <filter.icon className="w-4 h-4" />
                                <span className="text-xs font-medium tracking-wide">{filter.label}</span>
                              </div>
                              {isActive && <Check className="w-4 h-4 text-brand-sand" />}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Content Area (Scrolling) */}
          <div className="lg:col-span-8 flex flex-col gap-24 pb-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab + "-content"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.05,
                }}
              >
                <ScrollSpyContent
                  sections={activeContent.sections}
                  onActiveChange={setActiveSectionId}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
    </MapContext.Provider>
  );
}
