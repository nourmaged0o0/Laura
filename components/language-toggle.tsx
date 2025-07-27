"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
      className="flex items-center gap-2 border-[#256734]/30 text-[#256734] hover:bg-gradient-to-r hover:from-[#256734] hover:to-emerald-600 hover:text-white hover:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-300 shadow-sm hover:shadow-md"
    >
      <Globe className="h-4 w-4" />
      {language === "ar" ? "EN" : "عربي"}
    </Button>
  )
}
