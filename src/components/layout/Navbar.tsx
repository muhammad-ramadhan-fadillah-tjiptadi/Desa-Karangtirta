import { useState, useEffect } from 'react';

import { Drawer } from 'antd';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollSpy } from '@/hooks/useScrollSpy';

interface NavItem {
  label: string;
  id: string;
}

const NAV_LINKS: NavItem[] = [
  { label: 'Beranda', id: 'beranda' },
  { label: 'Profil', id: 'profil' },
  { label: 'Wisata Budaya', id: 'wisata' },
  { label: 'Aparatur', id: 'aparatur' },
  { label: 'Statistik', id: 'statistik' },
  { label: 'Berita', id: 'berita' },
  { label: 'UMKM', id: 'umkm' },
  { label: 'CCTV', id: 'cctv' },
];

export function Navbar() {
  const [isDrawerVisible, setIsDrawerVisible] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const activeSection = useScrollSpy(NAV_LINKS.map(link => link.id), 100);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDrawer = () => setIsDrawerVisible((prev) => !prev);

  const scrollToSection = (id: string, e?: React.MouseEvent) => {
    e?.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Offset untuk navbar (misal 80px)
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
      if (isDrawerVisible) {
        setIsDrawerVisible(false);
      }
    }
  };

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
              ? 'py-3' 
              : 'py-4'
          }`}
        >
          <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
            {/* Brand Name (Kiri) */}
          <button
            onClick={(e) => scrollToSection('beranda', e)}
            className="text-lg font-bold tracking-tight text-white bg-[#0F172A] px-5 py-2.5 rounded-full shrink-0 select-none flex items-center gap-2 shadow-sm"
          >
            Desa Karangtirta
          </button>

          {/* Desktop Menu & CTA (Kanan) - Berada di dalam "Pill" biru navy */}
          <div className="hidden lg:flex items-center bg-[#0F172A] rounded-full p-1.5 shadow-sm">
            <div className="flex items-center gap-1 px-2">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => scrollToSection(link.id, e)}
                    className={`relative px-3 py-2 text-[11px] font-bold tracking-wider uppercase rounded-full transition-colors duration-300 ease-out ${
                      isActive
                        ? 'text-[#0F172A]'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <span className="relative z-10">{link.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="navbar-active-pill"
                        className="absolute inset-0 bg-white rounded-full z-0"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* CTA Button "LAYANAN" di dalam pill, tanpa bg */}
            <button
              className="text-white text-[11px] font-bold tracking-wider uppercase px-5 py-2.5 rounded-full ml-1 hover:bg-white/10 active:scale-[0.97] transition-all duration-150 cursor-pointer"
            >
              Layanan
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-white bg-[#0F172A] hover:bg-[#0A2540] p-2.5 rounded-full transition-colors shadow-sm"
            onClick={toggleDrawer}
            aria-label="Buka menu navigasi"
          >
            <Menu className="w-5 h-5" />
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
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(link.id, e)}
                className={`px-4 py-3 rounded-xl text-xs font-bold tracking-wider uppercase transition-all ${
                  isActive
                    ? 'text-black bg-white shadow-sm border border-slate-100'
                    : 'text-slate-500 hover:text-black hover:bg-slate-100'
                }`}
              >
                {link.label}
              </a>
            );
          })}
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
