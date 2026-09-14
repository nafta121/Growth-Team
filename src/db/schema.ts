import { sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const fasilitator = sqliteTable('fasilitator', {
  id: text('id').primaryKey(),
  firebase_uid: text('firebase_uid').unique().notNull(),
  nama: text('nama').notNull(),
  foto_url: text('foto_url'),
});
