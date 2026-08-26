import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { UMKM_DATA } from "@/data/umkm";

export function UmkmSection() {
  return (
    <section id="umkm" className="w-full bg-brand-bg py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Simple Left-Aligned Header without Eyebrow */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 max-w-2xl"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-brand-navy leading-tight">
            Etalase Karya Karangtirta
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Dukung kemandirian ekonomi desa dengan menikmati ragam kuliner bahari dan kerajinan tangan autentik karya warga lokal.
          </p>
        </motion.div>
      </div>

      {/* Horizontal Scroll Track */}
      <div className="w-full pl-4 sm:pl-6 lg:pl-8 2xl:pl-[max(2rem,calc((100vw-80rem)/2))] pb-8">
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pr-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {UMKM_DATA.map((product) => (
            <article 
              key={product.id}
              className="relative flex-none w-[85vw] sm:w-[320px] md:w-[380px] aspect-[4/5] rounded-[2rem] overflow-hidden group snap-center sm:snap-start"
            >
              {/* Product Image */}
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/95 via-brand-navy/40 to-transparent opacity-90 transition-opacity duration-500" />

              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                <div className="transform translate-y-0 sm:translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  {/* Category Badge */}
                  <span className="inline-block bg-white/20 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-4 border border-white/20">
                    {product.category}
                  </span>
                  
                  <h3 className="text-2xl font-bold font-serif text-white mb-2 leading-tight">
                    {product.name}
                  </h3>
                  
                  <p className="text-white/80 text-sm mb-6 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Owner Info & CTA */}
                  <div className="flex items-center justify-between opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <p className="text-brand-sand text-xs font-semibold uppercase tracking-wider">
                      Oleh: {product.owner}
                    </p>
                    
                    <a 
                      href={`https://wa.me/${product.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-brand-sand text-brand-navy flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300"
                      aria-label="Hubungi Penjual"
                    >
                      <MessageCircle className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
          
          {/* See All Card */}
          <div className="relative flex-none w-[60vw] sm:w-[240px] aspect-[4/5] rounded-[2rem] overflow-hidden flex items-center justify-center bg-brand-navy/5 border border-brand-navy/10 group cursor-pointer snap-center sm:snap-start hover:bg-brand-navy/10 transition-colors duration-500">
            <div className="flex flex-col items-center gap-4 text-brand-navy transform group-hover:scale-105 transition-transform duration-500">
              <div className="w-14 h-14 rounded-full bg-brand-navy text-white flex items-center justify-center">
                <ArrowRight className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" />
              </div>
              <span className="font-bold text-sm uppercase tracking-wider">
                Lihat Semua
              </span>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Hint Mobile Only */}
      <div className="w-full text-center mt-4 sm:hidden">
        <p className="text-slate-400 text-xs font-medium uppercase tracking-widest flex items-center justify-center gap-2">
          <ArrowRight className="w-3 h-3" /> Geser untuk melihat
        </p>
      </div>
    </section>
  );
}
