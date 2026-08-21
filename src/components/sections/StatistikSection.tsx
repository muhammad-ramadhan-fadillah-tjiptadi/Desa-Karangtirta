import { motion } from "framer-motion";
import { Users, User, Maximize2, ShieldCheck, FileText, ClipboardList, CheckCircle } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from "recharts";

const trenPenduduk = [
  { year: "2022", total: 85 },
  { year: "2023", total: 90 },
  { year: "2024", total: 95 },
  { year: "2025", total: 98 },
  { year: "2026", total: 100 },
];

const kelahiranKematian = [
  { year: "2022", kelahiran: 4, kematian: 2 },
  { year: "2023", kelahiran: 5, kematian: 3 },
  { year: "2024", kelahiran: 6, kematian: 2 },
  { year: "2025", kelahiran: 5, kematian: 2 },
  { year: "2026", kelahiran: 4, kematian: 2 },
];

const tingkatPendidikan = [
  { level: "SMA / SMK Sederajat", count: 45 },
  { level: "Diploma & Sarjana (D3/S1/S2)", count: 15 },
  { level: "SMP / Sederajat", count: 25 },
  { level: "SD / Sederajat", count: 15 },
];

const mataPencaharian = [
  { job: "Petani & Nelayan", count: 40 },
  { job: "Pedagang & UMKM", count: 30 },
  { job: "Sektor Jasa & Swasta", count: 15 },
  { job: "Lainnya (Pensiunan, Pelajar)", count: 15 },
];

export function StatistikSection() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-12 mb-12 lg:mb-16 border-b border-brand-navy/10 pb-8 lg:pb-12">
        <div className="flex flex-col items-start text-left max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="bg-brand-navy text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase">
              Statistik Kependudukan Karangtirta
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-serif text-brand-navy leading-tight"
          >
            Dashboard Data Kependudukan & Administrasi Desa
          </motion.h2>
        </div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-600 max-w-lg text-sm md:text-base leading-relaxed text-left"
        >
          Visualisasi data kependudukan terintegrasi dari database warga Karangtirta, tren laju pertumbuhan, distribusi usia, tingkat pendidikan, dan mata pencaharian pesisir.
        </motion.p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {/* Card 1: Total Penduduk */}
        <StatCard 
          title="TOTAL PENDUDUK" 
          value="100" 
          unit="Jiwa" 
          subtext="100 KK di 7 RW"
          icon={<Users className="w-5 h-5 text-brand-navy" />}
        />
        
        {/* Card 2: Sex Ratio */}
        <div className="bg-white rounded-3xl p-6 shadow-sm ring-1 ring-slate-900/5 flex flex-col justify-between h-full">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Sex Ratio (Gender)</h3>
            <div className="bg-brand-sand/20 p-2 rounded-xl">
              <User className="w-5 h-5 text-brand-sand" />
            </div>
          </div>
          <div>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-3xl font-black text-brand-navy">102</span>
              <span className="text-sm font-medium text-slate-500">Laki/100 Prp</span>
            </div>
            {/* Progress Bar Split */}
            <div className="h-2 w-full bg-slate-100 rounded-full flex overflow-hidden mb-2">
              <div className="bg-brand-navy h-full" style={{ width: '51%' }}></div>
              <div className="bg-brand-sand h-full" style={{ width: '49%' }}></div>
            </div>
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-brand-navy">Pria: 51 (51%)</span>
              <span className="text-brand-sand">Wanita: 49 (49%)</span>
            </div>
          </div>
        </div>

        {/* Card 3: Kepadatan */}
        <StatCard 
          title="KEPADATAN PENDUDUK" 
          value="44" 
          unit="Jiwa/km²" 
          subtext="Luas Wilayah: 2,31 km² (231 Ha)"
          icon={<Maximize2 className="w-5 h-5 text-brand-navy" />}
        />

        {/* Card 4: Database Warga */}
        <StatCard 
          title="DATABASE WARGA" 
          value="100" 
          unit="Jiwa" 
          subtext="100% Terverifikasi Sistem"
          icon={<ShieldCheck className="w-5 h-5 text-brand-navy" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Line Chart: Tren */}
        <div className="bg-white rounded-3xl p-6 shadow-sm ring-1 ring-slate-900/5">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Tren Laju Pertumbuhan Total (2022 - 2026)</h3>
            <span className="bg-brand-sand/20 text-brand-navy px-3 py-1 rounded-full text-xs font-bold">Total: 100 Jiwa</span>
          </div>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trenPenduduk} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0F172A" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#0F172A" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  labelStyle={{ fontWeight: 'bold', color: '#0F172A' }}
                />
                <Area type="monotone" dataKey="total" stroke="#0F172A" strokeWidth={3} fillOpacity={1} fill="url(#colorTotal)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar Chart: Kelahiran vs Kematian */}
        <div className="bg-white rounded-3xl p-6 shadow-sm ring-1 ring-slate-900/5">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Kelahiran VS Kematian (Alami)</h3>
          </div>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={kelahiranKematian} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  cursor={{ fill: '#F8FAFC' }}
                />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', fontWeight: 'bold', color: '#64748B' }} />
                <Bar dataKey="kelahiran" name="Kelahiran" fill="#0F172A" radius={[4, 4, 0, 0]} />
                <Bar dataKey="kematian" name="Kematian" fill="#C89F5C" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Progress Bars */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <ProgressBarCard title="TINGKAT PENDIDIKAN AKHIR WARGA" data={tingkatPendidikan} icon={<FileText className="w-5 h-5 text-brand-navy" />} />
        <ProgressBarCard title="MATA PENCAHARIAN UTAMA WARGA" data={mataPencaharian} icon={<ClipboardList className="w-5 h-5 text-brand-navy" />} />
      </div>

      {/* Bottom Detail Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Kelompok Umur & Golongan Darah */}
        <div className="bg-white rounded-3xl p-6 shadow-sm ring-1 ring-slate-900/5">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-brand-navy/10 p-2 rounded-xl">
              <Users className="w-5 h-5 text-brand-navy" />
            </div>
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Status Kelompok Umur & Golongan Darah</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            <div>
              <h4 className="text-xs font-bold text-slate-400 mb-2 uppercase">Kelompok Umur</h4>
              <div className="flex justify-between py-1 border-b border-slate-100"><span>0-14 Thn</span> <span className="font-semibold text-brand-navy">15 (15%)</span></div>
              <div className="flex justify-between py-1 border-b border-slate-100"><span>15-64 Thn</span> <span className="font-semibold text-brand-navy">75 (75%)</span></div>
              <div className="flex justify-between py-1 border-b border-slate-100"><span>65+ Thn</span> <span className="font-semibold text-brand-navy">10 (10%)</span></div>
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-400 mb-2 uppercase">Agama</h4>
              <div className="flex justify-between py-1 border-b border-slate-100"><span>Islam</span> <span className="font-semibold text-brand-navy">100%</span></div>
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-400 mb-2 uppercase">Golongan Darah</h4>
              <div className="flex justify-between py-1 border-b border-slate-100"><span>O</span> <span className="font-semibold text-brand-navy">40 (40%)</span></div>
              <div className="flex justify-between py-1 border-b border-slate-100"><span>A</span> <span className="font-semibold text-brand-navy">25 (25%)</span></div>
              <div className="flex justify-between py-1 border-b border-slate-100"><span>B</span> <span className="font-semibold text-brand-navy">25 (25%)</span></div>
              <div className="flex justify-between py-1 border-b border-slate-100"><span>AB</span> <span className="font-semibold text-brand-navy">10 (10%)</span></div>
            </div>
          </div>
        </div>

        {/* Kelengkapan Administrasi */}
        <div className="bg-white rounded-3xl p-6 shadow-sm ring-1 ring-slate-900/5">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-brand-sand/20 p-2 rounded-xl">
              <FileText className="w-5 h-5 text-brand-sand" />
            </div>
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Kelengkapan Administrasi Publik</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-slate-50 rounded-2xl p-4 flex flex-col items-center justify-center text-center border border-slate-100">
              <div className="bg-white p-2 rounded-full shadow-sm mb-3">
                <FileText className="w-5 h-5 text-brand-navy" />
              </div>
              <span className="text-sm font-bold text-brand-navy mb-1">KTP Elektronik</span>
              <span className="text-xs font-semibold text-brand-sand">100 Terdaftar</span>
            </div>
            <div className="bg-slate-50 rounded-2xl p-4 flex flex-col items-center justify-center text-center border border-slate-100">
              <div className="bg-white p-2 rounded-full shadow-sm mb-3">
                <Users className="w-5 h-5 text-brand-navy" />
              </div>
              <span className="text-sm font-bold text-brand-navy mb-1">Kartu Keluarga</span>
              <span className="text-xs font-semibold text-brand-sand">25 KK Unik</span>
            </div>
            <div className="bg-slate-50 rounded-2xl p-4 flex flex-col items-center justify-center text-center border border-slate-100">
              <div className="bg-white p-2 rounded-full shadow-sm mb-3">
                <CheckCircle className="w-5 h-5 text-brand-navy" />
              </div>
              <span className="text-sm font-bold text-brand-navy mb-1">Akta Kelahiran</span>
              <span className="text-xs font-semibold text-brand-sand">100 Terdaftar</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, unit, subtext, icon }: { title: string, value: string, unit: string, subtext: string, icon: React.ReactNode }) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm ring-1 ring-slate-900/5 flex flex-col justify-between h-full">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">{title}</h3>
        <div className="bg-brand-navy/10 p-2 rounded-xl">
          {icon}
        </div>
      </div>
      <div>
        <div className="flex items-baseline gap-1 mb-1">
          <span className="text-3xl font-black text-brand-navy">{value}</span>
          <span className="text-sm font-medium text-slate-500">{unit}</span>
        </div>
        <p className="text-xs font-medium text-slate-400">{subtext}</p>
      </div>
    </div>
  );
}

function ProgressBarCard({ title, data, icon }: { title: string, data: { level?: string, job?: string, count: number }[], icon: React.ReactNode }) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm ring-1 ring-slate-900/5">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-brand-navy/10 p-2 rounded-xl">
          {icon}
        </div>
        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">{title}</h3>
      </div>
      <div className="flex flex-col gap-4">
        {data.map((item, i) => (
          <div key={i}>
            <div className="flex justify-between text-xs font-bold text-brand-navy mb-2">
              <span>{item.level || item.job}</span>
              <span>{item.count} Jiwa ({item.count}%)</span>
            </div>
            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${item.count}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.1 }}
                className="h-full bg-brand-navy rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
