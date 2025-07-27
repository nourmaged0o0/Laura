"use client"

import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export default function Footer() {
  const { t, language } = useLanguage()

  return (
    <footer className="bg-gradient-to-r from-[#256734] to-emerald-700 text-white py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M15 15c0-2.8-2.2-5-5-5s-5 2.2-5 5 2.2 5 5 5 5-2.2 5-5zm10 0c0-2.8-2.2-5-5-5s-5 2.2-5 5 2.2 5 5 5 5-2.2 5-5z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl">
              <Image
                src="/images/logo.png"
                alt="Laura Farms Logo"
                width={120}
                height={60}
                className="h-10 w-auto filter brightness-0 invert"
              />
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-green-100 font-medium">
              © {new Date().getFullYear()} {language === "ar" ? "مزارع لورا" : "Laura Farms"}. {t("footerText")}.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-20 h-20 bg-white/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 bg-emerald-300/10 rounded-full blur-lg"></div>
    </footer>
  )
}
