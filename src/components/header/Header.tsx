import { WrenchMiniIcon } from "../icons/WrenchMiniIcon";
import { Text } from "../ui/Text";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function Header() {
  return (
    <header className="sticky z-50 top-0 bg-background w-full flex justify-between items-center p-2 border-b border-border">
      <section className="p-4 flex items-center gap-2">
        <span className="p-2 bg-card border border-border rounded-lg text-primary">
          <WrenchMiniIcon />
        </span>
        <Text>DevToolsBelt</Text>
      </section>
      <section>
        <ThemeSwitcher />
      </section>
    </header>
  )
}