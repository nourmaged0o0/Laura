"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "ar" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  ar: {
    // Navigation
    home: "الرئيسية",
    about: "من نحن",
    contact: "اتصل بنا",

    // Hero Section
    heroTitle: "مزارع لورا",
    heroSubtitle: "طعم الطبيعة",
    heroDescription: "منتجات ألبان طازجة وآمنة من حليب الأبقار والماعز باستخدام ممارسات زراعية وتصنيعية متقدمة",
    learnMore: "اعرف المزيد",

    // About Section
    aboutTitle: "من نحن",
    aboutIntro:
      "مزارع لورا هي شركة رائدة في إنتاج الألبان والمنتجات الزراعية عالية الجودة، تركز على النمو المستدام في سوق تنافسي. تقدم الشركة مجموعة متنوعة من منتجات الألبان، بما في ذلك الزبادي، لبن العيران بالنكهة التركية، لبن الماعز، ومجموعة من الأجبان، جميعها من حليب الأبقار والماعز التي تتغذى على الأعشاب.",

    // Mission & Vision
    missionTitle: "المهمة",
    missionText:
      "توفير منتجات ألبان طازجة وآمنة نستخرج من حليب الأبقار والماعز، باستخدام ممارسات زراعية وتصنيعية متقدمة، مع التركيز على الجودة والتنوع، وتقديم خيارات طبيعية وصحية تشمل الألبان التقليدية والعضوية، سعياً لبناء ثقة مستدامة مع المستهلك.",
    visionTitle: "الرؤية",
    visionText:
      'أن نكون من أبرز الشركات السعودية في إنتاج الألبان، من خلال تقديم منتجات طبيعية وعضوية عالية الجودة تعكس شعارنا "مذاق الطبيعة"، مع التوسع مستقبلاً نحو إنتاج اللحوم لتوفير غذاء صحي متكامل يواكب تطلعات المستهلك المحلي والخليجي.',

    // Contact Section
    contactTitle: "اتصل بنا",
    contactDescription: "نحن هنا لخدمتك. تواصل معنا لأي استفسارات حول منتجاتنا",
    phone: "الهاتف",
    email: "البريد الإلكتروني",
    address: "العنوان",

    // Footer
    footerText: "جميع الحقوق محفوظة",
    followUs: "تابعنا على",
  },
  en: {
    // Navigation
    home: "Home",
    about: "About Us",
    contact: "Contact",

    // Hero Section
    heroTitle: "Laura Farms",
    heroSubtitle: "The Taste of Nature",
    heroDescription:
      "Fresh and safe dairy products from cow and goat milk using advanced farming and production practices",
    learnMore: "Learn More",

    // About Section
    aboutTitle: "About Us",
    aboutIntro:
      "Lora Farms is a leading producer of high-quality dairy and agricultural products, focusing on sustainable growth in a competitive market. The company offers a variety of dairy products, including yogurt, Turkish-flavored Aryan, goat milk, and a range of cheeses, all sourced from grass-fed cows and goats.",

    // Mission & Vision
    missionTitle: "Mission",
    missionText:
      "To deliver fresh and safe dairy products made from cow and goat milk using advanced farming and production practices, with a focus on quality and variety. We aim to offer both conventional and organic options that promote health and sustainability, while earning lasting consumer trust.",
    visionTitle: "Vision",
    visionText:
      'To become one of the leading Saudi companies in dairy production by offering high-quality natural and organic products that reflect our identity — "The Taste of Nature" — with future expansion into meat products to provide a complete, healthy food experience for local and regional markets.',

    // Contact Section
    contactTitle: "Contact Us",
    contactDescription: "We are here to serve you. Contact us for any inquiries about our products",
    phone: "Phone",
    email: "Email",
    address: "Address",

    // Footer
    footerText: "All rights reserved",
    followUs: "Follow Us",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("ar")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["ar"]] || key
  }

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
    document.body.className = language === "ar" ? "font-arabic" : "font-inter"
  }, [language])

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
