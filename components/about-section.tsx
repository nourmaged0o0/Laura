import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Leaf, Award, Sparkles, TrendingUp, Shield, Heart, Zap } from "lucide-react"

interface AboutSectionProps {
  t: (key: string) => string;
  language: string;
}

export default function AboutSection({ t, language }: AboutSectionProps) {
  const isRTL = language === "ar"

  return (
    <section id="about" className="relative py-32 bg-gradient-to-br from-[#f8fafc] via-[#f0fdf4] to-[#f1f8ff] overflow-hidden">
      {/* Advanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating geometric shapes */}
        <div className="absolute top-16 left-12 w-80 h-80 bg-gradient-to-br from-[#256734]/20 to-[#43b15d]/10 rounded-[5rem] blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-20 right-16 w-96 h-96 bg-gradient-to-tl from-[#30abd1]/15 to-[#256734]/20 rounded-[6rem] blur-3xl opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-[#43b15d]/15 to-[#30abd1]/10 rounded-[4rem] blur-3xl opacity-30 animate-pulse delay-2000"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(37,103,52,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(37,103,52,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-3 mb-8 px-8 py-4 bg-white/50 backdrop-blur-xl rounded-full border border-[#256734]/20 shadow-lg">
            <div className="w-2 h-2 bg-gradient-to-r from-[#256734] to-[#43b15d] rounded-full animate-pulse"></div>
            <span className="text-sm font-bold text-[#256734] tracking-wider uppercase">
              {language === "ar" ? "من نحن" : "About Us"}
            </span>
            <div className="w-2 h-2 bg-gradient-to-r from-[#43b15d] to-[#30abd1] rounded-full animate-pulse delay-500"></div>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#256734] via-[#43b15d] to-[#30abd1] mb-8 leading-tight">
            {t("aboutTitle")}
          </h2>
          
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-[#256734] to-[#43b15d] rounded-full"></div>
            <div className="w-4 h-4 bg-gradient-to-r from-[#256734] to-[#43b15d] rounded-full shadow-lg shadow-[#256734]/40"></div>
            <div className="h-0.5 w-24 bg-gradient-to-l from-transparent via-[#43b15d] to-[#30abd1] rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white/40 backdrop-blur-2xl rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white/30">
            <p className="text-xl text-[#256734]/90 leading-relaxed font-medium">
              {t("aboutIntro")}
            </p>
          </div>
        </div>

        {/* Enhanced Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-12 mb-28">
          {/* Mission Card */}
          <Card className="group relative border-0 bg-white/30 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_25px_50px_rgb(37,103,52,0.15)] transition-all duration-700 rounded-3xl overflow-hidden hover:-translate-y-3 hover:rotate-1">
            <div className="absolute inset-0 bg-gradient-to-br from-[#256734]/10 via-transparent to-[#43b15d]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-[1px] bg-white/50 backdrop-blur-2xl rounded-3xl"></div>
            
            <CardContent className="relative p-12">
              <div className="flex items-center mb-10">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#256734] to-[#43b15d] rounded-3xl blur-lg opacity-40 scale-110 group-hover:scale-125 transition-transform duration-500"></div>
                  <div className="relative bg-gradient-to-br from-[#256734] to-[#43b15d] p-5 rounded-3xl shadow-xl group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 mr-6">
                    <Target className="h-10 w-10 text-white drop-shadow-lg" />
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-[#256734] group-hover:text-[#43b15d] transition-colors duration-300">
                    {t("missionTitle")}
                  </h3>
                  <div className="h-1 w-16 bg-gradient-to-r from-[#256734] to-[#43b15d] rounded-full mt-2 group-hover:w-24 transition-all duration-500"></div>
                </div>
              </div>
              <p className="text-[#256734]/80 leading-relaxed group-hover:text-[#43b15d] transition-colors duration-300 text-lg font-medium">
                {t("missionText")}
              </p>
              
              {/* Decorative corner elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-[#256734]/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </CardContent>
          </Card>

          {/* Vision Card */}
          <Card className="group relative border-0 bg-white/30 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_25px_50px_rgb(48,171,209,0.15)] transition-all duration-700 rounded-3xl overflow-hidden hover:-translate-y-3 hover:-rotate-1">
            <div className="absolute inset-0 bg-gradient-to-br from-[#30abd1]/10 via-transparent to-[#256734]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-[1px] bg-white/50 backdrop-blur-2xl rounded-3xl"></div>
            
            <CardContent className="relative p-12">
              <div className="flex items-center mb-10">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#30abd1] to-[#256734] rounded-3xl blur-lg opacity-40 scale-110 group-hover:scale-125 transition-transform duration-500"></div>
                  <div className="relative bg-gradient-to-br from-[#30abd1] to-[#256734] p-5 rounded-3xl shadow-xl group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 mr-6">
                    <Eye className="h-10 w-10 text-white drop-shadow-lg" />
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-[#256734] group-hover:text-[#30abd1] transition-colors duration-300">
                    {t("visionTitle")}
                  </h3>
                  <div className="h-1 w-16 bg-gradient-to-r from-[#30abd1] to-[#256734] rounded-full mt-2 group-hover:w-24 transition-all duration-500"></div>
                </div>
              </div>
              <p className="text-[#256734]/80 leading-relaxed group-hover:text-[#30abd1] transition-colors duration-300 text-lg font-medium">
                {t("visionText")}
              </p>
              
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-[#30abd1]/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Leaf,
              title: language === "ar" ? "منتجات طبيعية" : "Natural Products",
              description: language === "ar"
                ? "منتجات طبيعية وعضوية عالية الجودة من مصادر موثوقة"
                : "High-quality natural and organic products from trusted sources",
              gradient: "from-[#43b15d] to-[#256734]",
              hoverColor: "group-hover:text-[#43b15d]",
              shadowColor: "hover:shadow-[#43b15d]/20"
            },
            {
              icon: Award,
              title: language === "ar" ? "جودة عالية" : "High Quality",
              description: language === "ar"
                ? "معايير جودة صارمة في جميع مراحل الإنتاج"
                : "Strict quality standards in all production stages",
              gradient: "from-[#30abd1] to-[#256734]",
              hoverColor: "group-hover:text-[#30abd1]",
              shadowColor: "hover:shadow-[#30abd1]/20"
            },
            {
              icon: Sparkles,
              title: language === "ar" ? "رؤية مستقبلية" : "Future Vision",
              description: language === "ar"
                ? "التوسع المستقبلي لتلبية احتياجات السوق المحلي والإقليمي"
                : "Future expansion to meet local and regional market needs",
              gradient: "from-[#256734] to-[#43b15d]",
              hoverColor: "group-hover:text-[#256734]",
              shadowColor: "hover:shadow-[#256734]/20"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className={`group relative text-center bg-white/40 backdrop-blur-2xl p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] ${feature.shadowColor} hover:shadow-[0_20px_40px_rgb(0,0,0,0.1)] transition-all duration-700 border border-white/30 hover:-translate-y-2 hover:scale-105`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative mb-8">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-3xl blur-lg opacity-30 scale-110 group-hover:scale-125 transition-transform duration-500`}></div>
                <div className={`relative bg-gradient-to-br ${feature.gradient} w-20 h-20 rounded-3xl flex items-center justify-center mx-auto shadow-xl group-hover:rotate-12 group-hover:scale-110 transition-all duration-500`}>
                  <feature.icon className="h-10 w-10 text-white drop-shadow-lg" />
                </div>
              </div>
              
              <h4 className={`text-2xl font-bold text-[#256734] mb-4 ${feature.hoverColor} transition-colors duration-300`}>
                {feature.title}
              </h4>
              <p className={`text-[#256734]/80 ${feature.hoverColor.replace('text-', 'group-hover:text-')} transition-colors duration-300 text-base leading-relaxed font-medium`}>
                {feature.description}
              </p>
              
              {/* Floating particles effect */}
              <div className="absolute top-6 right-6 w-3 h-3 bg-gradient-to-r from-[#256734]/30 to-[#30abd1]/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce delay-300"></div>
              <div className="absolute bottom-6 left-6 w-2 h-2 bg-gradient-to-r from-[#43b15d]/40 to-[#256734]/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce delay-700"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Advanced decorative elements */}
      <div className="absolute top-20 right-16 w-6 h-6 bg-[#256734] rounded-full opacity-40 animate-bounce delay-300"></div>
      <div className="absolute top-40 left-1/3 w-3 h-3 bg-[#43b15d] rounded-full opacity-50 animate-bounce delay-700"></div>
      <div className="absolute bottom-32 left-16 w-4 h-4 bg-[#30abd1] rounded-full opacity-60 animate-bounce delay-1000"></div>
      <div className="absolute bottom-20 right-1/4 w-2 h-2 bg-[#256734] rounded-full opacity-40 animate-bounce delay-500"></div>
      
      {/* Subtle corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#256734]/10 to-transparent rounded-br-full"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-[#30abd1]/10 to-transparent rounded-tl-full"></div>
    </section>
  )
}