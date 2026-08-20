import Hero10Demo from '@/components/Hero10Demo';
import { ProfileSection } from '@/components/sections/ProfileSection';

export default function LandingPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Beranda */}
      <section id="beranda" className="w-full scroll-mt-20">
        <Hero10Demo />
      </section>

      {/* 2. Profil Placeholder */}
      <section id="profil" className="w-full min-h-screen bg-[#F8FAFC] flex items-center justify-center scroll-mt-20">
        <ProfileSection />
      </section>

      {/* 3. Wisata Placeholder */}
      <section id="wisata" className="w-full min-h-screen bg-white flex items-center justify-center scroll-mt-20">
        <h2 className="text-4xl font-bold text-[#0F172A]">Seksi Wisata Budaya (Placeholder)</h2>
      </section>

      {/* 4. Aparatur Placeholder */}
      <section id="aparatur" className="w-full min-h-[80vh] bg-[#F8FAFC] flex items-center justify-center scroll-mt-20">
        <h2 className="text-4xl font-bold text-[#0F172A]">Seksi Aparatur (Placeholder)</h2>
      </section>

      {/* 5. Statistik Placeholder */}
      <section id="statistik" className="w-full min-h-screen bg-white flex items-center justify-center scroll-mt-20">
        <h2 className="text-4xl font-bold text-[#0F172A]">Seksi Statistik (Placeholder)</h2>
      </section>

      {/* 6. Berita Placeholder */}
      <section id="berita" className="w-full min-h-[80vh] bg-[#F5E6D3] flex items-center justify-center scroll-mt-20">
        <h2 className="text-4xl font-bold text-[#0F172A]">Seksi Berita (Placeholder)</h2>
      </section>

      {/* 7. UMKM Placeholder */}
      <section id="umkm" className="w-full min-h-screen bg-white flex items-center justify-center scroll-mt-20">
        <h2 className="text-4xl font-bold text-[#0F172A]">Seksi UMKM (Placeholder)</h2>
      </section>

      {/* 8. CCTV Placeholder */}
      <section id="cctv" className="w-full min-h-[60vh] bg-[#0F172A] flex items-center justify-center scroll-mt-20">
        <h2 className="text-4xl font-bold text-white">Seksi CCTV (Placeholder)</h2>
      </section>
    </div>
  );
}
