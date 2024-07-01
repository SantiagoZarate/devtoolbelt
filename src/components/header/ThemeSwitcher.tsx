"use client"

import useTheme from "next-theme";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return theme === "light"
    ?
    <Button onClick={() => setTheme("dark")}>
      toggle!
    </Button>
    :
    <Button onClick={() => setTheme("light")}>
      toggle!
    </Button>
}
