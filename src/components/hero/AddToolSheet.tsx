"use client"

import { LeftArrowMicroIcon } from "../icons/LeftArrowMicroIcon";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";

export function AddToolSheet() {
  return (
    <Sheet>
      <SheetTrigger className="w-fit">
        <Button className="w-fit px-8 uppercase font-bold group flex items-center gap-2">
          Add tool
          <span className="group-hover:translate-x-1 duration-200 transition-transform">
            <LeftArrowMicroIcon />
          </span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            add a new tool
          </SheetTitle>
          <SheetDescription className="flex flex-col gap-4">
            TODO: add form here
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
