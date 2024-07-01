import { ToolWithCategories } from "@/types/tool";
import { eq } from "drizzle-orm";
import { db } from "../../drizzle/db";
import { categories, categoriesToTools, tools } from "../../drizzle/schemas";
import envs from "../../envs";
import { ToolAPI } from "@/types/toolAPI";

const toolsAPI = {
  getToolsWithCategories: async () => {
    const rows = await db
      .select({
        toolId: tools.id,
        toolName: tools.name,
        description: tools.description,
        imageURL: tools.imageURL,
        author: tools.author,
        href: tools.href,
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
          href: row.href,
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
}

const toolsAPIDev: ToolAPI = {
  getToolsWithCategories: async () => {
    const data: ToolWithCategories[] = [
      {
        name: "This is a tool",
        author: "Some Random Dude",
        imageURL: "",
        href: "",
        categories: ["debug"],
        description: "asas",
        id: 1
      },
      {
        name: "This is a tool",
        author: "Some Random Dude",
        imageURL: "",
        href: "",
        categories: ["debug"],
        description: "asas",
        id: 2
      },
      {
        name: "This is a tool",
        author: "Some Random Dude",
        imageURL: "",
        href: "",
        categories: ["debug"],
        description: "asas",
        id: 3
      },
      {
        name: "This is a tool",
        author: "Some Random Dude",
        imageURL: "",
        href: "",
        categories: ["debug"],
        description: "asas",
        id: 4
      },
      {
        name: "This is a tool",
        author: "Some Random Dude",
        imageURL: "",
        href: "",
        categories: ["debug"],
        description: "asas",
        id: 5
      },
      {
        name: "This is a tool",
        author: "Some Random Dude",
        imageURL: "",
        href: "",
        categories: ["debug"],
        description: "asas",
        id: 6
      },
    ]
    return data
  }
}

export default envs.MODE === "dev" ? toolsAPIDev : toolsAPI