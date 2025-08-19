import HeroSection from "../../template/LandingPage/HeroSection";
import MockupSection from "../../template/LandingPage/MockupSection";

export default function LandingPage() {
  return (
    <main className="w-full items-center flex flex-col">
        <HeroSection />
        <MockupSection />
    </main>
  )
}
