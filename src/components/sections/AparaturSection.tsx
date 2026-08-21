import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const APARATUR_DATA = [
  {
    id: 1,
    name: "H. Suryaman, S.E.",
    role: "Kepala Desa",
    image: "https://i.pravatar.cc/600?img=11",
    schedule: "Senin - Jumat (08:00 - 14:00)",
    level: 1, // Kades
  },
  {
    id: 2,
    name: "Ahmad Fauzi",
    role: "Sekretaris Desa",
    image: "https://i.pravatar.cc/600?img=12",
    schedule: "Senin - Jumat (08:00 - 15:00)",
    level: 2, // Sekdes
  },
  {
    id: 3,
    name: "Siti Nurhaliza",
    role: "Kaur Keuangan",
    image: "https://i.pravatar.cc/600?img=5",
    schedule: "Selasa & Kamis (09:00 - 14:00)",
    level: 3, // Kaur/Kasi
  },
  {
    id: 4,
    name: "Budi Santoso",
    role: "Kasi Kemaritiman",
    image: "https://i.pravatar.cc/600?img=15",
    schedule: "Senin, Rabu, Jumat (08:00 - 12:00)",
    level: 3, 
  },
  {
    id: 5,
    name: "Dedi Supriadi",
    role: "Kepala Dusun Pesisir",
    image: "https://i.pravatar.cc/600?img=33",
    schedule: "Setiap Hari (16:00 - 18:00)",
    level: 3,
  }
];

export function AparaturSection() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="h-px w-12 bg-brand-sand/50"></div>
          <span className="text-brand-sand font-semibold tracking-widest uppercase text-sm">
            Struktur Pemerintahan
          </span>
          <div className="h-px w-12 bg-brand-sand/50"></div>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-black text-white mb-6"
        >
          Aparatur Desa
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/70 max-w-2xl text-sm md:text-base leading-relaxed"
        >
          Komitmen penuh dari jajaran aparatur Desa Karangtirta dalam memberikan pelayanan publik yang transparan, profesional, dan berorientasi pada kesejahteraan masyarakat pesisir.
        </motion.p>
      </div>

      {/* Hierarchy Grid */}
      <div className="flex flex-col items-center gap-8 md:gap-12">
        {/* Level 1: Kepala Desa */}
        <div className="w-full flex justify-center">
          {APARATUR_DATA.filter(a => a.level === 1).map((pejabat, index) => (
            <AparaturCard key={pejabat.id} data={pejabat} index={index} size="large" />
          ))}
        </div>

        {/* Level 2: Sekretaris Desa */}
        <div className="w-full flex justify-center">
          {APARATUR_DATA.filter(a => a.level === 2).map((pejabat, index) => (
            <AparaturCard key={pejabat.id} data={pejabat} index={index + 1} size="medium" />
          ))}
        </div>

        {/* Level 3: Kaur, Kasi, Kadus */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
          {APARATUR_DATA.filter(a => a.level === 3).map((pejabat, index) => (
            <AparaturCard key={pejabat.id} data={pejabat} index={index + 2} size="medium" className="w-full max-w-sm" />
          ))}
        </div>
      </div>
    </div>
  );
}

function AparaturCard({ 
  data, 
  index, 
  size = "medium",
  className 
}: { 
  data: typeof APARATUR_DATA[0], 
  index: number,
  size?: "large" | "medium",
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative rounded-[2rem] overflow-hidden bg-brand-navy shadow-2xl shadow-black/20 cursor-pointer w-full max-w-sm",
        size === "large" ? "aspect-[3/4] md:max-w-md lg:max-w-lg" : "aspect-[4/5] md:aspect-square",
        className
      )}
    >
      {/* Photo */}
      <img 
        src={data.image} 
        alt={data.name} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Content Overlay (Name & Role inside photo) */}
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <h3 className={cn(
          "font-bold text-white leading-tight mb-1",
          size === "large" ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
        )}>
          {data.name}
        </h3>
        
        <p className={cn(
          "font-medium text-brand-sand tracking-wide uppercase",
          size === "large" ? "text-sm" : "text-xs"
        )}>
          {data.role}
        </p>

        {/* Schedule (Reveals on Hover) */}
        <div className="overflow-hidden mt-4">
          <div className="flex items-center gap-2 text-white/80 opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
            <Clock className="w-4 h-4 text-brand-sand" />
            <span className="text-xs md:text-sm font-medium">{data.schedule}</span>
          </div>
        </div>
      </div>
      
      {/* Subtle border ring */}
      <div className="absolute inset-0 border border-white/10 rounded-[2rem] pointer-events-none transition-colors duration-500 group-hover:border-brand-sand/50"></div>
    </motion.div>
  );
}
