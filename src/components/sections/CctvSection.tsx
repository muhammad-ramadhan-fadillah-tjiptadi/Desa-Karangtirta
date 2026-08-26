import { motion } from "framer-motion";
import { VideoOff, MapPin, Clock, ShieldAlert } from "lucide-react";
import { useState, useEffect } from "react";

const CCTV_LOCATIONS = [
  { id: "cam-1", name: "Pantai Karangtirta", status: "offline", lastActive: "2 Jam yang lalu" },
  { id: "cam-2", name: "Balai Desa", status: "offline", lastActive: "5 Jam yang lalu" },
  { id: "cam-3", name: "TPI (Tempat Pelelangan Ikan)", status: "offline", lastActive: "1 Hari yang lalu" },
  { id: "cam-4", name: "Pasar Tradisional", status: "offline", lastActive: "1 Hari yang lalu" },
];

export function CctvSection() {
  const [time, setTime] = useState(new Date());
  const [activeCam, setActiveCam] = useState(CCTV_LOCATIONS[0]);

  // Update clock every second
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="cctv" className="w-full bg-brand-bg py-24 lg:py-32 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#d4af37 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-sand/10 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 2-Column Header (Light Mode matching UMKM/Statistik) */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-12 mb-12 lg:mb-16 border-b border-brand-navy/10 pb-8 lg:pb-12">
          <div className="flex flex-col items-start text-left lg:max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="text-brand-sand font-semibold tracking-widest uppercase text-sm">
                Pantauan Keamanan
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold font-serif text-brand-navy leading-tight"
            >
              Pantauan CCTV Publik
            </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 max-w-lg text-sm md:text-base leading-relaxed text-left"
          >
            Sistem pemantauan keamanan terpadu di beberapa titik strategis Desa Karangtirta. Memastikan kenyamanan warga dan wisatawan secara real-time.
          </motion.p>
        </div>

        {/* Dashboard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Main Featured Camera */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3 bg-slate-900 rounded-3xl overflow-hidden ring-1 ring-white/10 flex flex-col"
          >
            {/* Camera Top Bar */}
            <div className="bg-slate-950 px-6 py-4 flex items-center justify-between border-b border-white/5">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-brand-sand">
                  <MapPin className="w-4 h-4" />
                  <span className="font-bold text-sm tracking-wide">{activeCam.name}</span>
                </div>
                <div className="hidden sm:flex items-center gap-2 px-2 py-0.5 bg-red-500/10 text-red-400 rounded text-[10px] font-bold tracking-widest uppercase border border-red-500/20">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                  System Offline
                </div>
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-sm font-mono bg-slate-900 px-3 py-1 rounded-md">
                <Clock className="w-4 h-4" />
                {time.toLocaleTimeString('id-ID')} WIB
              </div>
            </div>

            {/* Camera Viewport (Placeholder) */}
            <div className="relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden">
              {/* Scanline overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none z-10"></div>
              
              <div className="flex flex-col items-center gap-4 text-slate-500 z-20">
                <VideoOff className="w-16 h-16 opacity-50" />
                <div className="flex flex-col items-center gap-1 text-center px-4">
                  <h3 className="text-xl font-bold text-slate-300">Kamera Tidak Terhubung</h3>
                  <p className="text-sm">Signal Loss • Last active: {activeCam.lastActive}</p>
                </div>
                <button className="mt-4 px-6 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 rounded-full text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4" /> Hubungi Teknisi
                </button>
              </div>

              {/* Static UI Elements on video */}
              <div className="absolute bottom-6 left-6 z-20 flex flex-col gap-1 text-xs font-mono text-white/40 drop-shadow-md">
                <span>REC // 00:00:00</span>
                <span>CAM_{activeCam.id.replace('cam-', '0')}</span>
              </div>
            </div>
          </motion.div>

          {/* Sidebar Thumbnail List */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-1 flex flex-col gap-4"
          >
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 px-2">Lokasi Kamera Lainnya</h3>
            {CCTV_LOCATIONS.map((cam) => (
              <button
                key={cam.id}
                onClick={() => setActiveCam(cam)}
                className={`w-full text-left flex gap-4 p-3 rounded-2xl transition-all duration-300 border ${
                  activeCam.id === cam.id 
                    ? 'bg-brand-sand/10 border-brand-sand/30' 
                    : 'bg-slate-900 border-white/5 hover:bg-slate-800'
                }`}
              >
                {/* Thumb placeholder */}
                <div className="flex-none w-20 aspect-video bg-black rounded-lg flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_4px]"></div>
                  <VideoOff className="w-5 h-5 text-slate-600" />
                </div>
                
                {/* Info */}
                <div className="flex flex-col justify-center gap-1 overflow-hidden">
                  <h4 className={`text-sm font-bold truncate ${activeCam.id === cam.id ? 'text-brand-sand' : 'text-slate-300'}`}>
                    {cam.name}
                  </h4>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-red-500/50 rounded-full"></div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{cam.status}</span>
                  </div>
                </div>
              </button>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
