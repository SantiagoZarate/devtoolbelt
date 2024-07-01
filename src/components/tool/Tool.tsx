"use client"

import { ToolWithCategories } from "@/types/tool";
import { ArrowRightTopMicroIcon } from "../icons/ArrowRightTopMicroIcon";
import { StarMicroIcon } from "../icons/StarMicroIcon";
import { Text } from "../ui/Text";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";

interface Props extends ToolWithCategories {
}

export function Tool({ author, description, id, imageURL, name, categories }: Props) {
  return (
    <Sheet>
      <article className=" hover:shadow-md transition-shadow duration-300 shadow-sm rounded-xl overflow-hidden border border-border">
        <SheetTrigger className="w-full" >
          <div className="w-full grid grid-rows-5">
            <div className="row-span-3 border-b border-border"></div>
            <section className="row-span-2 p-4 items-start flex flex-col gap-2">
              <Text>{name}</Text>
              <div className="flex gap-2">
                {
                  categories.map(cat => (
                    <span className="px-2 py-1 rounded-full border border-border">
                      <Text size={"small"} intent={"details"}>{cat}</Text>
                    </span>
                  ))
                }
              </div>
            </section>
          </div>
        </SheetTrigger>
        <footer className="flex border-t divide-x border-border">
          <a href={"https://youtube.com"} target="_blank" className="group flex-1 justify-center group flex items-center gap-1 px-4 py-4 hover:bg-secondary transition">
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
          <SheetTitle>{name}</SheetTitle>
          <SheetDescription>
            {description}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
