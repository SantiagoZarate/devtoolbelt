"use client"

import { ArrowRightTopMicroIcon } from "@/components/icons/ArrowRightTopMicroIcon"
import { StarMicroIcon } from "@/components/icons/StarMicroIcon"
import { Text } from "@/components/ui/Text"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ToolWithCategories } from "@/types/tool"

interface Props {
  items: ToolWithCategories[]
}

export function ItemsList({ items }: Props) {
  return (
    <ul className="w-full grid grid-cols-responsive gap-6 p-6">
      {
        items.map((item, index) => (
          <Sheet key={index}>
            <article className=" hover:shadow-md transition-shadow duration-300 shadow-sm rounded-xl overflow-hidden border border-border">
              <SheetTrigger className="w-full" >
                <div className="w-full grid grid-rows-5">
                  <div className="row-span-3 border-b border-border"></div>
                  <section className="row-span-2 p-4 items-start flex flex-col gap-2">
                    <Text>{item.name}</Text>
                    <div className="flex gap-2">
                      {
                        item.categories.map(cat => (
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
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete your account
                  and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>

        ))
      }
    </ul>
  )
}
