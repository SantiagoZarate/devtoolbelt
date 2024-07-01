import { CategoryAPI } from "@/types/categoryAPI";
import { db } from "../../drizzle/db";
import envs from "../../envs";

const categoryAPI: CategoryAPI = {
  async getAll() {
    return db.query.categories.findMany()
  },
}

const categoryAPIDev: CategoryAPI = {
  async getAll() {
    return [
      {
        id: 1,
        name: "testing"
      },
      {
        id: 2,
        name: "performance"
      },
      {
        id: 3,
        name: "accessibility"
      },
      {
        id: 4,
        name: "debug"
      },
    ]
  },
}

export default envs.MODE === "dev" ? categoryAPIDev : categoryAPI