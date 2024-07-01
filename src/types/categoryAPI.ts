import { Category } from "./category";

export interface CategoryAPI {
  getAll: () => Promise<Category[]>
}