import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

type TabId = "sejarah" | "visi-misi" | "potensi" | "peta";

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
          <p className="text-slate-600 leading-relaxed text-lg sm:text-xl">
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
          <div className="rounded-3xl overflow-hidden aspect-[4/3] md:aspect-[16/10] bg-slate-100 shadow-sm relative ring-1 ring-slate-900/5 w-full">
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
            <h4 className="text-xl md:text-2xl font-bold font-serif text-[#0F172A]">
              Terwujudnya kemandirian bahari.
            </h4>
            <p className="text-slate-600 leading-relaxed text-lg sm:text-xl">
              Mewujudkan Desa Karangtirta yang mandiri, sejahtera, dan berbudaya
              berlandaskan semangat gotong royong masyarakat serta optimalisasi potensi maritim.
            </p>
          </div>
        ),
      },
      {
        id: "tiga-misi",
        title: "Misi Desa",
        content: (
          <ul className="flex flex-col gap-8 text-slate-600 text-lg sm:text-xl">
            <li className="flex gap-6 items-start">
              <span className="text-slate-400 font-mono mt-1 text-sm tracking-widest uppercase">
                01
              </span>
              <span>Meningkatkan kualitas infrastruktur desa.</span>
            </li>
            <li className="flex gap-6 items-start">
              <span className="text-slate-400 font-mono mt-1 text-sm tracking-widest uppercase">
                02
              </span>
              <span>
                Memberdayakan ekonomi kerakyatan melalui sentra UMKM dan
                pertanian.
              </span>
            </li>
            <li className="flex gap-6 items-start">
              <span className="text-slate-400 font-mono mt-1 text-sm tracking-widest uppercase">
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
          <p className="text-slate-600 leading-relaxed text-lg sm:text-xl">
            Desa Karangtirta memiliki keunggulan komparatif di bidang pertanian
            dan pariwisata alam. Lahan agrikultur yang subur dan kontur perbukitan
            memberikan nuansa asri nan memikat, bersanding dengan garis pantai yang indah.
          </p>
        ),
      },
      {
        id: "potensi-galeri",
        title: "Pemandangan Udara",
        content: (
          <div className="rounded-3xl overflow-hidden aspect-[4/3] md:aspect-[16/10] bg-slate-100 shadow-sm relative ring-1 ring-slate-900/5 w-full">
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
          <p className="text-slate-600 leading-relaxed text-lg sm:text-xl">
            Terletak di titik strategis yang menghubungkan pusat kota dengan
            kawasan wisata pegunungan. Akses transportasi yang memadai menjadikan
            desa ini pusat lintasan yang dinamis bagi para wisatawan maritim.
          </p>
        ),
      },
      {
        id: "peta-visual",
        title: "Peta Interaktif",
        content: (
          <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-slate-100 shadow-sm relative ring-1 ring-slate-900/5 p-2 md:p-3 w-full">
            <div className="w-full h-full rounded-2xl overflow-hidden bg-[#0F172A] relative">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop"
                alt="Peta Desa"
                className="w-full h-full object-cover opacity-60 mix-blend-luminosity grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 to-transparent mix-blend-overlay"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-5 py-3 rounded-full font-semibold text-sm shadow-2xl text-[#0F172A] flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-slate-800"></span>
                </span>
                Desa Karangtirta
              </div>
            </div>
          </div>
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
      }
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
          <h3 className="lg:hidden text-2xl font-bold font-serif text-[#0F172A]">
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
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 lg:py-32">
      {/* Top Navigation Tabs */}
      <div className="flex overflow-x-auto hide-scrollbar mb-8 md:mb-12 pb-4">
        <div className="flex space-x-8 md:space-x-12 border-b border-slate-200 w-full">
          {tabData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
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

      {/* The Big Card Wrapper */}
      <div className="bg-white rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-sm ring-1 ring-slate-900/5 min-h-[70vh]">
        
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
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-[#0F172A] tracking-tighter leading-[1.05]">
                  {activeContent.header}
                </h2>

                {/* TOC List */}
                <div className="flex flex-col gap-6">
                  <div className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">
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
                        isActive ? "text-[#0F172A]" : "text-slate-400 hover:text-slate-600"
                      )}
                    >
                      <div
                        className={cn(
                          "absolute left-0 top-1/2 -translate-y-1/2 rounded-full transition-all duration-300",
                          isActive ? "w-2 h-2 bg-[#0F172A]" : "w-1.5 h-1.5 bg-slate-200 group-hover:bg-slate-400"
                        )}
                      />
                      {section.title}
                    </button>
                  );
                })}
                </div>
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
  );
}
