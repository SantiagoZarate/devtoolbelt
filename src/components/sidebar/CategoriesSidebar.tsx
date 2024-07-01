import { CategoriesList } from "@/components/sidebar/CategoriesList";
import { Text } from "@/components/ui/Text";
import { db } from "../../../drizzle/db";

export async function CategoriesSidebar() {
  const categories = await db.query.categories.findMany()

  return (
    <aside className="w-[300px] border-r border-border">
      <header className="p-4">
        <Text>Categories:</Text>
      </header>
      <CategoriesList categories={categories} />
    </aside>
  )
}
