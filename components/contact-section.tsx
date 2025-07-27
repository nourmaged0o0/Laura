
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react"

interface ContactSectionProps {
  t: (key: string) => string;
  language: string;
}

export default function ContactSection({ t, language }: ContactSectionProps) {
  const isRTL = language === "ar"

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23256734' fillOpacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#256734] to-emerald-600 bg-clip-text text-transparent mb-2">
              {t("contactTitle")}
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#256734] to-emerald-500 mx-auto rounded-full"></div>
          </div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">{t("contactDescription")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Phone */}
          <Card className="group text-center hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm border-0 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#256734]/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="p-8 relative z-10">
              <div className="bg-gradient-to-br from-[#256734] to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#256734] mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                {t("phone")}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 font-medium">
                +966 50 123 4567
              </p>
            </CardContent>
          </Card>

          {/* Email */}
          <Card className="group text-center hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm border-0 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-[#256734]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="p-8 relative z-10">
              <div className="bg-gradient-to-br from-emerald-600 to-[#256734] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#256734] mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                {t("email")}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 font-medium">
                info@laurafarms.com
              </p>
            </CardContent>
          </Card>

          {/* Address */}
          <Card className="group text-center hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm border-0 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#256734]/5 via-emerald-500/5 to-emerald-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="p-8 relative z-10">
              <div className="bg-gradient-to-br from-[#256734] via-emerald-600 to-emerald-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#256734] mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                {t("address")}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 font-medium">
                {language === "ar" ? "الرياض، المملكة العربية السعودية" : "Riyadh, Saudi Arabia"}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Social Media */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-[#256734] mb-8">{t("followUs")}</h3>
          <div className="flex justify-center space-x-6 rtl:space-x-reverse">
            <a
              href="#"
              className="group bg-white/80 backdrop-blur-sm w-14 h-14 rounded-2xl flex items-center justify-center text-[#256734] hover:bg-gradient-to-br hover:from-[#256734] hover:to-emerald-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl border border-[#256734]/20 hover:border-transparent hover:scale-110"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="group bg-white/80 backdrop-blur-sm w-14 h-14 rounded-2xl flex items-center justify-center text-[#256734] hover:bg-gradient-to-br hover:from-emerald-600 hover:to-[#256734] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl border border-[#256734]/20 hover:border-transparent hover:scale-110"
            >
              <Twitter className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="group bg-white/80 backdrop-blur-sm w-14 h-14 rounded-2xl flex items-center justify-center text-[#256734] hover:bg-gradient-to-br hover:from-[#256734] hover:via-emerald-600 hover:to-emerald-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl border border-[#256734]/20 hover:border-transparent hover:scale-110"
            >
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-br from-[#256734]/10 to-emerald-500/5 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-tl from-emerald-400/10 to-[#256734]/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
    </section>
  )
}
