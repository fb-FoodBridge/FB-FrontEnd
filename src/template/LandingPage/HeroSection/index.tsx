import { Building2, ChefHat } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { illustrationHeroSection } from "../../../assets/images/illustrations";
import SplitText from "../../../lib/ReactBits/SplitText/SplitText";

export default function HeroSection() {
  return (
    <section className="flex flex-col-reverse lg:flex-row max-w-[1440px] justify-between items-start lg:items-center py-16 lg:px-12 px-6 gap-12">
      <div>
        <div className="flex flex-col gap-4">
          <p className="italic font-medium">
            “Cuidando de pessoas através da comida.”
          </p>
          <h1 className="font-bold text-5xl lg:max-w-[544px]">
            Onde o alimento encontra{" "}
            <SplitText
              text="propósito"
              className="bg-[#FDD835]"
              delay={300}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, x: 40 }}
              to={{ opacity: 1, x: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
          </h1>
          <p className="font-medium text-2xl max-w-[477px]">
            A FoodBridge conecta{" "}
            <span className="bg-[#FDD835]">
              histórias, sabores e comunidades
            </span>{" "}
            com impacto e confiança.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 mt-8 w-full lg:w-fit">
          <Button variant={"gray"} size={"fit"} className="w-full lg:w-fit lg:h-fit">
            Restaurantes <ChefHat size={16} fill="#fff" color="#000" />
          </Button>
          <Button variant={"secondary"} size={"fit"} className="w-full lg:w-fit lg:h-fit">
            Organizações <Building2 size={16} fill="#fff" color="#000" />
          </Button>
        </div>
      </div>

      <img
        src={illustrationHeroSection}
        className="w-[100%] lg:w-[50%] h-auto"
        alt="Ilustração onde duas pessoas estão sentadas em uma mesa demonstrando uma certa confiança ao apresentar a marca da FOODBRIDGE"
      />
    </section>
  );
}
