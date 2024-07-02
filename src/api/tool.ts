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
        imageURL: null,
        href: "",
        categories: ["debug", "test"],
        description: "asas",
        id: 1
      },
      {
        name: "This is a tool",
        author: "Some Random Dude",
        imageURL: "https://media.dev.to/cdn-cgi/image/width=320,height=320,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Forganization%2Fprofile_image%2F1717%2F6c871d12-4248-46f3-a095-07391a4e888d.png",
        href: "",
        categories: ["performance"],
        description: "asas",
        id: 2
      },
      {
        name: "This is a tool",
        author: "Some Random Dude",
        imageURL: null,
        href: "",
        categories: ["SEO"],
        description: "asas",
        id: 3
      },
      {
        name: "This is a tool",
        author: "Some Random Dude",
        imageURL: null,
        href: "",
        categories: ["debug"],
        description: "asas",
        id: 4
      },
      {
        name: "This is a tool",
        author: "Some Random Dude",
        imageURL: null,
        href: "",
        categories: ["test"],
        description: "asas",
        id: 5
      },
      {
        name: "This is a tool",
        author: "Some Random Dude",
        imageURL: "https://img.stackshare.io/service/25685/default_2e64fe33691c39253c2c67f8f84a3c87239bc91e.png",
        href: "",
        categories: ["ui/ux"],
        description: "asas",
        id: 6
      },
    ]
    return data
  }
}

export default envs.MODE === "dev" ? toolsAPIDev : toolsAPI