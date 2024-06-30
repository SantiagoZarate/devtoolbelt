import { ArrowRightTopMicroIcon } from "@/components/icons/ArrowRightTopMicroIcon"
import { Text } from "@/components/ui/Text"
import { Item } from "@/types/item"
import Link from "next/link"

interface Props {
  items: Item[]
}

export function ItemsList({ items }: Props) {
  return (
    <ul className="w-full grid grid-cols-responsive gap-6 p-6">
      {
        items.map(item => (
          <Link
            href={"https://youtube.com"}
            className="group aspect-[3/2] grid grid-rows-5 hover:shadow-md transition-shadow duration-300 shadow-sm rounded-xl border border-border">
            <div className="row-span-3 border-b border-border"></div>
            <footer className="row-span-2 p-4 flex flex-col gap-2">
              <Text>{item.name}</Text>
              <Text intent={"regular"}>{item.description}</Text>
              <div className="group flex items-center gap-1">
                <Text size={"small"} hoverable>Go to page</Text>
                <span className="group-hover:-translate-y-[2px] group-hover:translate-x-[2px] transition duration-150 ">
                  <ArrowRightTopMicroIcon />
                </span>
              </div>
            </footer>
          </Link>
        ))
      }
    </ul>
  )
}
