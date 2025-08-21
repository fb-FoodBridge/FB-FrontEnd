import AboutSection from "../../template/LandingPage/AboutSection";
import HeroSection from "../../template/LandingPage/HeroSection";
import WhyChooseUsSection from "../../template/LandingPage/WhyChooseUsSection";

export default function LandingPage() {
  return (
    <main className="w-full items-center flex flex-col">
      <HeroSection />
      <WhyChooseUsSection />
      <AboutSection />
    </main>
  );
}
