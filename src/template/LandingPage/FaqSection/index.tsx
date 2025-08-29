import { useState } from "react";
import OptionCategory from "../../../components/OptionCategory";
import OptionFaq from "../../../components/OptionFaq";
import { faqSectionData } from "./data";

export default function FaqSection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredFaqs = selectedCategory
    ? faqSectionData.faqs.filter((faq) => faq.type === selectedCategory)
    : faqSectionData.faqs.slice(0, 5);

  return (
    <section
      id="faq"
      className="flex flex-col gap-10 items-center max-w-[1440px] w-full xl:px-12 xl:py-8 py-16 px-4 md:px-6"
    >
      <h3 className="font-medium text-5xl text-center">Perguntas Frequentes</h3>
      <div className="flex flex-wrap gap-4 items-center justify-center">
        {faqSectionData.categorys.map((category, key) => (
          <OptionCategory onClick={() => setSelectedCategory(category.type)} key={key} {...category} isSelected={selectedCategory === category.type} />
        ))}
      </div>

      <article className="w-full lg:w-[50%] flex flex-col">
        {filteredFaqs.map((faq, key) => (
          <OptionFaq key={key} {...faq} />
        ))}
      </article>
    </section>
  );
}
