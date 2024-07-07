"use client"

import { motion } from "framer-motion";

export function FloatingImages() {
  return (
    <div className="relative">
      <AnimatedFloatingImage position="back" src="images/squoosh.jpeg" />
      <AnimatedFloatingImage position="front" src="images/hoppscotch.png" />
      <AnimatedFloatingImage position="left" src="images/lighthouse.png" />
    </div>
  )
}

interface Props {
  position: "left" | "back" | "front";
  src: string
}

function AnimatedFloatingImage({ position, src }: Props) {
  let spaceStyle;

  if (position === "front") {
    spaceStyle = "z-40 translate-x-20 translate-y-28"
  } else if (position === "back") {
    spaceStyle = "z-0 translate-x-64 -translate-y-32"
  } else {
    spaceStyle = "z-10 -translate-x-44"
  }

  return (
    <motion.picture
      initial={{
        opacity: 0,
        filter: "blur(5px)",
      }}
      animate={{
        opacity: 1,
        filter: "blur(0px)",
      }}
      className={`h-64 aspect-video absolute ${spaceStyle}`}>
      <img className="w-full h-full shadow-2xl object-cover rounded-xl overflow-hidden" src={src} alt="" />
    </motion.picture>
  )
}