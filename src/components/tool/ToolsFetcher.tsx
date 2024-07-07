import { ToolWithCategories } from "@/types/tool"
import { ToolsSearch } from "./ToolsSearch"
import toolAPI from '@/api/tool'

export async function ToolsFetcher() {
  const tools: ToolWithCategories[] = await toolAPI.getToolsWithCategories()
  return (
    <ToolsSearch tools={tools} />
  )
}
