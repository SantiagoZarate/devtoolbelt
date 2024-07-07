"use client"

import { motion } from "framer-motion";

export function FloatingImages() {
  return (
    <div className="relative bg-emerald-50">
      <motion.picture
        initial={{
          opacity: 0,
          filter: "blur(5px)"
        }}
        animate={{
          opacity: 1,
          filter: "blur(0px)"
        }}
        className="z-40 shadow-2xl translate-x-20 translate-y-28 h-64 aspect-video absolute">
        <img className="w-full h-full object-cover rounded-xl overflow-hidden" src="images/squoosh.jpeg" alt="" />
      </motion.picture>
      <picture className="z-10 shadow-xl -translate-x-44 h-64 aspect-video absolute">
        <img className="w-full h-full object-cover rounded-xl overflow-hidden" src="images/squoosh.jpeg" alt="" />
      </picture>
      <picture className="z-0 shadow translate-x-64 -translate-y-32 h-64 aspect-video absolute">
        <img className="w-full h-full object-cover rounded-xl overflow-hidden" src="images/squoosh.jpeg" alt="" />
      </picture>
    </div>
  )
}
