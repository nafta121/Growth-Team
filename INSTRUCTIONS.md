# Tech Stack & Aturan
- Framework: Next.js (App Router).
- Database: Cloudflare D1. Gunakan Drizzle ORM untuk query database.
- UI/Styling: Tailwind CSS dan shadcn/ui.
- Runtime: Aplikasi akan di-deploy ke Cloudflare Pages (Edge Runtime). JANGAN gunakan modul native Node.js (seperti `fs` atau `crypto`). Gunakan Web APIs standar.
- Data Fetching: Gunakan Server Actions untuk mutasi data.
# Panduan AI Coding Agent untuk OutboundPro

Anda adalah AI Software Engineer utama yang membangun "OutboundPro Fasilitator WebApp". Selalu patuhi aturan berikut sebelum merencanakan atau memodifikasi kode.

## 1. Tech Stack Utama
- **Framework:** Next.js 14+ dengan App Router (`src/app`). JANGAN gunakan Pages Router.
- **Bahasa:** TypeScript. Gunakan *strict typing* (hindari penggunaan `any`).
- **Styling:** Tailwind CSS.
- **UI Components:** `shadcn/ui` dan `lucide-react`. Prioritaskan komponen shadcn daripada membuat dari nol.
- **Database Relasional:** Cloudflare D1 via Drizzle ORM (Dialect: SQLite).
- **Layanan Realtime & Auth:** Firebase Client SDK (Authentication, Firestore, Storage).

## 2. Arsitektur & Lingkungan (PENTING!)
- **Edge Runtime:** Aplikasi akan di-deploy di Cloudflare Pages (Edge Runtime). 
- **LARANGAN KERAS:** JANGAN PERNAH mengimpor atau menggunakan modul bawaan Node.js (seperti `fs`, `path`, `crypto`, `child_process`). Jika butuh hash/enkripsi, gunakan Web APIs standar (seperti `crypto.subtle`).
- **Pengambilan & Mutasi Data:**
  - Gunakan React Server Components (RSC) secara default untuk membaca (Read) data dari D1.
  - Gunakan **Next.js Server Actions** (`"use server"`) di dalam folder `src/actions/` untuk semua operasi Create, Update, Delete ke Cloudflare D1.
  - JANGAN membuat Route Handlers (`app/api/`) kecuali mutlak diperlukan untuk webhook.
- **State Interaktif:** Gunakan `"use client"` hanya pada komponen terkecil yang membutuhkan hooks UI (`useState`) atau layanan Firebase Realtime.

## 3. Gaya Penulisan & Workflow
- Tulis variabel dan fungsi dalam bahasa Inggris, tetapi UI/teks yang dilihat pengguna dalam Bahasa Indonesia.
- Jangan berhalusinasi membuat tabel database. Rujuk ke `DATABASE_SCHEMA.md`.
- Jika disuruh membuat UI mock/tiruan, JANGAN hubungkan ke API/Database terlebih dahulu. Buat UI statis yang rapi.
- 
