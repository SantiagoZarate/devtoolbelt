"use client"

import { ArrowRightTopMicroIcon } from "@/components/icons/ArrowRightTopMicroIcon"
import { StarMicroIcon } from "@/components/icons/StarMicroIcon"
import { SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, Sheet } from "@/components/ui/sheet"
import { Item } from "@/types/item"
import { Text } from "@/components/ui/Text"

interface Props {
  items: Item[]
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
                    <Text intent={"regular"}>{item.description}</Text>
                  </section>
                </div>
              </SheetTrigger>
              <footer className="flex border-t divide-x border-border">
                <a href={"https://youtube.com"} className="group flex-1 justify-center group flex items-center gap-1 px-4 py-4 hover:bg-secondary transition">
                  <Text size={"small"} hoverable>Go to page</Text>
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
