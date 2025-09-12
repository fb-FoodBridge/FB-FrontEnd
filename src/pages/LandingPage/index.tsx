import Carrousel from "../../components/Carrousel";
import AboutSection from "../../template/LandingPage/AboutSection";
import ContactSection from "../../template/LandingPage/ContactSection";
import CtaSection from "../../template/LandingPage/CtaSection";
import FaqSection from "../../template/LandingPage/FaqSection";
import HeroSection from "../../template/LandingPage/HeroSection";
import WhyChooseUsSection from "../../template/LandingPage/WhyChooseUsSection";

export default function LandingPage() {
  return (
    <main className="w-full items-center flex flex-col">
      <HeroSection />
      <AboutSection />
      <WhyChooseUsSection />
      <FaqSection />
      <ContactSection />
      <CtaSection />
    </main>
  );
}
