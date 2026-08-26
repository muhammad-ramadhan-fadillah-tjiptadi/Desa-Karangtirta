import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { UMKM_DATA } from "@/data/umkm";

export function UmkmSection() {
  return (
    <section id="umkm" className="w-full bg-brand-bg py-24 lg:py-32 overflow-hidden border-t border-brand-navy/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4 max-w-2xl"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-brand-navy leading-tight">
            Etalase Karya Karangtirta
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
            Dukung kemandirian ekonomi desa dengan menikmati ragam kuliner bahari dan kerajinan tangan autentik karya warga lokal.
          </p>
        </motion.div>
        
        {/* Desktop View All CTA */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:block pb-2"
        >
          <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy group/link hover:text-brand-sand transition-colors duration-300 uppercase tracking-wider">
            Lihat Semua Produk
            <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>

      {/* Horizontal Scroll Track */}
      <div className="w-full pl-4 sm:pl-6 lg:pl-8 2xl:pl-[max(2rem,calc((100vw-80rem)/2))] pb-12">
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex gap-6 sm:gap-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar pr-8 lg:pr-24"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {UMKM_DATA.map((product) => (
            <article 
              key={product.id}
              className="relative flex-none w-[80vw] sm:w-[340px] md:w-[400px] flex flex-col gap-6 group snap-center sm:snap-start"
            >
              {/* Product Image with Hover Action */}
              <div className="w-full aspect-[4/5] rounded-[1.5rem] overflow-hidden relative bg-slate-100">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Glassy Hover Overlay */}
                <div className="absolute inset-0 bg-brand-navy/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                  <a 
                    href={`https://wa.me/${product.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out bg-white/90 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_4px_24px_rgba(0,0,0,0.1)] text-brand-navy px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-brand-sand hover:text-white"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Hubungi Penjual
                  </a>
                </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-3 px-2">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-bold font-serif text-brand-navy leading-tight group-hover:text-brand-sand transition-colors duration-300">
                    {product.name}
                  </h3>
                  <span className="flex-none text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em] pt-1">
                    {product.category}
                  </span>
                </div>
                <p className="text-slate-600 text-base leading-relaxed line-clamp-2">
                  {product.description}
                </p>
                <p className="text-brand-navy/60 text-sm font-medium mt-1">
                  Oleh: <span className="text-brand-navy">{product.owner}</span>
                </p>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
      
      {/* Scroll Hint & CTA Mobile Only */}
      <div className="w-full flex flex-col items-center gap-6 mt-2 sm:hidden px-4">
        <p className="text-slate-400 text-[11px] font-bold uppercase tracking-widest flex items-center gap-2">
          <ArrowRight className="w-3 h-3" /> Geser untuk melihat lainnya
        </p>
        <a href="#" className="w-full text-center py-4 rounded-xl bg-brand-navy/5 text-brand-navy font-bold text-sm uppercase tracking-wider active:bg-brand-navy/10 transition-colors">
          Lihat Semua Produk
        </a>
      </div>
    </section>
  );
}
