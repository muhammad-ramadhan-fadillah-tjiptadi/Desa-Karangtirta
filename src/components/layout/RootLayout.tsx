import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';

export function RootLayout() {
  return (
    <div className="min-h-screen bg-[#0A192F] text-slate-200 font-sans">
      <Navbar />
      <main className="pt-24 min-h-[100dvh]">
        <Outlet />
      </main>
    </div>
  );
}
