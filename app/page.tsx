"use client"
import { Navigation } from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"

export default function Home() {
  const { t, language } = useLanguage()
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection t={t} language={language} />
      <AboutSection t={t} language={language} />
      <ContactSection t={t} language={language} />
      <Footer t={t} language={language} />
    </main>
  )
}
