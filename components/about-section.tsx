
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Leaf, Award, Sparkles } from "lucide-react"

interface AboutSectionProps {
  t: (key: string) => string;
  language: string;
}

export default function AboutSection({ t, language }: AboutSectionProps) {
  const isRTL = language === "ar"

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white via-slate-50 to-green-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#256734] to-emerald-600 bg-clip-text text-transparent mb-2">
              {t("aboutTitle")}
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-[#256734] to-emerald-500 mx-auto rounded-full"></div>
          </div>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">{t("aboutIntro")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Mission Card */}
          <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-green-50/50 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#256734]/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="p-8 relative z-10">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-[#256734] to-emerald-600 p-3 rounded-xl ml-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#256734] group-hover:text-emerald-700 transition-colors duration-300">
                  {t("missionTitle")}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                {t("missionText")}
              </p>
            </CardContent>
          </Card>

          {/* Vision Card */}
          <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-emerald-50/50 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-[#256734]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="p-8 relative z-10">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-emerald-600 to-[#256734] p-3 rounded-xl ml-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Eye className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#256734] group-hover:text-emerald-700 transition-colors duration-300">
                  {t("visionTitle")}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                {t("visionText")}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group text-center bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-[#256734]/10 hover:border-[#256734]/20">
            <div className="bg-gradient-to-br from-[#256734] to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <Leaf className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-[#256734] mb-3 group-hover:text-emerald-700 transition-colors duration-300">
              {language === "ar" ? "منتجات طبيعية" : "Natural Products"}
            </h4>
            <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
              {language === "ar"
                ? "منتجات طبيعية وعضوية عالية الجودة من مصادر موثوقة"
                : "High-quality natural and organic products from trusted sources"}
            </p>
          </div>

          <div className="group text-center bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-[#256734]/10 hover:border-[#256734]/20">
            <div className="bg-gradient-to-br from-emerald-600 to-[#256734] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-[#256734] mb-3 group-hover:text-emerald-700 transition-colors duration-300">
              {language === "ar" ? "جودة عالية" : "High Quality"}
            </h4>
            <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
              {language === "ar"
                ? "معايير جودة صارمة في جميع مراحل الإنتاج"
                : "Strict quality standards in all production stages"}
            </p>
          </div>

          <div className="group text-center bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-[#256734]/10 hover:border-[#256734]/20">
            <div className="bg-gradient-to-br from-[#256734] via-emerald-600 to-emerald-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-[#256734] mb-3 group-hover:text-emerald-700 transition-colors duration-300">
              {language === "ar" ? "رؤية مستقبلية" : "Future Vision"}
            </h4>
            <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
              {language === "ar"
                ? "التوسع المستقبلي لتلبية احتياجات السوق المحلي والإقليمي"
                : "Future expansion to meet local and regional market needs"}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
