import { Button } from "../../../components/ui/button"

export default function CtaSection() {
  return (
    <section className="bg-[#212121] py-8 flex flex-col items-center justify-center w-full  border-b-2 border-white text-center gap-10">
      <h2 className="text-white text-4xl md:text-5xl font-semibold">
        Vamos construir essa <span className="text-[#FDD835]">ponte</span>{" "}
        juntos?
      </h2>
      <p className="text-white text-2xl text-center font-medium">
        Vamos transformar sobras em esperança.
      </p>
      <Button variant={"gray"} size={"fit"} >
        Começar agora!
      </Button>
    </section>
  );
}
