import { Variants, motion } from 'framer-motion'
import React from 'react'

const greenDotVariants: Variants = {
  visible: {
    scale: 1,
    transition: {
      type: "spring"
    }
  },
  hidden: {
    scale: 0,
    transition: {
      type: "spring"
    }
  }
}

export const GreenDot = React.forwardRef<HTMLDivElement, {}>((_, ref) => (
  <motion.div
    ref={ref}
    variants={greenDotVariants}
    animate="visible"
    initial="hidden"
    exit="hidden"
    className="size-2 bg-green-500 rounded-full" />
))



