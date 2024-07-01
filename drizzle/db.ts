import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import envs from '../envs';
import * as schemas from './schemas'

const client = createClient({ url: envs.TURSO_DATABASE_URL, authToken: envs.TURSO_TOKEN });

export const db = drizzle(client, {
  schema: schemas
});