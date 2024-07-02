import { CategoriesSidebar } from "@/components/sidebar/CategoriesSidebar";
import { ToolsSearch } from "@/components/tool/ToolsSearch";
import toolAPI from "@/api/tool";
import { ToolWithCategories } from "@/types/tool";

export default async function Home() {
  const tools: ToolWithCategories[] = await toolAPI.getToolsWithCategories()

  return (
    <main className="relative flex h-full">
      <CategoriesSidebar />
      <section className="w-full ml-[300px]">
        <ToolsSearch tools={tools} />
      </section>
    </main>
  )
}