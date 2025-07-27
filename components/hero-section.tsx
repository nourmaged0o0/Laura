"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export default function HeroSection() {
  const { t, language } = useLanguage()
  const isRTL = language === "ar"

  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50 min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23256734' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <div className="inline-block mb-6">
            <div className="bg-gradient-to-r from-[#256734] to-emerald-600 bg-clip-text text-transparent">
              <h1 className="text-4xl md:text-6xl font-bold mb-2">{t("heroTitle")}</h1>
            </div>
            <div className="h-1 w-24 bg-gradient-to-r from-[#256734] to-emerald-500 mx-auto rounded-full"></div>
          </div>

          <p className="text-xl md:text-2xl text-[#256734] mb-6 font-medium">{t("heroSubtitle")}</p>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t("heroDescription")}
          </p>

          <Button
            onClick={scrollToAbout}
            size="lg"
            className="bg-gradient-to-r from-[#256734] to-emerald-600 hover:from-[#1e5329] hover:to-emerald-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            {t("learnMore")}
            <ChevronDown className={`ml-2 h-5 w-5 ${isRTL ? "rotate-180" : ""}`} />
          </Button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#256734]/10 to-emerald-500/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-tl from-emerald-400/10 to-[#256734]/5 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 right-20 w-20 h-20 bg-[#256734]/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 left-20 w-28 h-28 bg-emerald-300/10 rounded-full animate-pulse delay-1000"></div>
    </section>
  )
}
