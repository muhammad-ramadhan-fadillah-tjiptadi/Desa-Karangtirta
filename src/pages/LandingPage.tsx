import Hero10Demo from "@/components/Hero10Demo";
import { ProfileSection } from "@/components/sections/ProfileSection";
import { TpiSection } from "@/components/sections/TpiSection";
import { AparaturSection } from "@/components/sections/AparaturSection";
import { StatistikSection } from "@/components/sections/StatistikSection";

export default function LandingPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Beranda */}
      <section id="beranda" className="w-full scroll-mt-20">
        <Hero10Demo />
      </section>

      {/* 2. Profil */}
      <section id="profil" className="w-full min-h-screen bg-brand-bg flex items-center justify-center scroll-mt-20">
        <ProfileSection />
      </section>

      {/* 3. TPI & Maritim */}
      <section id="tpi" className="w-full min-h-screen bg-brand-bg flex items-center justify-center scroll-mt-20">
        <TpiSection />
      </section>

      {/* 4. Aparatur */}
      <section id="aparatur" className="w-full min-h-screen bg-brand-bg flex items-center justify-center scroll-mt-20">
        <AparaturSection />
      </section>

      {/* 5. Statistik */}
      <section id="statistik" className="w-full min-h-screen bg-brand-bg flex items-center justify-center scroll-mt-20">
        <StatistikSection />
      </section>

    </div>
  );
}
