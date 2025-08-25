import { illustrationMail } from "../../../assets/images";
import Form from "../../../components/Form";
import { contactSectionData } from "./data";

export default function ContactSection() {
  return (
    <section id="contact" className='flex flex-col-reverse lg:flex-row w-full max-w-[1440px] justify-between items-start lg:items-center py-16 lg:px-12 px-6 gap-12'>
        <div className="flex flex-col gap-12 w-full lg:w-[42%] text-center">
            <h3 className="underline font-medium text-[32px]">Entre em contato conosco</h3>
            <Form {...contactSectionData} />
        </div>

        <img src={illustrationMail} className="hidden lg:block"/>
    </section>
  )
}
