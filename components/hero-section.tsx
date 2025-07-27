import { Button } from "@/components/ui/button";
import { ChevronDown, Star } from "lucide-react";
import ShinyText from "./ui/ShinyText";
interface HeroSectionProps {
  t: (key: string) => string;
  language: string;
}

export default function HeroSection({ t, language }: HeroSectionProps) {
  const isRTL = language === "ar";

  const scrollToAbout = () => {
    if (typeof window !== "undefined") {
      const element = document.getElementById("about");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-[#f9fdfb]`} // Light mint background (very subtle)
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Optional background texture */}
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-repeat opacity-10 pointer-events-none z-0" />

      {/* Main Content */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left: Image */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src="/images/heroImage.png"
            alt={isRTL ? "حليب طازج" : "Fresh Milk"}
            className="w-[350px] md:w-[420px] h-auto drop-shadow-[0_10px_20px_rgba(48,171,209,0.3)] rounded-3xl bg-transparent"
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Right: Text & Buttons */}
        <div
          className={`flex-1 flex flex-col items-${
            isRTL ? "end" : "start"
          } text-${isRTL ? "right" : "left"}`}
        >
          <div className="mb-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-2 text-[#256734] drop-shadow-md">
              {isRTL ? "أطلب الآن" : "Order Now"}
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-[#30abd1] via-[#35c28e] to-[#43b15d] rounded-full mb-4 shadow-md"></div>
            <h2 className="text-3xl md:text-5xl font-bold mb-2 text-[#2d8441] drop-shadow-sm">
              {isRTL ? "أهلا وسهلا في مزارع لورا" : "Welcome to Laura Farms"}
            </h2>

  
            <h3 className="relative text-xl md:text-2xl  w-fit border-[#256734]  rounded-xl p-2  text-[#2b8d42] mb-4 font-medium">
              {isRTL ? "تذوق طعم الطبيعة" : "Taste the Essence of Nature"}
              <Star className="animate-bounce absolute -top-1 -right-4 rotate-[] w-5 h-5 text-[#256734] fill-[#256734]" />

              {/* Bottom left star */}
              <Star className="absolute  animate-bounce -bottom-0 -left-6 w-5 h-5 text-[#256734] fill-[#256734]" />
            </h3>
          </div>
          <div className="flex gap-4 mb-8 flex-wrap">
            <Button
              onClick={scrollToAbout}
              size="lg"
              className="bg-[#2d8441] hover:bg-[#1283a8] text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 rounded-2xl"
            >
              {isRTL ? "زر متجرنا الإلكتروني" : "Visit Our Store"}
            </Button>
            <Button
              size="lg"
              className="bg-[#2d8441] hover:bg-[#1a4e2a] text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 rounded-2xl"
            >
              {isRTL ? "حمل تطبيقنا" : "Download Our App"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
