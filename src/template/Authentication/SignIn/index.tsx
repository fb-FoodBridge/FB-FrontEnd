import { Link } from "react-router-dom";
import Banner from "../../../components/Banner";
import Form from "../../../components/Form";
import { SignInData } from "./data";
import { handleSubmit } from "../../../services/merchant/handleSubmit";

export default function SignIn() {
  const data = SignInData();

  return (
    <main className="w-full h-screen xl:h-screen px-6 py-6 flex lg:flex-row justify-center items-center gap-20">
      <div className="w-full h-fit flex flex-col gap-12 items-center">
        <Link to={"/"} className="font-semibold text-5xl">
          FOOD<span className="text-[#FDD835]">BRIDGE</span>
        </Link>
        <Form {...data.formData} onSubmit={handleSubmit} />
        <div className="w-full flex items-center gap-3">
          <div className="w-[70%] h-[1px] bg-black" />
          <p className="font-semibold text-[20px]">ou</p>
          <div className="w-[70%] h-[1px] bg-black" />
        </div>
        <p className="text-[20px] text-center">
          Já tem uma conta?{" "}
          <Link
            to={"/sign-up"}
            className="font-medium text-[20px] underline cursor-pointer"
          >
            Se cadastre
          </Link>
        </p>
      </div>
      <Banner
        feedback={data.bannerData?.feedback ?? ""}
        author={data.bannerData?.author ?? ""}
        backgroundImage={data.bannerData?.backgroundImage ?? ""}
      />
    </main>
  );
}
