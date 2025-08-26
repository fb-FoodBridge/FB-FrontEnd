import { Building2, ChefHat } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { illustrationWhyChooseUs } from "../../../assets/images";

export default function WhyChooseUsSection() {
  return (
    <section className="flex flex-col lg:flex-row max-w-[1440px] justify-between items-start lg:items-center py-16 lg:px-12 px-4 gap-20">
      <img
        className="hidden lg:block w-full lg:w-[50%] lg:h-[50%]"
        src={illustrationWhyChooseUs}
        alt="Ilustração da seção 'Porque nos escolher?' que mostra ajudando um ao outro com alimento, que é o nosso objetivo"
      />
      <div className="flex flex-col gap-10 lg:gap-16">
        <h2 className="font-bold text-5xl">Porque nos escolher?</h2>
        <p>
          A FoodBridge conecta quem tem alimentos excedentes a quem precisa,
          tornando a doação rápida, segura e eficiente. Com geolocalização,
          agendamento inteligente e alertas personalizados, garantimos que cada
          alimento chegue no momento certo, combatendo desperdício e fome
          urbana.
        </p>

        <div className="flex flex-col lg:flex-row gap-4 mt-8 w-full lg:w-fit">
          <Button
            variant={"gray"}
            size={"fit"}
            className="w-full lg:w-fit lg:h-fit"
          >
            Restaurantes <ChefHat size={16} fill="#fff" color="#000" />
          </Button>
          <Button
            variant={"secondary"}
            size={"fit"}
            className="w-full lg:w-fit lg:h-fit"
          >
            Organizações <Building2 size={16} fill="#fff" color="#000" />
          </Button>
        </div>
      </div>
    </section>
  );
}
