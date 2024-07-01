import { relations } from "drizzle-orm";
import { text, sqliteTable, integer, primaryKey } from "drizzle-orm/sqlite-core";

export const categories = sqliteTable('categories', {
  id: integer('id').primaryKey(),
  name: text('name').notNull()
});

export const tools = sqliteTable('tools', {
  id: integer('id').primaryKey(),
  name: text('title').notNull(),
  description: text('description').notNull(),
  imageURL: text('imageURL'),
  author: text('author'),
  href: text('href').notNull().default('')
});

export const categoriesToTools = sqliteTable('categories_to_tools', {
  toolId: integer('tool_id').notNull().references(() => tools.id),
  categoryId: integer('category_id').notNull().references(() => categories.id),
},
  (t) => ({
    pk: primaryKey({ columns: [t.toolId, t.categoryId] }),
  }),
);

export const categoriesRelations = relations(categories, ({ many }) => ({
  categoriesToTools: many(categoriesToTools),
}));

export const toolsRelations = relations(tools, ({ many }) => ({
  categoriesToTools: many(categoriesToTools),
}));

export const categoriesToToolsRelations = relations(categoriesToTools, ({ one }) => ({
  category: one(categories, {
    fields: [categoriesToTools.categoryId],
    references: [categories.id],
  }),
  tool: one(tools, {
    fields: [categoriesToTools.toolId],
    references: [tools.id],
  }),
}));