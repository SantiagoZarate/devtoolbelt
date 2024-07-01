import { InferSelectModel } from "drizzle-orm";
import { categories } from "../../drizzle/schemas";

export type Category = InferSelectModel<typeof categories>