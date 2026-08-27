'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Anchor } from 'lucide-react';

interface FooterLink {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    label: 'Pemerintahan',
    links: [
      { title: 'Beranda', href: '#beranda' },
      { title: 'Profil Desa', href: '#profil' },
      { title: 'Aparatur Desa', href: '#aparatur' },
      { title: 'Statistik Warga', href: '#statistik' },
      { title: 'Informasi TPI', href: '#tpi' },
    ],
  },
  {
    label: 'Informasi Publik',
    links: [
      { title: 'Berita & Pengumuman', href: '#berita' },
      { title: 'Produk UMKM', href: '#umkm' },
      { title: 'Pantauan CCTV', href: '#cctv' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative w-full bg-brand-navy pt-20 pb-12 lg:pb-16 text-white overflow-hidden border-t border-brand-sand/10 rounded-t-[3rem] lg:rounded-t-[4rem]">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#d4af37 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      <div className="absolute bottom-0 left-1/2 w-[800px] h-[400px] bg-brand-sand/10 blur-[120px] rounded-t-full -translate-x-1/2 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="bg-brand-sand/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur-sm" />

        <div className="grid w-full gap-12 xl:grid-cols-4 xl:gap-8">
          <AnimatedContainer className="space-y-6 xl:col-span-1">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-brand-sand/10 rounded-xl border border-brand-sand/20">
                <Anchor className="w-6 h-6 text-brand-sand" />
              </div>
              <span className="font-serif font-bold text-xl tracking-wide">Desa Karangtirta</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Mewujudkan desa pesisir yang mandiri, sejahtera, dan berbudaya melalui tata kelola pemerintahan yang transparan dan inovatif.
            </p>
            <p className="text-slate-500 text-xs mt-8">
              © {new Date().getFullYear()} Desa Karangtirta. Hak Cipta Dilindungi.
            </p>
          </AnimatedContainer>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-2 xl:col-span-3">
            {footerLinks.map((section, index) => (
              <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
                <div className="mb-10 md:mb-0">
                  <h3 className="text-xs font-bold tracking-widest uppercase text-brand-sand mb-6">
                    {section.label}
                  </h3>
                  <ul className="text-slate-400 space-y-4 text-sm font-medium">
                    {section.links.map((link) => (
                      <li key={link.title}>
                        <a
                          href={link.href}
                          onClick={(e) => {
                            if (link.href.startsWith('#')) {
                              e.preventDefault();
                              const targetId = link.href.substring(1);
                              const element = document.getElementById(targetId);
                              if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                              }
                            }
                          }}
                          className="hover:text-brand-sand inline-flex items-center transition-all duration-300 hover:translate-x-1"
                        >
                          {link.icon && <link.icon className="me-2 size-4" />}
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedContainer>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

type ViewAnimationProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>['className'];
  children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: 10, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
