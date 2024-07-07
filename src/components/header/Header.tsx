import { WrenchMiniIcon } from "../icons/WrenchMiniIcon";
import { Text } from "../ui/Text";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function Header() {
  return (
    <header className="sticky z-50 top-0 bg-background w-full flex justify-between items-center py-2 px-4 border-b border-border">
      <section className="py-2 flex items-center gap-2">
        <span className="p-2 bg-card border border-border rounded-lg text-primary">
          <WrenchMiniIcon />
        </span>
        <Text className="font-bold" size={"big"} intent={"title"}>DevToolsBelt</Text>
        <span className="text-xs px-3 py-1 border border-boder bg-secondary rounded-full">
          v1.0.0
        </span>
      </section>
      <section className="flex items-center">
        <ThemeSwitcher />
      </section>
    </header>
  )
}