import { InferSelectModel } from "drizzle-orm";
import { tools } from "../../drizzle/schemas";

export type Tool = InferSelectModel<typeof tools>

export interface ToolWithCategories extends Tool {
  categories: string[]
}