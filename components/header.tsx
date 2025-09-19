"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // No longer need to attach scroll event listeners for anchor links
    // as navigation is handled by Next.js router.
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Our Services" },
    { href: "/why-biomass", label: "Why Biomass?" },
    { href: "/impact", label: "Impact" },
    { href: "/about", label: "About" },
    { href: "/faq", label: "FAQ" },
  ]

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center p-2 rounded-lg bg-white border border-gray-200">
              <Image
                src="/soulfuel-logo.png"
                alt="Soulfuel Green Energy"
                width={120}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-gray-700 hover:text-green-500 transition-colors font-medium ${
                  pathname === item.href ? "text-green-500 border-b-2 border-green-500" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="bg-lime-400 hover:bg-lime-500 text-gray-900 font-semibold">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center space-x-4"></div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-green-500 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button asChild className="w-full bg-lime-400 hover:bg-lime-500 text-gray-900 font-semibold">
                  <Link href="/contact">Get a Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
