import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Drawer } from 'antd';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavItem {
  label: string;
  path: string;
}

const NAV_LINKS: NavItem[] = [
  { label: 'Beranda', path: '/' },
  { label: 'Profil', path: '/profil' },
  { label: 'Wisata Budaya', path: '/wisata' },
  { label: 'Aparatur', path: '/aparatur' },
  { label: 'Statistik', path: '/statistik' },
  { label: 'Berita', path: '/berita' },
  { label: 'UMKM', path: '/umkm' },
  { label: 'CCTV', path: '/cctv' },
];

export function Navbar() {
  const [isDrawerVisible, setIsDrawerVisible] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDrawer = () => setIsDrawerVisible((prev) => !prev);

  return (
    <>
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 w-full z-50"
      >
        <nav
          className={`w-full transition-all duration-500 ease-out ${
            isScrolled 
              ? 'bg-[#0A192F]/95 backdrop-blur-xl shadow-lg border-b border-white/10 py-3' 
              : 'bg-transparent py-6'
          }`}
        >
          <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
            {/* Brand Name (Kiri) - Teks Putih Terang */}
          <NavLink
            to="/"
            className="text-lg font-bold tracking-tight text-white shrink-0 select-none flex items-center gap-2"
          >
            Desa Karangtirta
          </NavLink>

          {/* Desktop Menu & CTA (Kanan) - Berada di dalam "Pill" abu-abu terang */}
          <div className="hidden lg:flex items-center bg-[#E5E7EB] rounded-[20px] p-1.5 shadow-sm">
            <div className="flex items-center gap-1 px-2">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-2 text-[11px] font-bold tracking-wider uppercase rounded-xl transition-all duration-300 ease-out ${
                      isActive
                        ? 'text-black'
                        : 'text-slate-500 hover:text-black'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* CTA Button "LAYANAN" di dalam pill, warna gelap */}
            <button
              className="bg-[#111827] text-white text-[11px] font-bold tracking-wider uppercase px-5 py-2.5 rounded-2xl ml-1 hover:bg-black active:scale-[0.97] transition-all duration-150 cursor-pointer"
            >
              Layanan
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-white hover:bg-white/10 p-2 rounded-full transition-colors"
            onClick={toggleDrawer}
            aria-label="Buka menu navigasi"
          >
            <Menu className="w-6 h-6" />
          </button>
          </div>
        </nav>
      </motion.div>

      {/* Mobile Drawer */}
      <Drawer
        title={
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#0A192F]">Desa Karangtirta</span>
          </div>
        }
        placement="right"
        onClose={toggleDrawer}
        open={isDrawerVisible}
        closeIcon={<X className="text-slate-500 w-5 h-5 hover:text-[#0A192F] transition-colors" />}
        styles={{
          header: {
            borderBottom: '1px solid #E2E8F0',
            background: '#F8FAFC',
            padding: '16px 20px',
          },
          body: { background: '#F8FAFC', padding: '20px' },
          content: { background: '#F8FAFC' },
          mask: { backdropFilter: 'blur(4px)', background: 'rgba(0,0,0,0.4)' },
        }}
        width={280}
      >
        <nav className="flex flex-col gap-2 pt-2">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={toggleDrawer}
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl text-xs font-bold tracking-wider uppercase transition-all ${
                  isActive
                    ? 'text-black bg-white shadow-sm border border-slate-100'
                    : 'text-slate-500 hover:text-black hover:bg-slate-100'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="mt-6 pt-6 border-t border-slate-200">
          <button
            className="w-full bg-[#111827] text-white font-bold tracking-wider uppercase py-3.5 rounded-xl text-xs hover:bg-black active:scale-[0.98] transition-all duration-150"
          >
            Layanan
          </button>
        </div>
      </Drawer>
    </>
  );
}
