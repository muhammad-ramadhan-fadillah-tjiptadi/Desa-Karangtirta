import { Anchor, Wind, Waves, ThermometerSun, AlertTriangle, Ship, TrendingUp, TrendingDown, Clock, MapPin, Fish } from "lucide-react";
import { cn } from "@/lib/utils";

const weatherData = {
  waveHeight: "1.2 - 2.0m",
  windSpeed: "15 Knot",
  windDirection: "Tenggara",
  temperature: "29°C",
  tide: "Pasang Naik (08:00 - 14:00)",
  status: "Waspada",
  statusColor: "text-amber-700 bg-amber-50 ring-amber-600/20",
  statusIcon: AlertTriangle,
};

const tpiSchedule = [
  { time: "06:00 - 08:00 WIB", type: "Lelang Pagi", description: "Lelang Utama Nelayan Tangkap (Grosir)" },
  { time: "15:00 - 17:00 WIB", type: "Lelang Sore", description: "Lelang Tambahan & Eceran Warga" },
];

const commodityData = [
  { id: 1, name: "Ikan Tongkol", price: "Rp 25.000 / kg", trend: "up", supply: "Tinggi" },
  { id: 2, name: "Ikan Tenggiri", price: "Rp 65.000 / kg", trend: "down", supply: "Sedang" },
  { id: 3, name: "Cumi-Cumi", price: "Rp 45.000 / kg", trend: "up", supply: "Sedang" },
  { id: 4, name: "Udang Vaname", price: "Rp 85.000 / kg", trend: "up", supply: "Rendah" },
  { id: 5, name: "Kepiting Rajungan", price: "Rp 110.000 / kg", trend: "down", supply: "Rendah" },
  { id: 6, name: "Ikan Kakap Merah", price: "Rp 75.000 / kg", trend: "up", supply: "Sedang" },
];

export function TpiSection() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 lg:py-32">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="flex flex-col gap-4">
          <span className="text-[#0EA5E9] font-mono font-bold tracking-widest uppercase text-sm">
            Sentra Kelautan
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-[#0F172A] tracking-tighter leading-[1.05]">
            Informasi Maritim & <br />
            Pelelangan Ikan
          </h2>
        </div>
        <p className="text-slate-600 max-w-md text-lg leading-relaxed">
          Pusat informasi navigasi nelayan, status cuaca pesisir terkini, dan
          pergerakan harga hasil tangkapan laut di TPI Karangtirta.
        </p>
      </div>

      {/* The Big Card Wrapper */}
      <div className="bg-white rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-sm ring-1 ring-slate-900/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Maritime Weather */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold font-serif text-[#0F172A]">Cuaca Maritim</h3>
              <p className="text-slate-500 text-sm">Pembaruan langsung dari stasiun pantau pesisir.</p>
            </div>

            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100 flex flex-col gap-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <Anchor className="w-32 h-32" />
              </div>
              
              <div className={cn("inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm ring-1 shadow-sm self-start z-10", weatherData.statusColor)}>
                <weatherData.statusIcon className="w-4 h-4" />
                Status Perairan: {weatherData.status}
              </div>

              <div className="grid grid-cols-2 gap-4 mt-2 relative z-10">
                <div className="flex flex-col gap-1 bg-white p-4 rounded-2xl shadow-sm ring-1 ring-slate-900/5">
                  <Waves className="w-5 h-5 text-[#0EA5E9] mb-2" />
                  <span className="text-xs text-slate-500 font-medium">Gelombang</span>
                  <span className="font-bold text-[#0F172A]">{weatherData.waveHeight}</span>
                </div>
                <div className="flex flex-col gap-1 bg-white p-4 rounded-2xl shadow-sm ring-1 ring-slate-900/5">
                  <Wind className="w-5 h-5 text-[#0EA5E9] mb-2" />
                  <span className="text-xs text-slate-500 font-medium">Angin</span>
                  <span className="font-bold text-[#0F172A]">{weatherData.windSpeed}</span>
                  <span className="text-[10px] text-slate-400">{weatherData.windDirection}</span>
                </div>
                <div className="flex flex-col gap-1 bg-white p-4 rounded-2xl shadow-sm ring-1 ring-slate-900/5">
                  <ThermometerSun className="w-5 h-5 text-[#0EA5E9] mb-2" />
                  <span className="text-xs text-slate-500 font-medium">Suhu Udara</span>
                  <span className="font-bold text-[#0F172A]">{weatherData.temperature}</span>
                </div>
                <div className="flex flex-col gap-1 bg-white p-4 rounded-2xl shadow-sm ring-1 ring-slate-900/5">
                  <Anchor className="w-5 h-5 text-[#0EA5E9] mb-2" />
                  <span className="text-xs text-slate-500 font-medium">Pasang Surut</span>
                  <span className="font-bold text-[#0F172A] text-xs sm:text-sm">{weatherData.tide}</span>
                </div>
              </div>
            </div>
            
            {/* TPI Info Card */}
            <div className="bg-[#0F172A] text-white rounded-3xl p-6 relative overflow-hidden flex flex-col gap-6">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Ship className="w-24 h-24" />
              </div>
              <div className="flex items-center gap-3 relative z-10">
                <div className="bg-white/10 p-2.5 rounded-xl">
                  <MapPin className="w-5 h-5 text-[#F8FAFC]" />
                </div>
                <h4 className="font-bold text-lg">Lokasi TPI Utama</h4>
              </div>
              <p className="text-white/70 text-sm leading-relaxed relative z-10">
                Dermaga Timur Karangtirta, beroperasi setiap hari untuk melayani pelelangan grosir partai besar dan eceran warga.
              </p>
            </div>
          </div>

          {/* Right Column: TPI Catalog & Schedule */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            {/* Schedule */}
            <div className="flex flex-col gap-5">
              <h3 className="text-2xl font-bold font-serif text-[#0F172A] flex items-center gap-3">
                <Clock className="w-6 h-6 text-[#0EA5E9]" />
                Jadwal Pelelangan Ikan
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tpiSchedule.map((schedule, idx) => (
                  <div key={idx} className="flex gap-4 p-5 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                    <div className="bg-slate-200/50 text-[#0F172A] font-bold px-3 py-1.5 rounded-lg self-start whitespace-nowrap text-sm">
                      {schedule.time}
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="font-bold text-[#0F172A]">{schedule.type}</h4>
                      <p className="text-slate-600 text-sm">{schedule.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Catalog */}
            <div className="flex flex-col gap-5">
              <div className="flex justify-between items-end">
                <h3 className="text-2xl font-bold font-serif text-[#0F172A] flex items-center gap-3">
                  <Fish className="w-6 h-6 text-[#0EA5E9]" />
                  Katalog Komoditas Hari Ini
                </h3>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest hidden sm:block">
                  Estimasi Harga
                </span>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="border-b-2 border-slate-100">
                      <th className="pb-3 text-sm font-semibold text-slate-400 uppercase tracking-wider pl-4">Jenis Tangkapan</th>
                      <th className="pb-3 text-sm font-semibold text-slate-400 uppercase tracking-wider">Pasokan</th>
                      <th className="pb-3 text-sm font-semibold text-slate-400 uppercase tracking-wider">Harga (Per Kg)</th>
                      <th className="pb-3 text-sm font-semibold text-slate-400 uppercase tracking-wider text-right pr-4">Tren</th>
                    </tr>
                  </thead>
                  <tbody>
                    {commodityData.map((item) => (
                      <tr key={item.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors group">
                        <td className="py-4 pl-4 font-bold text-[#0F172A] group-hover:text-[#0EA5E9] transition-colors">{item.name}</td>
                        <td className="py-4">
                          <span className={cn(
                            "text-xs font-bold px-2.5 py-1 rounded-full",
                            item.supply === "Tinggi" ? "bg-emerald-50 text-emerald-700" :
                            item.supply === "Sedang" ? "bg-blue-50 text-blue-700" :
                            "bg-rose-50 text-rose-700"
                          )}>
                            {item.supply}
                          </span>
                        </td>
                        <td className="py-4 font-mono font-medium text-slate-700">{item.price}</td>
                        <td className="py-4 pr-4 text-right">
                          <div className="inline-flex items-center justify-end w-full">
                            {item.trend === "up" ? (
                              <div className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">
                                <TrendingUp className="w-4 h-4" />
                                <span className="text-xs font-bold">Naik</span>
                              </div>
                            ) : (
                              <div className="flex items-center gap-1.5 text-rose-600 bg-rose-50 px-2 py-1 rounded-lg">
                                <TrendingDown className="w-4 h-4" />
                                <span className="text-xs font-bold">Turun</span>
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
