import { illustrationMail } from "../../../assets/images";
import Form from "../../../components/Form";
import { useContactSectionData } from "./data";

export default function ContactSection() {

const contactSectionData = useContactSectionData()


  return (
    <section id="contact" className='flex flex-col-reverse lg:flex-row w-full max-w-[1440px] justify-between items-start lg:items-center py-16 lg:px-12 px-4 gap-12'>
        <div className="flex flex-col gap-12 w-full lg:w-[42%] text-center">
            <h3 className="underline font-medium text-[32px]">Entre em contato conosco</h3>
            <Form onSubmit={contactSectionData.onSubmit} {...contactSectionData} />
        </div>

        <img src={illustrationMail} className="hidden lg:block"/>
    </section>
  )
}
