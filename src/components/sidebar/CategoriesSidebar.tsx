import { CategoriesList } from "@/components/sidebar/CategoriesList";
import { Text } from "@/components/ui/Text";
import categoryAPI from '@/api/category'

export async function CategoriesSidebar() {
  const categories = await categoryAPI.getAll()

  return (
    <aside className="sticky h-full top-[87px] left-0 w-[300px]">
      <header className="p-4">
        <Text>Categories:</Text>
      </header>
      <CategoriesList categories={categories} />
    </aside>
  )
}
