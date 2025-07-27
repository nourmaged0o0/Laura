"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { LanguageToggle } from "./language-toggle"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import clsx from "clsx"

export function Navigation() {
  const { t, language } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const isRTL = language === "ar"

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav
  className={clsx(
    " w-screen self-center fixed z-50 transition-all duration-500 border-b",
    scrolled
      ? "top-3 scale-90 bg-[#17ff2e07] backdrop-blur-md shadow-md border-[#256734]/10 rounded-2xl"
      : "top-0 w-full bg-transparent border-transparent"
  )}
>

      <div className="max-w-7xl  px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="p-2 bg-transparent rounded-lg">
              <Image src="/images/logo.png" alt="Laura Farms Logo" width={80} height={80} />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse ">
            {["home", "about", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-gray-700 hover:text-[#256734] px-3 py-2 text-sm font-medium transition-all duration-300 relative group "
              >
                {t(section)}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#256734] to-emerald-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            <LanguageToggle />
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#256734] hover:bg-[#256734]/10"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/80 backdrop-blur-md border-t border-[#256734]/10 shadow-sm">
              {["home", "about", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#256734] hover:bg-[#256734]/5 w-full text-start rounded-md transition-all duration-300"
                >
                  {t(section)}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
