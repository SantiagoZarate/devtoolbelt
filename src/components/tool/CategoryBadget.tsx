import { Text } from "../ui/Text"

interface Props {
  content: string
}
const getColor = (category: string) => {
  switch (category) {
    case "test":
      return "hsl(120deg, 50%, 50%)"
    case "performance":
      return "hsl(300deg, 80%, 50%)"
    case "SEO":
      return "hsl(0deg, 0%, 80%)"
    case "accesibility":
      return "hsl(120deg, 40%, 50%)"
    case "debug":
      return "hsl(300deg, 50%, 50%)"
    default:
      return "hsl(0deg, 80%, 50%)"
  }
}

export function CategoryBadget({ content }: Props) {
  return (
    <span className="px-2 py-1 rounded-full border border-border" style={{ borderColor: getColor(content) }}>
      <Text
        style={{ color: getColor(content), }}
        size={"small"}
        intent={"details"}>
        {content}
      </Text>
    </span>
  )
}
