import { Text } from "@/components/ui/Text";

export function CategoriesSidebar() {
  return (
    <aside className="w-[300px] border-r border-border">
      <header className="p-4">
        <Text>Categories:</Text>
      </header>
      <ul className="flex flex-col">
        {
          ["test", "performance", "seo", "debug", "ux/ui"].map(n => (
            <div className="w-full p-4 cursor-pointer hover:bg-secondary transition">
              <Text intent={"title"} key={n}>
                {n}
              </Text>
            </div>
          ))
        }
      </ul>
    </aside>
  )
}
