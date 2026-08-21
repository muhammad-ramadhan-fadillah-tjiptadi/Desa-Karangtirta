import { useState } from "react";

import { Drawer } from "antd";
import { Menu, X } from "lucide-react";
import { useScrollSpy } from "@/hooks/useScrollSpy";

interface NavItem {
  label: string;
  id: string;
}

const NAV_LINKS: NavItem[] = [
  { label: "Beranda", id: "beranda" },
  { label: "Profil", id: "profil" },
  { label: "Info TPI", id: "tpi" },
  { label: "Aparatur", id: "aparatur" },
  { label: "Statistik", id: "statistik" },
  { label: "Berita", id: "berita" },
  { label: "UMKM", id: "umkm" },
  { label: "CCTV", id: "cctv" },
];

export function Navbar() {
  const [isDrawerVisible, setIsDrawerVisible] = useState<boolean>(false);

  const activeSection = useScrollSpy(
    NAV_LINKS.map((link) => link.id),
    100
  );

  const toggleDrawer = () => setIsDrawerVisible((prev) => !prev);

  const scrollToSection = (id: string, e?: React.MouseEvent) => {
    e?.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Offset untuk navbar (misal 80px)
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
      if (isDrawerVisible) {
        setIsDrawerVisible(false);
      }
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 flex justify-center bg-[#0F172A] shadow-2xl transition-none">
        <nav className="w-full">
          <div className="w-full flex items-center justify-between px-6 md:px-12 py-5">
            {/* Brand Name (Kiri) */}
            <button
              onClick={(e) => scrollToSection("beranda", e)}
              className="text-[16px] font-medium tracking-wider text-white pr-6 shrink-0 select-none flex items-center hover:text-slate-300 transition-colors"
            >
              Desa Karangtirta
            </button>

            {/* Separator */}
            <div className="hidden lg:block w-px h-6 bg-white/15 mx-2" />

            {/* Desktop Menu & CTA (Kanan) */}
            <div className="hidden lg:flex items-center flex-1">
              <div className="flex items-center gap-2 lg:gap-3">
                {NAV_LINKS.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.id}
                      href={`#${link.id}`}
                      onClick={(e) => scrollToSection(link.id, e)}
                      className={`relative px-5 py-2.5 text-[11px] font-semibold tracking-[0.15em] uppercase rounded-full transition-all duration-300 ease-out ${
                        isActive
                          ? "text-brand-navy bg-brand-sand"
                          : "text-slate-300 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <span>{link.label}</span>
                    </a>
                  );
                })}
              </div>

              {/* Login Admin Button */}
              <a
                href="#/admin"
                className="ml-auto px-6 py-2.5 bg-transparent hover:text-brand-sand text-white text-[11px] font-bold tracking-[0.2em] uppercase transition-colors duration-300"
              >
                Login Admin
              </a>
            </div>
            <button
              className="lg:hidden text-slate-300 hover:text-white p-2 ml-2 rounded-full transition-colors"
              onClick={toggleDrawer}
              aria-label="Buka menu navigasi"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        title={
          <div className="flex items-center gap-2">
            <span className="font-bold text-white">Desa Karangtirta</span>
          </div>
        }
        placement="left"
        onClose={toggleDrawer}
        open={isDrawerVisible}
        closeIcon={
          <X className="text-slate-400 w-5 h-5 hover:text-white transition-colors" />
        }
        styles={{
          header: {
            borderBottom: "1px solid rgba(255,255,255,0.1)",
            background: "#0F172A",
            padding: "16px 20px",
          },
          body: { background: "#0F172A", padding: "20px" },
          content: { background: "#0F172A" },
          mask: { backdropFilter: "blur(4px)", background: "rgba(0,0,0,0.6)" },
        }}
        width="100%"
      >
        <nav className="flex flex-col gap-2 pt-2">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(link.id, e)}
                className={`block px-4 py-3 rounded-xl text-xs font-bold tracking-wider uppercase transition-all ${
                  isActive
                    ? "!text-brand-navy !bg-brand-sand shadow-sm"
                    : "!text-slate-400 hover:!text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="mt-6 pt-6 border-t border-white/10">
          <button className="w-full bg-brand-sand text-brand-navy font-bold tracking-wider uppercase py-3.5 rounded-xl text-xs hover:bg-[#d4a373] active:scale-[0.98] transition-all duration-150">
            Login Admin
          </button>
        </div>
      </Drawer>
    </>
  );
}
