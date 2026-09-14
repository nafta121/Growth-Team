import { drizzle } from 'drizzle-orm/d1';
import * as schema from './schema';
import type { D1Database } from '@cloudflare/workers-types';

export interface Env {
  DB: D1Database;
}

export function createDb(env: Env) {
  return drizzle(env.DB, { schema });
}
