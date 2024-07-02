"use client"

import { DEFAULT_TOOL_IMAGE } from "@/data/constants";
import { ToolWithCategories } from "@/types/tool";
import { ArrowRightTopMicroIcon } from "../icons/ArrowRightTopMicroIcon";
import { StarMicroIcon } from "../icons/StarMicroIcon";
import { Text } from "../ui/Text";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { CategoryBadget } from "./CategoryBadget";
import { WrenchMiniIcon } from "../icons/WrenchMiniIcon";

interface Props extends ToolWithCategories {
}

export function Tool({ author, description, id, imageURL, name, categories, href }: Props) {
  return (
    <Sheet>
      <article className="hover:-translate-y-1 hover:shadow-md transition duration-300 shadow-sm rounded-xl overflow-hidden border border-border">
        <SheetTrigger className="w-full" >
          <div className="w-full grid grid-cols-3">
            <image className="relative col-span-1 flex items-center justify-center ">
              <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:linear-gradient(90deg,#000_60%,transparent_100%)]" />
              {
                imageURL
                  ?
                  <img
                    className="relative z-10 bg-secondary rounded-full size-16"
                    src={imageURL!}
                    alt="" />
                  :
                  <span className="relative z-10 rounded-full bg-secondary size-16 flex items-center justify-center">
                    <WrenchMiniIcon />
                  </span>
              }
            </image>
            <section className="col-span-2 p-4 items-start flex flex-col gap-2">
              <Text>{name}</Text>
              <div className="flex gap-2">
                {
                  categories.map(category => (
                    <CategoryBadget
                      key={category}
                      content={category} />
                  ))
                }
              </div>
            </section>
          </div>
        </SheetTrigger>
        <footer className="flex border-t divide-x border-border">
          <a href={href} target="_blank" className="group flex-1 justify-center group flex items-center gap-1 px-4 py-4 hover:bg-secondary transition">
            <Text size={"small"} hoverable>Open</Text>
            <span className="group-hover:-translate-y-[2px] group-hover:translate-x-[2px] group-hover:opacity-100 opacity-50 transition duration-150 ">
              <ArrowRightTopMicroIcon />
            </span>
          </a>
          <div className="group flex-1 justify-center group flex items-center gap-1 px-4 py-4 hover:bg-secondary transition">
            <Text size={"small"} hoverable>Add to favorites</Text>
            <span className="group-hover:opacity-100 opacity-50 transition">
              <StarMicroIcon />
            </span>
          </div>
        </footer>
      </article>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            {name}
          </SheetTitle>
          <SheetDescription className="flex flex-col gap-4">
            <Text>by {author}</Text>
            {description}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
