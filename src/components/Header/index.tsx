import { linkUnderlineAnimation } from "../../constants";
import { useHamburguerMenu } from "../../hooks/useHamburguerMenu";
import MenuHamburguer from "../HamburguerMenu";
import { Button } from "../ui/button";
import { navData } from "./data";

export default function Header() {
  const { handleMenu, isOpen } = useHamburguerMenu();

  return (
    <header className="flex items-center justify-between px-10 py-9 bg-[#212121] ">
      <h1 className="font-nourd-bold text-white font-bold text-2xl">
        FOOD<span className="text-[#FDD835]">BRIDGE</span>
      </h1>
      <nav className="hidden lg:flex items-center gap-16 inter text-white font-medium relative text-[20px]">
        {navData.map((item, key) => (
          <a
          href="#about"
            key={key}
            className={`${linkUnderlineAnimation} relative`}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <div className="hidden lg:flex items-center gap-8">
        <a
          href="teste"
          className="text-white inter font-medium text-[20px] hover:underline"
        >
          Login
        </a>
        <Button variant={"secondary"} size={"fit"}>
          Cadastro
        </Button>
      </div>

      <p
        className="flex lg:hidden cursor-pointer inter text-white font-medium text-[20px]"
        onClick={() => handleMenu()}
      >
        Menu
      </p>

      {isOpen && <MenuHamburguer onClose={() => handleMenu()} />}
    </header>
  );
}
