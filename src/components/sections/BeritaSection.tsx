import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, X } from "lucide-react";
import { BERITA_DATA, type Berita } from "@/data/berita";
import { Modal } from "antd";

export function BeritaSection() {
  const [selectedBerita, setSelectedBerita] = useState<Berita | null>(null);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-12 mb-12 lg:mb-16 border-b border-brand-navy/10 pb-8 lg:pb-12">
        <div className="flex flex-col items-start text-left lg:max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-px w-12 bg-brand-sand"></div>
            <span className="text-brand-sand font-semibold tracking-widest uppercase text-sm">
              Portal Berita
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-serif text-brand-navy leading-tight"
          >
            Kabar & Pengumuman Terbaru Desa
          </motion.h2>
        </div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-600 max-w-lg text-sm md:text-base leading-relaxed text-left"
        >
          Ikuti terus perkembangan terkini, program kerja, dan ragam kegiatan masyarakat pesisir di lingkungan Desa Karangtirta secara transparan dan aktual.
        </motion.p>
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BERITA_DATA.map((berita, index) => (
          <motion.article 
            key={berita.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm ring-1 ring-slate-900/5 hover:shadow-xl transition-all duration-300"
          >
            {/* Thumbnail */}
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img 
                src={berita.image} 
                alt={berita.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute top-4 left-4 z-20">
                <span className="bg-brand-navy text-white text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                  {berita.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 flex flex-col flex-grow">
              <div className="flex items-center gap-2 text-slate-400 mb-4">
                <Calendar className="w-4 h-4 text-brand-sand" />
                <span className="text-xs font-semibold uppercase tracking-wider">{berita.date}</span>
              </div>
              
              <h3 className="text-xl font-bold font-serif text-brand-navy mb-3 line-clamp-2 group-hover:text-brand-sand transition-colors duration-300">
                {berita.title}
              </h3>
              
              <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                {berita.excerpt}
              </p>
              
              <div className="mt-auto pt-4 border-t border-slate-100">
                <button 
                  onClick={() => setSelectedBerita(berita)}
                  className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy group/link hover:text-brand-sand transition-colors duration-300"
                >
                  Baca Selengkapnya
                  <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Detail Modal */}
      <Modal
        title={null}
        open={!!selectedBerita}
        onCancel={() => setSelectedBerita(null)}
        footer={null}
        width={840}
        centered
        closable={false}
        styles={{
          body: { padding: 0, borderRadius: '1.5rem', overflow: 'hidden' },
          mask: { backdropFilter: 'blur(8px)', backgroundColor: 'rgba(15, 23, 42, 0.4)' }
        }}
      >
        {selectedBerita && (
          <div className="flex flex-col relative">
            {/* Custom Premium Close Button */}
            <button 
              onClick={() => setSelectedBerita(null)}
              className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md border border-white/30 shadow-[0_4px_12px_rgba(0,0,0,0.1)] text-white transition-all duration-300 group"
              aria-label="Tutup"
            >
              <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Modal Image */}
            <div className="w-full h-72 sm:h-96 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-black/30 z-10" />
              <img 
                src={selectedBerita.image} 
                alt={selectedBerita.title}
                className="w-full h-full object-cover transform scale-105"
              />
              
              <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 z-20 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="bg-brand-sand text-brand-navy text-[10px] sm:text-xs font-extrabold px-3 py-1.5 rounded-full uppercase tracking-[0.15em] shadow-sm">
                    {selectedBerita.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-white/90 text-sm font-medium">
                    <Calendar className="w-4 h-4" />
                    <span>{selectedBerita.date}</span>
                  </div>
                </div>
                <h2 className="text-2xl sm:text-4xl font-bold font-serif text-white leading-tight max-w-2xl text-balance drop-shadow-md">
                  {selectedBerita.title}
                </h2>
              </div>
            </div>
            
            {/* Modal Content */}
            <div className="p-6 sm:p-8 md:p-12 bg-white">
              <div className="prose prose-slate prose-lg max-w-none">
                <div className="text-slate-600 leading-loose text-base sm:text-lg font-medium">
                  {selectedBerita.content.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-6 last:mb-0">{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
