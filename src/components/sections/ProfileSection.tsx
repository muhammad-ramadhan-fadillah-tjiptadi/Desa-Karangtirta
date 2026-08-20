export function ProfileSection() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] mb-4">Profil Desa</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Mengenal lebih dekat sejarah, visi misi, dan letak geografis Desa Karangtirta.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Gambar Profil placeholder */}
        <div className="rounded-3xl overflow-hidden aspect-video bg-slate-200 shadow-xl relative">
          <img 
            src="https://images.unsplash.com/photo-1590059556277-2f7415170d10?q=80&w=1000&auto=format&fit=crop" 
            alt="Pemandangan Desa" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Teks Sejarah/Profil */}
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-bold text-[#0F172A]">Sejarah & Letak Geografis</h3>
          <p className="text-slate-600 leading-relaxed">
            Desa Karangtirta adalah sebuah desa yang asri dan kaya akan potensi budaya serta pariwisata. 
            Dikelilingi oleh perbukitan hijau dan hamparan sawah, desa ini menjadi tempat yang nyaman 
            bagi masyarakat yang mengedepankan gotong royong dan kearifan lokal.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
              <h4 className="font-bold text-[#0F172A] text-lg">2.500+</h4>
              <p className="text-sm text-slate-500">Penduduk</p>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
              <h4 className="font-bold text-[#0F172A] text-lg">150 Ha</h4>
              <p className="text-sm text-slate-500">Luas Wilayah</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
