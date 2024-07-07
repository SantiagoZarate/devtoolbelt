import { HeroSection } from "@/components/hero/HeroSection";
import { CategoriesSidebar } from "@/components/sidebar/CategoriesSidebar";
import { ToolsListLoader } from "@/components/tool/ToolLoader";
import { ToolsFetcher } from "@/components/tool/ToolsFetcher";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <section className="relative flex">
        <CategoriesSidebar />
        <section className="w-full border-l border-border">
          <Suspense fallback={<ToolsListLoader />}>
            <ToolsFetcher />
          </Suspense>
        </section>
      </section>
    </main>
  )
}