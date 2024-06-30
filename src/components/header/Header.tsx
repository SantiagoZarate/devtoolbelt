import { Text } from "../ui/Text";

export function Header() {
  return (
    <header className="w-full flex justify-between items-center p-2 border-b border-border">
      <section className="p-4">
        <Text>DevToolsBelt</Text>
      </section>
    </header>
  )
}
