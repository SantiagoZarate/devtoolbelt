import { cva, VariantProps } from "class-variance-authority"
import { ComponentProps } from "react"

const styles = cva(
  "",
  {
    variants: {
      intent: {
        regular: "text-base text-primary",
        details: "uppercase font-bold text-secondary",
        title: "tracking-wider capitalize",
      },
      hoverable: {
        true: "group-hover:opacity-100 opacity-50 transition-opacity"
      },
      size: {
        small: "text-xs",
        regular: "text-base",
        big: "text-2xl"
      }
    },
    defaultVariants: {
      intent: "regular",
      hoverable: false,
      size: "regular"
    }
  }
)

type Props = VariantProps<typeof styles> & ComponentProps<"p">

export function Text({ intent, hoverable, size, ...args }: Props) {
  return (
    <p className={styles({ intent, hoverable, size })} {...args} />
  )
}
