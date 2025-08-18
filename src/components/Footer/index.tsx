import { ChevronDown, Globe, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex flex-col items-start justify-between p-12 bg-[#212121] text-white gap-8">
      <div className="flex flex-col xl:flex-row justify-between w-full">
        <h4 className="font-bold text-white text-4xl lg:mb-8">
          FOOD<span className="text-[#FDD835]">BRIDGE</span>
        </h4>
        <div className="flex flex-col gap-8 text-white font-medium border-t-1 border-white border-b-1 py-8 xl:border-none xl:py-0">
          <h5 className="text-[32px] font-nourd-bold">Sobre a FoodBridge</h5>
          <p className="text-2xl">Quem está por trás da FoodBridge?</p>
        </div>
        <div className="flex flex-col gap-8 text-white font-medium border-t-1 border-white pt-8 xl:border-none xl:py-0">
          <h5 className="text-[32px]">Fale conosco</h5>
          <p className="text-2xl">
            Entre em contato para tirar as suas dúvidas
          </p>
        </div>
      </div>

      <div className="b-white w-full h-[1px] bg-[#fafafa]" />

      <div className="flex justify-between items-start w-full flex-col xl:flex-row gap-12">
        <nav className="text-white flex flex-col xl:flex-row gap-12 lg:gap-8">
          <a href="" className="flex items-center gap-3 text-white">
            <Globe size={24} color="#fff" />
            <p>Português</p>
            <ChevronDown size={24} color="#fff" />
          </a>
          <a href="">Termos de serviço</a>
          <a href="">Copyright © 2025 FoodBridge</a>
        </nav>

        <div className="flex flex-row gap-4">
          <div className="flex p-2 border-white border-2 rounded-full w-10 h-10 items-center justify-center">
            <Instagram size={24}  />
          </div>
          <div className="flex p-2 border-white border-2 rounded-full w-10 h-10 items-center justify-center">
          <Linkedin size={24} />
          </div>
        </div>
      </div>
    </footer>
  );
}
