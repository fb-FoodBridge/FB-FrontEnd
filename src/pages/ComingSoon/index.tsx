import { Send } from "lucide-react";
import { illustrationComingSoon } from "../../assets/images/illustrations";
import { Button } from "../../components/ui/button";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function ComingSoon() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Iremos te avisar quando lançarmos!");
    setEmail("");
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen w-screen bg-gray-100 relative">
      <img
        src={illustrationComingSoon}
        alt="Ilustração com um blur de fundo"
        className="w-full h-full absolute object-cover"
      />
      <div className="relative z-10 flex flex-col items-center text-center gap-8 w-full px-2">
        <h1 className="font-bold text-black text-[40px] md:text-8xl text-orange font-['Nourd-Bold']">
          FOOD<span className="text-[#FDD835]">BRIDGE</span>
        </h1>
        <h5 className="font-semibold text-[#212121] text-[24px] md:text-[32px] inter">
          Vamos Lançar em breve!
        </h5>
        <p className="text-[#212121] inter font-semibold text-[20px] md:text-[24px]">
          Estamos construindo algo incrível. Deixe seu e-mail e seja o primeiro
          a saber quando lançarmos!
        </p>

        <form
          onSubmit={handleSubmit}
          className={`flex ${
            screenWidth >= 768
              ? "flex-row w-[62%] h-[60px] items-center justify-between border border-[#212121] rounded-[8px]"
              : "flex-col w-full gap-8"
          } bg-transparent`}
        >
          <input
            type="email"
            placeholder="Digite o seu email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`placeholder:text-[20px] placeholder:text-[#3D3D3D] placeholder:font-semibold w-full ${
              screenWidth >= 768
                ? "ml-6"
                : "pl-6 h-[60px] border border-[#212121] rounded-[8px]"
            }`}
          />
          <Button
            type="submit"
            variant={"default"}
            className={`bg-[#212121] ${
              screenWidth >= 768 ? "h-full" : "h-[60px] w-full"
            }`}
          >
            Enviar <Send color="#000" fill="#fff" />
          </Button>
        </form>
      </div>
    </main>
  );
}
