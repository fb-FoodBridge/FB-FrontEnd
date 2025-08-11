import {
  Building2,
  ChefHat,
  X,
} from "lucide-react";
import { Button } from "../ui/button";
import { linkUnderlineAnimation } from "../../constants";
import type { MenuHamburguerCloseProps } from "../../interfaces/componentes/MenuHamburguer";
import { navData } from "./data";

export default function MenuHamburguer({ onClose }: MenuHamburguerCloseProps) {
  return (
    <div className="lg:hidden flex flex-col items-center p-4 h-screen w-full fixed bg-[#212121] overflow-auto top-0 left-0 z-50">
      <div className="flex items-center justify-between w-full">
        <h2 className="font-nourd-bold text-white font-bold text-2xl">
          FOOD<span className="text-[#FDD835]">BRIDGE</span>
        </h2>
        <X
          className="cursor-pointer"
          size={24}
          color="#fff"
          onClick={onClose}
        />
      </div>
      <div className="flex flex-col items-start gap-16 py-16 w-full">
        <div className="flex flex-col items-center gap-4 w-full">
          <h5 className="font-semibold text-white text-[24px] inter text-center">
            Novo por aqui? <span className="text-[#FDD835]">Começe agora</span>!
          </h5>
          <div className="flex flex-col items-center gap-4 w-full">
            <Button variant={"gray"} size={"full"}>
              Restaurantes <ChefHat size={16} fill="#fff" color="#000" />
            </Button>
            <Button variant={"gray"} size={"full"}>
              Organizações <Building2 size={16} fill="#fff" color="#000" />
            </Button>
          </div>
        </div>
        <nav className="flex items-start flex-col gap-16 inter text-white font-medium relative text-[20px] w-fit">
          {navData.map((item, key) => (
            <a href={item.href} key={key} className="flex items-center gap-2">
              {item.icon}
              <p className={`${linkUnderlineAnimation} relative`}>
                {item.label}
              </p>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
