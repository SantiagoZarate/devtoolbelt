import { ToolWithCategories } from "@/types/tool";
import { eq } from "drizzle-orm";
import { db } from "../../drizzle/db";
import { categories, categoriesToTools, tools } from "../../drizzle/schemas";

export async function getToolsWithCategories(): Promise<ToolWithCategories[]> {
  const rows = await db
    .select({
      toolId: tools.id,
      toolName: tools.name,
      description: tools.description,
      imageURL: tools.imageURL,
      author: tools.author,
      categoryId: categories.id,
      categoryName: categories.name
    })
    .from(tools)
    .leftJoin(categoriesToTools, eq(categoriesToTools.toolId, tools.id))
    .leftJoin(categories, eq(categories.id, categoriesToTools.categoryId))
    .all();

  const toolsMap: Record<number, ToolWithCategories> = {};

  for (const row of rows) {
    if (!toolsMap[row.toolId]) {
      toolsMap[row.toolId] = {
        id: row.toolId,
        name: row.toolName,
        description: row.description,
        imageURL: row.imageURL,
        author: row.author,
        categories: []
      };
    }
    toolsMap[row.toolId].categories.push(row.categoryName!);
  }

  return Object.values(toolsMap);
}