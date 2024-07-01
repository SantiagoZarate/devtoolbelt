import { CategoriesSidebar } from "@/components/sidebar/CategoriesSidebar";
import { ToolsSearch } from "@/components/tool/ToolsSearch";
import { getToolsWithCategories } from "@/data/querys";
import { ToolWithCategories } from "@/types/tool";

export default async function Home() {
  const tools: ToolWithCategories[] = await getToolsWithCategories()

  return (
    <main className="flex h-full">
      <CategoriesSidebar />
      <section className="w-full">
        <ToolsSearch tools={tools} />
      </section>
    </main>
  )
}