import type { Config } from "drizzle-kit";
import envs from "./envs";

export default {
  schema: "./drizzle/schemas.ts",
  out: "./drizzle/migrations",
  dialect: "sqlite",
  driver: "turso",
  dbCredentials: {
    url: envs.TURSO_DATABASE_URL,
    authToken: envs.TURSO_TOKEN,
  },
} satisfies Config;