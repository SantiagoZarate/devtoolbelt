"use client"

import { useState } from "react";
import { SearchMiniIcon } from "../icons/SearchMiniIcon";
import { ToolsList } from "./ToolsList";
import { ToolWithCategories } from "@/types/tool";

interface Props {
  tools: ToolWithCategories[]
}

export function ToolsSearch({ tools }: Props) {
  const [search, setSearch] = useState("")
  console.log(tools)

  const handleOnChange = (string: string) => {
    if (string.startsWith(" ")) {
      return
    }
    setSearch(string)
  }

  const filteredTools = tools.filter(tool => !search || tool.name.toLowerCase().startsWith(search.toLowerCase()))

  return (
    <>
      <div className="sticky z-50 top-[87px] bg-background flex items-center w-full border-b border-border px-6">
        <SearchMiniIcon />
        <input
          className="w-full py-6 px-2 bg-transparent"
          type="text"
          value={search}
          onChange={(e) => handleOnChange(e.target.value)}
          placeholder="i love using devtoolsbelt!" />
      </div>
      <ToolsList tools={filteredTools} />
    </>
  )
}
