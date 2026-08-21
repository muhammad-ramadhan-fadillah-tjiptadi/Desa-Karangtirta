import { motion } from "framer-motion";

const APARATUR_DATA = [
  {
    id: 1,
    name: "H. Suryaman, S.E.",
    role: "Kepala Desa",
    image: "/images/aparatur-1.png",
  },
  {
    id: 2,
    name: "Siti Nurhaliza, S.AP.",
    role: "Sekretaris Desa",
    image: "/images/aparatur-2.png",
  },
  {
    id: 3,
    name: "Budi Santoso, S.E.",
    role: "Kaur Keuangan & Pembangunan",
    image: "/images/aparatur-3.png",
  },
  {
    id: 4,
    name: "Drs. Dedi Supriadi",
    role: "Kepala Dusun Pesisir",
    image: "/images/aparatur-4.png",
  }
];

export function AparaturSection() {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-12 lg:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="h-px w-12 bg-brand-sand"></div>
          <span className="text-brand-sand font-semibold tracking-widest uppercase text-sm">
            Struktur Pemerintahan
          </span>
          <div className="h-px w-12 bg-brand-sand"></div>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-black text-brand-navy mb-6"
        >
          Aparatur Desa
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-600 max-w-2xl text-sm md:text-base leading-relaxed"
        >
          Komitmen penuh dari jajaran aparatur Desa Karangtirta dalam memberikan pelayanan publik yang transparan, profesional, dan berorientasi pada kesejahteraan masyarakat pesisir.
        </motion.p>
      </div>

      {/* Grid 4 Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {APARATUR_DATA.map((pejabat, index) => (
          <AparaturCard key={pejabat.id} data={pejabat} index={index} />
        ))}
      </div>
    </div>
  );
}

function AparaturCard({ 
  data, 
  index 
}: { 
  data: typeof APARATUR_DATA[0], 
  index: number 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-2xl overflow-hidden bg-brand-navy shadow-lg aspect-[3/4] w-full"
    >
      {/* Photo */}
      <img 
        src={data.image} 
        alt={data.name} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      
      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/95 via-brand-navy/30 to-transparent opacity-90 transition-opacity duration-500"></div>

      {/* Content Overlay */}
      <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col justify-end">
        {/* Role Pill */}
        <div className="mb-3">
          <span className="inline-block px-3 py-1.5 rounded-full bg-brand-navy border border-brand-sand/30 text-brand-sand text-[10px] md:text-xs font-bold tracking-wider uppercase shadow-sm">
            {data.role}
          </span>
        </div>
        
        {/* Name */}
        <h3 className="font-bold text-white text-lg md:text-xl leading-snug">
          {data.name}
        </h3>
      </div>
    </motion.div>
  );
}
