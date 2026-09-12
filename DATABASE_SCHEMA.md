# Arsitektur Database (Dual-Storage)

Proyek ini menggunakan dua jenis penyimpanan. Patuhi batas pemisahan ini:

## A. Cloudflare D1 (Via Drizzle ORM - SQLite)
Digunakan untuk data operasional utama yang terstruktur dan relasional.
1. **`fasilitator`**: `id` (text, PK), `firebase_uid` (text, Unique - penghubung ke Auth Firebase), `nama` (text), `foto_url` (text).
2. **`acara`**: `id` (text, PK, UUID), `nama_acara` (text), `tanggal_mulai` (integer/timestamp), `tanggal_selesai` (integer/timestamp), `deskripsi` (text).
3. **`sesi_agenda` (Rundown)**: `id` (text, PK, UUID), `acara_id` (text, FK ke acara), `nama_sesi` (text), `waktu_mulai` (text HH:mm), `waktu_selesai` (text HH:mm), `urutan_index` (integer - untuk urutan drag-and-drop UI), `status` (text).

## B. Firebase Firestore & Storage (NoSQL)
Digunakan KHUSUS untuk fitur Chat agar *real-time* dan tidak menghabiskan kuota Cloudflare D1.
1. **Firebase Auth**: Menangani login.
2. **Koleksi `direct_messages`**: Obrolan pribadi antar dua fasilitator.
3. **Koleksi `event_chats`**: Obrolan grup (Document ID menggunakan `acara_id` dari D1).
   - Subkoleksi `messages`: `sender_uid`, `text`, `lampiran_url`, `timestamp`.
4. **Firebase Storage**: Menyimpan file PDF rundown / foto lampiran.
