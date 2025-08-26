import type { FormProps } from "../../../interfaces/components/Input";
import { useContact } from "../../../hooks/useContact";

export function useContactSectionData(): FormProps {
  const { contactInfo, setContactInfo, handleEmail, errors } = useContact();

  return {
    fields: [
      {
        name: "name",
        label: "Nome",
        placeholder: "Digite seu nome",
        type: "text",
        value: contactInfo.name,
        onChange: (e) =>
          setContactInfo({ ...contactInfo, name: e.target.value }),
      },
      {
        name: "email",
        label: "Email",
        placeholder: "Digite seu email",
        type: "email",
        value: contactInfo.email,
        onChange: (e) =>
          setContactInfo({ ...contactInfo, email: e.target.value }),
      },
      {
        name: "message",
        label: "Mensagem",
        placeholder: "Digite sua mensagem",
        type: "text",
        isMessageField: true,
        value: contactInfo.message,
        onChange: (e) =>
          setContactInfo({ ...contactInfo, message: e.target.value }),
      },
    ],
    buttonText: "Enviar",
    onSubmit: handleEmail,
    errorZod: errors,
  };
}
