import { Link } from "react-router-dom";
import Banner from "../../../components/Banner";
import Form from "../../../components/Form";
import { SignUpData } from "./data";

export default function SignUp() {
  const data = SignUpData() 
  return (
    <main className="w-full h-fit xl:h-screen px-6 py-6 flex lg:flex-row justify-center items-center gap-20">
      <div className="w-full h-fit flex flex-col gap-12 items-center">
        <Link to={"/"} className="font-semibold text-5xl">
          FOOD<span className="text-[#FDD835]">BRIDGE</span>
        </Link>
        <Form {...data.formData} />

      </div>
      <Banner
        feedback={data.bannerData?.feedback ?? ""}
        author={data.bannerData?.author ?? ""}
        backgroundImage={data.bannerData?.backgroundImage ?? ""}
      />
    </main>
  );
}
