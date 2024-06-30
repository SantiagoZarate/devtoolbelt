import { ItemsList } from "./itemsList";
import { Item } from "@/types/item";
import { items } from "@/data/items";
import { CategoriesSidebar } from "./CategoriesSidebar";
import { SearchMiniIcon } from "@/components/icons/SearchMiniIcon";

export default async function Home() {
  let data: Item[] = items

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
        <ItemsList items={data} />
      </section>
    </main>
  )
}