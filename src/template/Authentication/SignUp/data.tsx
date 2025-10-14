// import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { illustrationCooking } from "../../../assets/images";
import { useAuth } from "../../../hooks/useAuth";
import type { AuthenticationDesignProps } from "../../../interfaces/template/Authentication";
import { useState } from "react";
import { handleCallApi } from "../../../services/merchant/handleCallApi";
import { CreateMerchant } from "../../../services/merchant/Create";

interface data<T = unknown> {
  success: boolean;
  message?: string;
  fields?: { [key: string]: string };
  error?: unknown | string;
  data?: T;
}

export function SignUpData(): AuthenticationDesignProps {
  const [error, setError] = useState<{ [key: string]: string } | undefined>(
    undefined
  );

  const { registerAuth, handleRegisterChange, setLoading, loading } = useAuth();

  // const router = useNavigate();

  async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const result: data = await handleCallApi(CreateMerchant,registerAuth);
    setLoading(false);
    if (!result.success && (result.fields || result.error)) {
      if (typeof result.error === "string") {
        toast.error(result.error);
      }else{
        setError(result.fields)
      }
      return;
    }
    toast.success(result.message);

  }

  return {
    formData: {
      errorZod: error,
      onSubmit: handleRegister,
      fields: [
        {
          label: "Nome",
          name: "username",
          placeholder: "Digite o seu nome",
          type: "text",
          onChange: handleRegisterChange,
          value: registerAuth.username,
        },
        {
          label: "Email",
          name: "email",
          placeholder: "Digite o seu email",
          type: "email",
          onChange: handleRegisterChange,
          value: registerAuth.email,
        },
        {
          label: "Senha",
          name: "password",
          placeholder: "Digite a sua senha",
          type: "password",
          onChange: handleRegisterChange,
          value: registerAuth.password,
        },
        {
          label: "CNPJ",
          placeholder: "Digite o seu CNPJ",
          name: "cnpj",
          type: "text",
          onChange: handleRegisterChange,
          value: registerAuth.cnpj,
        },
      ],
      buttonText:loading ? "Carregando..." : "Entrar",
    },
    bannerData: {
      author: "Michael, Dono do Fogo no Teto",
      backgroundImage: illustrationCooking,
      feedback:
        "“Agora quando estou com alimentos excedentes, busco fazer o bem por meio da FoodBridge.”",
    },
  };
}
