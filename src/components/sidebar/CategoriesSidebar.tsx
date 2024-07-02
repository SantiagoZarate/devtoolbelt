import { CategoriesList } from "@/components/sidebar/CategoriesList";
import { Text } from "@/components/ui/Text";
import categoryAPI from '@/api/category'

export async function CategoriesSidebar() {
  const categories = await categoryAPI.getAll()

  return (
    <aside className="fixed h-full left-0 w-[300px] border-r border-border">
      <header className="p-4">
        <Text>Categories:</Text>
      </header>
      <CategoriesList categories={categories} />
    </aside>
  )
}
