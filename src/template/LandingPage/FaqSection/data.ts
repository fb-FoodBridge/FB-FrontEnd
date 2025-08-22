import type { FaqSectionProps } from "../../../interfaces/template/FaqSection";

export const faqSectionData: FaqSectionProps = {
    categorys: [
        {
            label: "Restaurantes",
            type: "restaurant"
        },
        {
            label: "Organizações",
            type: "organization"
        },
        {
            label: "Doações",
            type: "donation"
        }
    ],
    faqs: [
        {
            answer: "Tenho uma ONG. Como posso receber doações?",
            question: "Tenho uma ONG. Como posso receber doações?",
            type: "organization"
        },
        {
            answer: "Sou um restaurante. Como posso doar alimentos?",
            question: "Sou um restaurante. Como posso doar alimentos?",
            type: "restaurant"
        },
        {
            answer: "Quais tipos de alimentos podem ser doados?",
            question: "Quais tipos de alimentos podem ser doados?",
            type: "donation"
        }
    ]
} 