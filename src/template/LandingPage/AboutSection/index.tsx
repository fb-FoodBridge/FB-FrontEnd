import Card from "../../../components/Card";
import { aboutSectionData } from "./data";

export default function AboutSection() {
  return (
    <section className="max-w-[1440px] flex flex-col gap-10 xl:px-12 xl:py-8 py-16 px-4 md:px-6">
      <h2 className="text-5xl text-center font-medium">
        Sobre a{" "}
        <span className="font-semibold text-5xl">
          FOOD<span className="text-[#FDD835]">BRIDGE</span>
        </span>
      </h2>

      <p className="font-semibold text-xl italic text-center">
        “Todo dia, toneladas de alimentos vão parar no lixo. Enquanto isso,
        milhares de pessoas passam fome A Foodbridge nasceu para mudar isso.”
      </p>

      <article className="flex flex-col gap-6">
        <div className="w-full flex flex-col xl:flex-row gap-6">
          <Card {...aboutSectionData.first} />
          <Card {...aboutSectionData.second} />
        </div>
        <div className="w-full flex flex-col xl:flex-row gap-6">
          <Card {...aboutSectionData.third} />
          <Card {...aboutSectionData.fourth} />
        </div>
      </article>
    </section>
  );
}
