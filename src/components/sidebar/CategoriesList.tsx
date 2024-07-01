"use client"

import { AnimatePresence } from "framer-motion";
import { GreenDot } from "../GreenDot";
import { useState } from "react";
import { Text } from "../ui/Text";
import { Category } from "@/types/category";

interface Props {
  categories: Category[]
}

export function CategoriesList({ categories }: Props) {
  const [selected, setSelected] = useState<string[]>([])

  const handleOnSelect = (category: string) => {
    setSelected((prevState) => {
      return prevState.includes(category)
        ? prevState.filter(c => c !== category)
        : [...prevState, category]
    })
  }
  return (
    <ul className="flex flex-col">
      {
        categories.map(c => (
          <button
            key={c.id}
            onClick={() => handleOnSelect(c.name)}
            className="w-full p-4 cursor-pointer hover:bg-secondary transition flex justify-between items-center">
            <Text intent={"title"}>
              {c.name}
            </Text>
            <AnimatePresence>
              {selected.includes(c.name) &&
                <GreenDot />
              }
            </AnimatePresence>
          </button>
        ))
      }
    </ul>
  )
}
