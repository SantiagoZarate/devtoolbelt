import { ToolWithCategories } from "./tool";

export interface ToolAPI {
  getToolsWithCategories: () => Promise<ToolWithCategories[]>
}