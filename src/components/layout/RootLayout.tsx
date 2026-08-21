import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export function RootLayout() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-navy font-sans">
      <Navbar />
      <main className="pt-20 min-h-[100dvh]">
        <Outlet />
      </main>
    </div>
  );
}
