import Hero10Demo from "@/components/Hero10Demo";
import { ProfileSection } from "@/components/sections/ProfileSection";

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

    </div>
  );
}
