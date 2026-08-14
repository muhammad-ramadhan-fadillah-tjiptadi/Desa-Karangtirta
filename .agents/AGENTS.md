# Project Customization Rules & Standards

Berikut adalah aturan wajib dan standar pengembangan frontend yang harus diikuti untuk setiap modifikasi kode di dalam proyek ini:

## 1. Aturan Wajib Teknologi Frontend
- **Framework & Core:** React JS (Functional Components) + TypeScript + Vite.
- **Styling:** Tailwind CSS + Pendekatan **Mobile First** yang responsif.
- **UI Components:** Ant-Design (`antd`).
- **Data Table:** React Data Grid.
- **Data Fetching:** Axios + TanStack Query (`@tanstack/react-query`).
- **State Management:** React Context atau Zustand.
- **Routing:** React Router Dom dengan menggunakan `createHashRouter`.
- **Form & Validation:** React Hook Form + Zod.
- **Linter & Formatting:** Prettier dan linter bawaan Vite.
- **TypeScript Strictness:** Selalu gunakan tipe data, `interface`, dan `enum`. Hindari penggunaan tipe `any` (tipe eksplisit wajib).

## 2. Antarmuka Pembungkus Respons (Response Wrapper Interface)
Setiap penanganan respons API wajib mematuhi kontrak berikut:

```typescript
export interface ImetaPagination {
  totalPages: number;
  totalData: number;
  totalDataPerPage: number;
  page: number;
  limit: number;
}

export interface IResponseEntity<T> {
  code: number;
  status: string;
  message: string;
  data: T;
  meta?: ImetaPagination;
}
```
*Ketentuan tambahan:*
- Backend tidak mengirim respons tanpa pembungkus.
- Frontend/Mobile dilarang menebak bentuk respons.
- Pesan error untuk pengguna wajib diambil langsung dari field `message` dalam respons.

## 3. Penerapan Lazyloading & Asynchronous Loading
- Gunakan React `lazy` untuk memuat halaman secara asinkronus guna mengoptimalkan performa.
- Integrasikan halaman-halaman lazy tersebut ke dalam konfigurasi rute di router.

## 4. Optimasi Performa
- Cegah proses *re-render* yang tidak diperlukan pada komponen anak (*child components*) menggunakan teknik memoisasi (`React.memo`, `useMemo`, `useCallback`) ketika props yang diwariskan dari komponen induk mengalami perubahan.

## 5. Aturan Kualitas Kode Lintas Track
- **Penamaan & Bahasa:** Nama variabel, fungsi, tipe data, dan simbol kode wajib menggunakan bahasa Inggris. Sedangkan teks antarmuka (UI) wajib menggunakan bahasa produk (Bahasa Indonesia).
- **Logger:** Dilarang keras meninggalkan baris `console.log` pada kode produksi atau kode yang akan di-commit.
- **Kerahasiaan Data:** Kredensial, kunci API, file `.env`, keystore, berkas rahasia, dan data pribadi dilarang keras di-commit ke Git.

## 6. Alur Kerja Git & Percabangan
- **Branching:** Dilarang keras melakukan push secara langsung ke branch `main` atau `development`. Setiap fitur atau perbaikan dikerjakan di branch terpisah yang diturunkan dari `development` dengan format nama:
  - `fitur/nama-fitur`
  - `fix/deskripsi-singkat`
- **Commit:** Buat commit kecil yang terfokus dengan pesan yang jelas dan mendeskripsikan apa serta mengapa perubahan dilakukan.
- **Pull Request (PR):** Wajib membuat PR dengan penjelasan deskriptif mengenai perubahan, instruksi pengujian, dan screenshot sebelum dilakukan penggabungan (*merge*) oleh mentor/reviewer. PR berukuran besar wajib dipecah menjadi beberapa bagian kecil.

## 7. Keamanan & Proteksi Rute
- **Route Guard Wajib:** Setiap rute yang memerlukan autentikasi (contoh: `/admin/*`) **wajib** dibungkus oleh komponen `ProtectedRoute` yang membaca status autentikasi dari state management (Zustand). Rute tanpa guard akan ditolak saat code review.
- **Service Layer Autentikasi:** Logika autentikasi (login, logout, token refresh) wajib ditempatkan di file service terpisah (`services/authService.ts`), **bukan** langsung di dalam komponen halaman.
- **Hardcoded Credentials:** Dilarang keras menyimpan kredensial (username/password) secara hardcoded di kode produksi. Gunakan environment variable atau backend authentication service.

## 8. Arsitektur Komponen & Batas Ukuran
- **Maksimal 300 Baris per Komponen:** File komponen `.tsx` tidak boleh melebihi **300 baris**. Jika melebihi, wajib dipecah menjadi sub-komponen yang lebih kecil dan ditempatkan di subfolder terkait (contoh: `components/admin/`).
- **Pemisahan Concern:** Logika data fetching wajib diekstrak ke custom hooks (`hooks/`), logika API ke service layer (`services/`), dan tipe data ke file terpisah (`types/`). Komponen `.tsx` hanya boleh berisi logika presentasi dan event handling.
- **Dead Code:** File yang tidak digunakan (CSS kosong, komponen unused, asset tidak terpakai) wajib dihapus sebelum commit. Gunakan `grep` atau IDE untuk memverifikasi bahwa tidak ada impor/referensi sebelum menghapus.

## 9. Standar Asset & Performa
- **Format Gambar:** Semua gambar statis wajib menggunakan format **WebP** (bukan PNG/JPEG) untuk optimasi ukuran file. Pengecualian hanya untuk SVG yang memang berbasis vektor.
- **Zero ESLint Errors:** Sebelum commit, jalankan `npx eslint src/` dan pastikan hasilnya **0 errors**. Warning diperbolehkan hanya jika berasal dari library eksternal yang tidak dapat dikontrol.
- **Zero TypeScript Errors:** Jalankan `npx tsc -b` sebelum commit dan pastikan hasilnya **0 errors**.

## 10. SEO & Aksesibilitas Minimum
- **Meta Tags Wajib:** Setiap halaman publik wajib memiliki: `<title>`, `<meta name="description">`, Open Graph tags (`og:title`, `og:description`, `og:type`), dan Twitter Card tags.
- **Structured Data:** Halaman utama wajib memiliki JSON-LD schema yang sesuai dengan jenis organisasi/lembaga.
- **Label Form:** Setiap elemen `<input>`, `<select>`, dan `<textarea>` wajib memiliki atribut `id` yang unik dan dipasangkan dengan `<label htmlFor="...">` untuk aksesibilitas screen reader.
- **Hierarki Heading:** Gunakan satu `<h1>` per halaman dengan hierarki heading yang benar (`h1` → `h2` → `h3`).
