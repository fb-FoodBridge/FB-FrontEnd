import OptionCategory from "../../../components/OptionCategory";
import OptionFaq from "../../../components/OptionFaq";
import { faqSectionData } from "./data";



export default function FaqSection() {
  return (
    <section className="flex flex-col gap-10 items-center max-w-[1440px] w-full xl:px-12 xl:py-8 py-16 px-4 md:px-6">
        <h3 className="font-medium text-5xl">Perguntas Frequentes</h3>
        <div className="flex gap-4">
          {
            faqSectionData.categorys.map((category, key) => (
                <OptionCategory key={key} {...category} />
            ))
          }
        </div>
        
        <article className="w-full lg:w-[50%] flex flex-col">
            {
                faqSectionData.faqs.map((faq, key) => (
                    <OptionFaq key={key} {...faq} />
                ))
            }
        </article>
    </section>
  )
}
