import { SearchMiniIcon } from "@/components/icons/SearchMiniIcon";
import { getToolsWithCategories } from "@/data/querys";
import { ToolWithCategories } from "@/types/tool";
import { CategoriesSidebar } from "./CategoriesSidebar";
import { ItemsList } from "./itemsList";

export default async function Home() {
  const tools: ToolWithCategories[] = await getToolsWithCategories()

  return (
    <main className="flex h-full">
      <CategoriesSidebar />
      <section className="w-full">
        <div className="flex items-center w-full border-b border-border px-6">
          <SearchMiniIcon />
          <input
            className="w-full py-6 px-2"
            type="text"
            placeholder="i love using devtoolsbelt!" />
        </div>
        <ItemsList items={tools} />
      </section>
    </main>
  )
}