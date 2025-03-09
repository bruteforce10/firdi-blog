"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Facebook, Instagram, Youtube } from "lucide-react"
import { useTheme } from "next-themes"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import AuthLink from "./AuthLink"


export default function Navbar() {
  const {  setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark"
    setTheme(newTheme)
  }

 
  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="hidden md:flex items-center space-x-4">
            <div className="w-5 h-5" />
            <div className="w-5 h-5" />
            <div className="w-5 h-5" />
            <div className="w-5 h-5" />
          </div>

          {/* Placeholder untuk mobile menu */}
          <div className="md:hidden w-8 h-8" />

          {/* Placeholder untuk logo */}
          <div className="text-xl font-bold">lamablog</div>

          {/* Placeholder untuk navigation dan theme toggle */}
          <div className="flex items-center space-x-4">
            <div className="w-8 h-4" />
            <div className="hidden md:flex items-center space-x-4">
              <div className="w-16 h-4" />
              <div className="w-16 h-4" />
              <div className="w-16 h-4" />
              <div className="w-16 h-4" />
            </div>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Social Media Icons - Hidden on mobile */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="#" className="text-foreground hover:text-primary">
            <Facebook size={20} />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="#" className="text-foreground hover:text-primary">
            <Instagram size={20} />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="#" className="text-foreground hover:text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-tiktok"
            >
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
            </svg>
            <span className="sr-only">TikTok</span>
          </Link>
          <Link href="#" className="text-foreground hover:text-primary">
            <Youtube size={20} />
            <span className="sr-only">YouTube</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[240px] sm:w-[300px]">
            <div className="flex flex-col gap-6 py-6">
              <Link href="/" className="text-xl font-bold">
                lamablog
              </Link>
              <nav className="flex flex-col gap-4">
                <Link href="/" className="hover:text-primary">
                  Homepage
                </Link>
                <Link href="/contact" className="hover:text-primary">
                  Contact
                </Link>
                <Link href="/about" className="hover:text-primary">
                  About
                </Link>
                <AuthLink />
              </nav>
              <div className="flex flex-col gap-2">
                <div className="text-sm font-medium">Follow us</div>
                <div className="flex gap-4">
                  <Link href="#" className="text-foreground hover:text-primary">
                    <Facebook size={20} />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link href="#" className="text-foreground hover:text-primary">
                    <Instagram size={20} />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link href="#" className="text-foreground hover:text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-tiktok"
                    >
                      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                    </svg>
                    <span className="sr-only">TikTok</span>
                  </Link>
                  <Link href="#" className="text-foreground hover:text-primary">
                    <Youtube size={20} />
                    <span className="sr-only">YouTube</span>
                  </Link>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          lamablog
        </Link>

        {/* Navigation and Dark Mode Toggle */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <Switch checked={resolvedTheme === "dark"} onCheckedChange={toggleTheme} aria-label="Toggle dark mode" />
          </div>
          <nav className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-sm hover:text-primary">
              Homepage
            </Link>
            <Link href="/contact" className="text-sm hover:text-primary">
              Contact
            </Link>
            <Link href="/about" className="text-sm hover:text-primary">
              About
            </Link>
            <AuthLink />
          </nav>
        </div>
      </div>
    </header>
  )
}

