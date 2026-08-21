import Hero10Demo from "@/components/Hero10Demo";
import { ProfileSection } from "@/components/sections/ProfileSection";
import { TpiSection } from "@/components/sections/TpiSection";

export default function LandingPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Beranda */}
      <section id="beranda" className="w-full scroll-mt-20">
        <Hero10Demo />
      </section>

      {/* 2. Profil */}
      <section id="profil" className="w-full min-h-screen bg-slate-50 flex items-center justify-center scroll-mt-20">
        <ProfileSection />
      </section>

      {/* 3. TPI & Maritim */}
      <section id="tpi" className="w-full min-h-screen bg-slate-50 flex items-center justify-center scroll-mt-20">
        <TpiSection />
      </section>

    </div>
  );
}
