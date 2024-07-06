import { CategoriesSidebar } from "@/components/sidebar/CategoriesSidebar";
import { ToolsSearch } from "@/components/tool/ToolsSearch";
import toolAPI from "@/api/tool";
import { ToolWithCategories } from "@/types/tool";
import { HeroSection } from "@/components/hero/HeroSection";

export default async function Home() {
  const tools: ToolWithCategories[] = await toolAPI.getToolsWithCategories()

  return (
    <main className="flex flex-col">
      <HeroSection />
      <section className="relative flex">
        <CategoriesSidebar />
        <section className="w-full border-l border-border">
          <ToolsSearch tools={tools} />
        </section>
      </section>
    </main>
  )
}