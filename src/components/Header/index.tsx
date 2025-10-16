import { Link, useNavigate } from "react-router-dom";
import { linkUnderlineAnimation } from "../../constants";
import { useHamburguerMenu } from "../../hooks/useHamburguerMenu";
import MenuHamburguer from "../HamburguerMenu";
import { Button } from "../ui/button";
import { navData } from "./data";
import { useEffect, useState } from "react";

export default function Header() {
  const { handleMenu, isOpen } = useHamburguerMenu();
  const [isLogged, setIsLogged] = useState(!!localStorage.getItem("token"));
  const router = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLogged(false);
  };

  useEffect(() => {
    if (!isLogged) {
      router("/");
    }
    // eslint-disable-next-line
  }, [isLogged]);

  return (
    <header className="flex items-center justify-between px-4 lg:px-10 py-9 bg-[#212121] ">
      <h1 className="font-nourd-bold text-white font-bold text-2xl">
        FOOD<span className="text-[#FDD835]">BRIDGE</span>
      </h1>
      <nav className="hidden lg:flex items-center gap-16 inter text-white font-medium relative text-[20px]">
        {navData.map((item, key) => (
          <a
            href={item.scroolTo}
            key={key}
            className={`${linkUnderlineAnimation} relative`}
          >
            {item.label}
          </a>
        ))}
      </nav>
      {!isLogged ? (
        <>
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/sign-in"
              className="text-white inter font-medium text-[20px] hover:underline"
            >
              Login
            </Link>
            <Button variant={"secondary"} size={"fit"}>
              <Link to="/sign-up" className="text-white">
                Cadastro
              </Link>
            </Button>
          </div>

          <p
            className={`lg:hidden flex  cursor-pointer inter text-white font-medium text-[20px]`}
            onClick={() => handleMenu()}
          >
            Menu
          </p>

          {isOpen && <MenuHamburguer onClose={() => handleMenu()} />}
        </>
      ) : (
        <Button onClick={handleLogout} variant={"default"} size={"fit"}>
          Sair
        </Button>
      )}
    </header>
  );
}
