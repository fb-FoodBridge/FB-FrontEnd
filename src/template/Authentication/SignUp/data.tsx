import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { illustrationCooking } from "../../../assets/images";
import { useAuth } from "../../../hooks/useAuth";
import type { AuthenticationDesignProps } from "../../../interfaces/template/Authentication";
import { useState } from "react";
import { handleCallApi } from "../../../services/handleCallApi";
import { CreateMerchant } from "../../../services/merchant/Create";
import { LoginMerchant } from "../../../services/merchant/Login";
import { LoginNGO } from "../../../services/ngo/Login";
import { CreateNGO } from "../../../services/ngo/Create";

interface data<T = unknown> {
  success: boolean;
  message?: string;
  fields?: { [key: string]: string };
  error?: unknown | string
  data?: T;
}

export function SignUpData(): AuthenticationDesignProps {
  const [selectOptions, setSelectOptions] = useState<string | undefined>(undefined);
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectOptions(e.target.value);
  }
  const [error, setError] = useState<{ [key: string]: string } | undefined>(
    undefined
  );
  const { registerAuth, handleRegisterChange, setLoading, loading } = useAuth();

  const router = useNavigate();


  async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (selectOptions === '' || !selectOptions ){
      toast.error('Selecione uma opção de usuário');
      return; 
    }
    setLoading(true);
    try {
      if (selectOptions === "Comerciante") {
        const result: data = await handleCallApi(CreateMerchant, registerAuth);
        if (!result.success && (result.fields || result.error)) {
          if (typeof result.error === "string") {
            return toast.error(result.error);
          } else {
            setError(result.fields);
          }
          return;
        }
        toast.success(result.message);
        await handleCallApi(LoginMerchant, registerAuth);
        router('/');
      } else if (selectOptions === "Instituição") {
        const result: data = await handleCallApi(CreateNGO, registerAuth);
        if (!result.success && (result.fields || result.error)) {
          if (typeof result.error === "string") {
            return toast.error(result.error);
          } else {
            setError(result.fields);
          }
          return;
        }
        toast.success(result.message);
        await handleCallApi(LoginNGO, registerAuth);
        router('/');
      }
    } catch (error) {
      console.warn(error)
      toast.error('Erro ao criar conta, tente novamente mais tarde');
    }finally {
        setLoading(false);
    }
  }

  return {
    formData: {
      selectOptions: true,
      onchangeSelect: handleSelectChange,
      valueSelect: selectOptions,
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
      buttonText: loading ? "Carregando..." : "Cadastrar",
    },
    bannerData: {
      author: "Michael, Dono do Fogo no Teto",
      backgroundImage: illustrationCooking,
      feedback:
        "“Agora quando estou com alimentos excedentes, busco fazer o bem por meio da FoodBridge.”",
    },
  };
}

