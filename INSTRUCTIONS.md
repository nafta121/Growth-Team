# Tech Stack & Aturan
- Framework: Next.js (App Router).
- Database: Cloudflare D1. Gunakan Drizzle ORM untuk query database.
- UI/Styling: Tailwind CSS dan shadcn/ui.
- Runtime: Aplikasi akan di-deploy ke Cloudflare Pages (Edge Runtime). JANGAN gunakan modul native Node.js (seperti `fs` atau `crypto`). Gunakan Web APIs standar.
- Data Fetching: Gunakan Server Actions untuk mutasi data.
