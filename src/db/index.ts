import { drizzle } from 'drizzle-orm/d1';
import * as schema from './schema';

export interface Env {
  DB: import('@cloudflare/workers-types').D1Database;
}

export function createDb(env: Env) {
  return drizzle(env.DB, { schema });
}
