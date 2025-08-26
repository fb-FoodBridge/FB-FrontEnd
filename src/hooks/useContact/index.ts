import { useState, type FormEvent } from "react";
import type { ContactInfo } from "../../types/hooks/useContact";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { emailJSKey, serviceID, templateEmail } from "../../constants";
import { contactForm } from "../../lib/zod/contactForm";

export const useContact = () => {
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    name: "",
    email: "",
    message: "",
  });
  
  const [errors, setErrors] = useState<{[ key: string ]: string}>({});



  function handleEmail(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const result = contactForm.safeParse(contactInfo);

    if (!result.success) {
      const fieldErrors: {[ key: string ]: string} = {}
      
      result.error.issues.forEach((issue) => {
        if (typeof issue.path[0] === "string") fieldErrors[issue.path[0]] = issue.message
      })
      setErrors(fieldErrors)

      return
    } else {
      setErrors({})
    }

    if (
      contactInfo.name === "" ||
      contactInfo.email === "" ||
      contactInfo.message === ""
    ) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }

    const templateParams = {
      from_name: contactInfo.name,
      message: contactInfo.message,
      email: contactInfo.email,
    };

    emailjs
      .send(serviceID, templateEmail, templateParams, emailJSKey)
      .then(() => {
        toast.success("Email enviado com sucesso!");
        setContactInfo({ name: "", email: "", message: "" });
      },
     () => {
        toast.error("Erro ao enviar email. Por favor, tente novamente.");
     });
  }

  return {
    contactInfo,
    handleEmail,
    setContactInfo,
    errors
  }
};
