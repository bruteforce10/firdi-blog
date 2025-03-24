"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import AuthLink from "./AuthLink";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import ThemeToggle from "./atoms/theme-toggle";
import { cn } from "@/lib/utils";
export default function Navbar() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-background ">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          {/* Placeholder untuk mobile menu */}
          <div className="md:hidden w-8 h-8" />

          <Link href="/">
            <Image src="/logo-white.webp" alt="logo" width={100} height={100} />
          </Link>

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
    );
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full backdrop-blur-sm sm:border-b sm:bg-background",
        resolvedTheme === "dark" ? "bg-black/10" : "bg-white/50"
      )}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Mobile Menu Button */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[240px] sm:w-[300px]">
            <nav className="flex flex-col gap-4">
              <Link href="/" className="hover:text-primary">
                Homepage
              </Link>
              <Link href="/about" className="hover:text-primary">
                About
              </Link>
              <AuthLink />
              <Input type="text" placeholder="Search" className="max-w-48" />
            </nav>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <Link
          href="/"
          className="max-md:grow items-center justify-center max-md:flex"
        >
          {resolvedTheme === "dark" ? (
            <Image src="/logo-white.webp" alt="logo" width={100} height={100} />
          ) : (
            <Image src="/logo-black.webp" alt="logo" width={100} height={100} />
          )}
        </Link>

        {/* Navigation and Dark Mode Toggle */}
        <div className="flex items-center space-x-4 ">
          <nav className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-sm hover:text-primary">
              Homepage
            </Link>
            <Link href="/about" className="text-sm hover:text-primary">
              About
            </Link>
            <AuthLink />
          </nav>
        </div>

        <div className="flex md:hidden items-center space-x-4">
          <ThemeToggle resolvedTheme={resolvedTheme} setTheme={setTheme} />
        </div>

        <div className="items-center space-x-4 hidden md:flex">
          <ThemeToggle resolvedTheme={resolvedTheme} setTheme={setTheme} />
          <Input type="text" placeholder="Search" className="max-w-48" />
        </div>
      </div>
    </header>
  );
}
