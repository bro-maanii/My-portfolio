"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  function handleClick() {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  if (!mounted) {
    return null
  }

  return (
    <Button variant="outline"  size="icon" onClick={handleClick} className="rounded-lg p-2 hover:bg-purple-50 transition-colors duration-200 bg-transparent shadow-none border-none">
      <Sun className="h-6 w-6 svg rotate-0 scale-125 transition-all dark:-rotate-90 dark:scale-0 text-purple-600" />
      <Moon className="absolute h-6 w-6 svg rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-125 dark:bg-transparent text-purple-600" />
      <span className="sr-only"></span>
    </Button>
  )
}