import { Text } from "@/components/ui/Text";
import { ItemsList } from "./itemsList";
import { Item } from "@/types/item";
import { items } from "@/data/items";
import { CategoriesSidebar } from "./CategoriesSidebar";

export default async function Home() {
  let data: Item[] = items

  return (
    <main className="flex h-full">
      <CategoriesSidebar />
      <section className="w-full">
        <Text intent={"title"}>next app</Text>
        <ItemsList items={data} />
      </section>
    </main>
  )
}