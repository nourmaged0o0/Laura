"use client"

import { useState } from "react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { LanguageToggle } from "./language-toggle"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const { t, language } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isRTL = language === "ar"

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-[#256734]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="p-2 bg-gradient-to-br from-[#256734]/10 to-emerald-500/10 rounded-lg">
              <Image src="/images/logo.png" alt="Laura Farms Logo" width={120} height={60} className="h-10 w-auto" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-[#256734] px-3 py-2 text-sm font-medium transition-all duration-300 relative group"
            >
              {t("home")}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#256734] to-emerald-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-[#256734] px-3 py-2 text-sm font-medium transition-all duration-300 relative group"
            >
              {t("about")}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#256734] to-emerald-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-[#256734] px-3 py-2 text-sm font-medium transition-all duration-300 relative group"
            >
              {t("contact")}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#256734] to-emerald-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            <LanguageToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageToggle />
            <Button
              // variant="ghost"
              // size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#256734] shadow-sm hover:bg-[#256734]/10"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md border-t border-[#256734]/10">
              <button
                onClick={() => scrollToSection("home")}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#256734] hover:bg-[#256734]/5 w-full text-start rounded-md transition-all duration-300"
              >
                {t("home")}
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#256734] hover:bg-[#256734]/5 w-full text-start rounded-md transition-all duration-300"
              >
                {t("about")}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#256734] hover:bg-[#256734]/5 w-full text-start rounded-md transition-all duration-300"
              >
                {t("contact")}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
