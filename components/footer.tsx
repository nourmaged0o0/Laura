interface FooterProps {
  t: (key: string) => string;
  language: string;
}

export default function Footer({ t, language }: FooterProps) {
  return (
    <footer className="bg-[#256734] text-white py-8 h-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-white">
            © {new Date().getFullYear()} {language === "ar" ? "مزارع لورا" : "Laura Farms"}. {language === "ar" ? "جميع الحقوق محفوظة" : "All rights reserved"}.
          </p>
        </div>
      </div>
    </footer>
  )
}