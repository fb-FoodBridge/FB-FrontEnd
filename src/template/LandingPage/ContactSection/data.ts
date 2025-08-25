import type { FormProps } from "../../../interfaces/componentes/Input";

export const contactSectionData: FormProps = {
   fields: [
    {
        label: "Nome",
        placeholder: "Digite seu nome",
        type: "text"
    },
    {
        label: "Email",
        placeholder: "Digite seu email",
        type: "email"
    },
    {
        label: "Mensagem",
        placeholder: "Digite sua mensagem",
        type: "text",
        isMessageField: true
    }
   ],
   buttonText: "Enviar"
}