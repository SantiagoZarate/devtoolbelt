"use client"

import { GreenDot } from "@/components/GreenDot";
import { Text } from "@/components/ui/Text";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

export function CategoriesSidebar() {
  const [selected, setSelected] = useState<string[]>([])

  const handleOnSelect = (category: string) => {
    setSelected((prevState) => {
      return prevState.includes(category)
        ? prevState.filter(c => c !== category)
        : [...prevState, category]
    })
  }

  return (
    <aside className="w-[300px] border-r border-border">
      <header className="p-4">
        <Text>Categories:</Text>
      </header>
      <ul className="flex flex-col">
        {
          ["test", "performance", "seo", "debug", "ux/ui"].map(c => (
            <button
              key={c}
              onClick={() => handleOnSelect(c)}
              className="w-full p-4 cursor-pointer hover:bg-secondary transition flex justify-between items-center">
              <Text intent={"title"} key={c}>
                {c}
              </Text>
              <AnimatePresence>
                {selected.includes(c) &&
                  <GreenDot />
                }
              </AnimatePresence>
            </button>
          ))
        }
      </ul>
    </aside>
  )
}
