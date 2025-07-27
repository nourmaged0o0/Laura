import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Send, MessageSquare, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ContactSectionProps {
  t: (key: string) => string;
  language: string;
}

export default function ContactSection({ t, language }: ContactSectionProps) {
  const isRTL = language === "ar"

  return (
    <section id="contact" className="relative py-32 bg-gradient-to-br from-[#f8fafc] via-[#f1f8ff] to-[#f0fdf4] overflow-hidden">
      {/* Advanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#30abd1]/20 to-[#256734]/10 rounded-[4rem] blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-96 h-96 bg-gradient-to-tl from-[#256734]/15 to-[#30abd1]/20 rounded-[5rem] blur-3xl opacity-50 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-[#43b15d]/10 to-[#30abd1]/15 rounded-[6rem] blur-3xl opacity-40 animate-pulse delay-2000"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(48,171,209,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(48,171,209,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with enhanced typography */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/60 backdrop-blur-xl rounded-full border border-[#30abd1]/20 shadow-lg">
            <div className="w-2 h-2 bg-[#30abd1] rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-[#256734] tracking-wider uppercase">
              {language === "ar" ? "تواصل معنا" : "Get in Touch"}
            </span>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#256734] via-[#30abd1] to-[#43b15d] mb-6 leading-tight">
            {t("contactTitle")}
          </h2>
          
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="h-0.5 w-20 bg-gradient-to-r from-transparent to-[#30abd1] rounded-full"></div>
            <div className="w-3 h-3 bg-[#30abd1] rounded-full shadow-lg shadow-[#30abd1]/50"></div>
            <div className="h-0.5 w-20 bg-gradient-to-l from-transparent to-[#30abd1] rounded-full"></div>
          </div>
          
          <p className="text-xl text-[#256734]/80 max-w-3xl mx-auto leading-relaxed font-medium">
            {t("contactDescription")}
          </p>
        </div>

        {/* Enhanced Contact Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {/* Phone Card */}
          <Card className="group relative border-0 bg-white/40 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgb(48,171,209,0.15)] transition-all duration-700 rounded-3xl overflow-hidden hover:-translate-y-2">
            {/* Gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#30abd1]/20 via-transparent to-[#256734]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-[1px] bg-white/60 backdrop-blur-2xl rounded-3xl"></div>
            
            <CardContent className="relative p-10 text-center">
              {/* Animated icon container */}
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-[#30abd1] to-[#256734] rounded-2xl blur-lg opacity-30 scale-110 group-hover:scale-125 transition-transform duration-500"></div>
                <div className="relative bg-gradient-to-br from-[#30abd1] to-[#256734] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                  <Phone className="h-10 w-10 text-white drop-shadow-lg" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-[#256734] mb-4 group-hover:text-[#30abd1] transition-colors duration-300">
                {t("phone")}
              </h3>
              <p className="text-lg font-semibold text-[#256734]/80 group-hover:text-[#30abd1] transition-colors duration-300 mb-6">
                +966 50 123 4567
              </p>
              
              {/* Call button */}
              <Button className="bg-gradient-to-r from-[#30abd1] to-[#256734] hover:from-[#256734] hover:to-[#30abd1] text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0">
                {language === "ar" ? "اتصل الآن" : "Call Now"}
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* Email Card */}
          <Card className="group relative border-0 bg-white/40 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgb(37,103,52,0.15)] transition-all duration-700 rounded-3xl overflow-hidden hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-[#256734]/20 via-transparent to-[#43b15d]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-[1px] bg-white/60 backdrop-blur-2xl rounded-3xl"></div>
            
            <CardContent className="relative p-10 text-center">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-[#256734] to-[#43b15d] rounded-2xl blur-lg opacity-30 scale-110 group-hover:scale-125 transition-transform duration-500"></div>
                <div className="relative bg-gradient-to-br from-[#256734] to-[#43b15d] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                  <Mail className="h-10 w-10 text-white drop-shadow-lg" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-[#256734] mb-4 group-hover:text-[#43b15d] transition-colors duration-300">
                {t("email")}
              </h3>
              <p className="text-lg font-semibold text-[#256734]/80 group-hover:text-[#43b15d] transition-colors duration-300 mb-6">
                info@laurafarms.com
              </p>
              
              <Button className="bg-gradient-to-r from-[#256734] to-[#43b15d] hover:from-[#43b15d] hover:to-[#256734] text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0">
                {language === "ar" ? "أرسل إيميل" : "Send Email"}
                <Send className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* Address Card */}
          <Card className="group relative border-0 bg-white/40 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgb(67,177,93,0.15)] transition-all duration-700 rounded-3xl overflow-hidden hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-[#43b15d]/20 via-transparent to-[#30abd1]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-[1px] bg-white/60 backdrop-blur-2xl rounded-3xl"></div>
            
            <CardContent className="relative p-10 text-center">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-[#43b15d] to-[#30abd1] rounded-2xl blur-lg opacity-30 scale-110 group-hover:scale-125 transition-transform duration-500"></div>
                <div className="relative bg-gradient-to-br from-[#43b15d] to-[#30abd1] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                  <MapPin className="h-10 w-10 text-white drop-shadow-lg" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-[#256734] mb-4 group-hover:text-[#43b15d] transition-colors duration-300">
                {t("address")}
              </h3>
              <p className="text-lg font-semibold text-[#256734]/80 group-hover:text-[#43b15d] transition-colors duration-300 mb-6">
                {language === "ar" ? "الرياض، المملكة العربية السعودية" : "Riyadh, Saudi Arabia"}
              </p>
              
              <Button className="bg-gradient-to-r from-[#43b15d] to-[#30abd1] hover:from-[#30abd1] hover:to-[#43b15d] text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0">
                {language === "ar" ? "عرض الموقع" : "View Location"}
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Social Media Section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 mb-12 px-8 py-4 bg-white/50 backdrop-blur-2xl rounded-full border border-[#30abd1]/20 shadow-xl">
            <MessageSquare className="w-5 h-5 text-[#256734]" />
            <h3 className="text-2xl font-bold text-[#256734]">{t("followUs")}</h3>
          </div>
          
          <div className="flex justify-center items-center gap-6">
            {/* Facebook */}
            <a
              href="#"
              className="group relative bg-white/50 backdrop-blur-2xl w-16 h-16 rounded-2xl flex items-center justify-center text-[#256734] hover:text-white transition-all duration-500 shadow-lg hover:shadow-2xl border border-white/40 hover:border-transparent hover:scale-110 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#1877f2] to-[#42a5f5] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <Facebook className="h-7 w-7 relative z-10 group-hover:scale-110 transition-transform duration-300" />
            </a>
            
            {/* Twitter */}
            <a
              href="#"
              className="group relative bg-white/50 backdrop-blur-2xl w-16 h-16 rounded-2xl flex items-center justify-center text-[#256734] hover:text-white transition-all duration-500 shadow-lg hover:shadow-2xl border border-white/40 hover:border-transparent hover:scale-110 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#1da1f2] to-[#30abd1] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <Twitter className="h-7 w-7 relative z-10 group-hover:scale-110 transition-transform duration-300" />
            </a>
            
            {/* Instagram */}
            <a
              href="#"
              className="group relative bg-white/50 backdrop-blur-2xl w-16 h-16 rounded-2xl flex items-center justify-center text-[#256734] hover:text-white transition-all duration-500 shadow-lg hover:shadow-2xl border border-white/40 hover:border-transparent hover:scale-110 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#e4405f] via-[#f56040] to-[#ffdc80] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <Instagram className="h-7 w-7 relative z-10 group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Advanced decorative elements */}
      <div className="absolute top-16 right-20 w-4 h-4 bg-[#30abd1] rounded-full opacity-60 animate-bounce delay-300"></div>
      <div className="absolute top-32 left-1/4 w-2 h-2 bg-[#256734] rounded-full opacity-40 animate-bounce delay-700"></div>
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-[#43b15d] rounded-full opacity-50 animate-bounce delay-1000"></div>
      <div className="absolute bottom-40 right-1/3 w-2 h-2 bg-[#30abd1] rounded-full opacity-60 animate-bounce delay-500"></div>
    </section>
  )
}