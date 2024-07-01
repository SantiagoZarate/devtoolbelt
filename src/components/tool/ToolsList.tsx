import { ToolWithCategories } from "@/types/tool"
import { Tool } from "./Tool"

interface Props {
  tools: ToolWithCategories[]
}

export function ToolsList({ tools }: Props) {
  return (
    <ul className="w-full grid grid-cols-responsive gap-6 p-6">
      {
        tools.map(item => (
          <Tool key={item.name} {...item} />
        ))
      }
    </ul>
  )
}
