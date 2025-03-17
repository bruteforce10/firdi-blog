"use client"
import { Switch } from "@/components/ui/switch"
import { Sun, Moon } from "lucide-react"

export default function ThemeToggle({resolvedTheme, setTheme}) {
  const toggleTheme = () => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark"
    setTheme(newTheme)
  }

  return (
    <div className="flex items-center space-x-2">
      <Sun
        className={`h-[1.2rem] w-[1.2rem] transform transition-all duration-500 
          ${resolvedTheme === "dark" 
            ? "opacity-50 scale-75 rotate-[-120deg]" 
            : "opacity-100 scale-100 rotate-0"
          }`}
      />
      <Switch 
        checked={resolvedTheme === "dark"} 
        onCheckedChange={toggleTheme} 
        aria-label="Toggle dark mode" 
        className="transition-transform duration-200 hover:scale-105"
      />
      <Moon
        className={`h-[1.2rem] w-[1.2rem] transform transition-all duration-500
          ${resolvedTheme === "dark" 
            ? "opacity-100 scale-100 rotate-0" 
            : "opacity-50 scale-75 rotate-120"
          }`}
      />
    </div>
  )
}