import { motion } from "framer-motion";
import { Carousel } from "antd";
import { UMKM_DATA } from "@/data/umkm";

export function UmkmSection() {
  return (
    <section id="umkm" className="w-full bg-brand-bg py-24 lg:py-32 overflow-hidden border-t border-brand-navy/5">
      {/* 2-Column Header matching StatistikSection */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 lg:mb-16 border-b border-brand-navy/10 pb-8 lg:pb-12">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-12">
          <div className="flex flex-col items-start text-left lg:max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="text-brand-sand font-semibold tracking-widest uppercase text-sm">
                Produk Lokal
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold font-serif text-brand-navy leading-tight"
            >
              Etalase Karya Karangtirta
            </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 max-w-lg text-sm md:text-base leading-relaxed text-left"
          >
            Dukung kemandirian ekonomi desa dengan menikmati ragam kuliner bahari dan kerajinan tangan autentik karya warga lokal.
          </motion.p>
        </div>
      </div>

      {/* Desktop & Tablet Grid Layout */}
      <div className="hidden sm:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-6 xl:gap-8 justify-items-center">
          {UMKM_DATA.map((product, i) => (
            <UmkmCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>

      {/* Mobile Carousel Layout */}
      <div className="block sm:hidden w-full max-w-[320px] mx-auto px-4 pb-8 relative">
        <Carousel autoplay autoplaySpeed={3000} effect="fade">
          {UMKM_DATA.map((product, i) => (
            <div key={product.id} className="pb-4">
              <UmkmCard product={product} index={i} />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

function UmkmCard({ product, index }: { product: typeof UMKM_DATA[0], index: number }) {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex flex-col gap-5 group cursor-pointer w-full"
    >
      {/* Product Image with Hover Scale Only */}
      <div className="w-full aspect-[3/4] rounded-[1.5rem] overflow-hidden relative bg-slate-100">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-2">
        <div className="flex flex-col items-start gap-1">
          <span className="text-[10px] font-bold text-brand-sand uppercase tracking-[0.15em]">
            {product.category}
          </span>
          <h3 className="text-xl font-bold font-serif text-brand-navy leading-tight group-hover:text-brand-sand transition-colors duration-300">
            {product.name}
          </h3>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed line-clamp-2 mt-1">
          {product.description}
        </p>
        <p className="text-brand-navy/60 text-xs font-medium mt-2">
          Oleh: <span className="text-brand-navy">{product.owner}</span>
        </p>
      </div>
    </motion.article>
  );
}
