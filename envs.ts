import { z } from 'zod'
import { config } from 'dotenv'
config({ path: ".env" })

const envsSchema = z.object({
  TURSO_DATABASE_URL: z.string().url(),
  TURSO_TOKEN: z.string()
})

const envs = envsSchema.parse({
  TURSO_DATABASE_URL: process.env.TURSO_DATABASE_URL,
  TURSO_TOKEN: process.env.TURSO_TOKEN,
})

export default envs
