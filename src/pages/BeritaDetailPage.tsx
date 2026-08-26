import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";
import { BERITA_DATA } from "@/data/berita";
import { useEffect } from "react";

export default function BeritaDetailPage() {
  const { id } = useParams<{ id: string }>();
  const berita = BERITA_DATA.find((b) => b.id === Number(id));

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!berita) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-brand-bg px-4">
        <h2 className="text-2xl font-bold text-brand-navy mb-4">Berita Tidak Ditemukan</h2>
        <Link to="/" className="inline-flex items-center gap-2 text-brand-sand hover:text-brand-navy transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Beranda
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-brand-bg pt-24 pb-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back button */}
        <Link 
          to="/#berita" 
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-brand-navy transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Beranda
        </Link>

        {/* Article Header */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-6 text-xs sm:text-sm font-semibold">
            <span className="bg-brand-navy text-white px-3 py-1 rounded-full tracking-wider uppercase shadow-sm">
              {berita.category}
            </span>
            <div className="flex items-center gap-1.5 text-slate-500">
              <Calendar className="w-4 h-4" />
              <span>{berita.date}</span>
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-brand-navy leading-tight mb-6">
            {berita.title}
          </h1>
          
          <p className="text-lg text-slate-600 font-medium leading-relaxed border-l-4 border-brand-sand pl-4">
            {berita.excerpt}
          </p>
        </div>

        {/* Image */}
        <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-lg mb-12">
          <img 
            src={berita.image} 
            alt={berita.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <article className="prose prose-lg prose-slate max-w-none">
          <div className="text-slate-700 leading-loose text-[17px]">
            {berita.content.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-6">{paragraph}</p>
            ))}
          </div>
        </article>

      </div>
    </div>
  );
}
