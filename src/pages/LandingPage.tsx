import Hero10Demo from '@/components/Hero10Demo';

export default function LandingPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Beranda */}
      <section id="beranda" className="w-full scroll-mt-20">
        <Hero10Demo />
      </section>

      {/* 2. Profil Placeholder */}
      <section id="profil" className="w-full min-h-screen bg-brand-bg flex items-center justify-center scroll-mt-20">
        <h2 className="text-4xl font-bold text-brand-navy">Seksi Profil (Placeholder)</h2>
      </section>

      {/* 3. Wisata Placeholder */}
      <section id="wisata" className="w-full min-h-screen bg-brand-bg flex items-center justify-center scroll-mt-20">
        <h2 className="text-4xl font-bold text-brand-navy">Seksi Wisata Budaya (Placeholder)</h2>
      </section>

      {/* 4. Aparatur Placeholder */}
      <section id="aparatur" className="w-full min-h-[80vh] bg-brand-bg flex items-center justify-center scroll-mt-20">
        <h2 className="text-4xl font-bold text-brand-navy">Seksi Aparatur (Placeholder)</h2>
      </section>

      {/* 5. Statistik Placeholder */}
      <section id="statistik" className="w-full min-h-screen bg-brand-bg flex items-center justify-center scroll-mt-20">
        <h2 className="text-4xl font-bold text-brand-navy">Seksi Statistik (Placeholder)</h2>
      </section>

      {/* 6. Berita Placeholder */}
      <section id="berita" className="w-full min-h-[80vh] bg-brand-bg flex items-center justify-center scroll-mt-20">
        <h2 className="text-4xl font-bold text-brand-navy">Seksi Berita (Placeholder)</h2>
      </section>

      {/* 7. UMKM Placeholder */}
      <section id="umkm" className="w-full min-h-screen bg-brand-bg flex items-center justify-center scroll-mt-20">
        <h2 className="text-4xl font-bold text-brand-navy">Seksi UMKM (Placeholder)</h2>
      </section>

      {/* 8. CCTV Placeholder */}
      <section id="cctv" className="w-full min-h-[60vh] bg-brand-bg flex items-center justify-center scroll-mt-20">
        <h2 className="text-4xl font-bold text-brand-navy">Seksi CCTV (Placeholder)</h2>
      </section>
    </div>
  );
}
