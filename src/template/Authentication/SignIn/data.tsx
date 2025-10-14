
import { illustrationCooking } from "../../../assets/images";
import { useAuth } from "../../../hooks/useAuth";
import type { AuthenticationDesignProps } from "../../../interfaces/template/Authentication";
import { handleCallApi } from "../../../services/merchant/handleCallApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { LoginMerchant } from "../../../services/merchant/Login";

interface data<T = unknown> {
  success: boolean;
  message?: string;
  fields?: { [key: string]: string };
  error?: unknown | string;
  data?: T;
}

export function SignInData(): AuthenticationDesignProps {
  const { loginAuth, handleLoginChange, setLoading, loading } = useAuth();


  const router = useNavigate()

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const result: data = await handleCallApi(LoginMerchant,loginAuth);
    setLoading(false);
    if (!result.success && (result.fields || result.error)) {
    
      if (typeof result.error === "string") {
        toast.error(result.error);
      } else if (result.error) {
        toast.error("An unknown error occurred.");
      }
      return;
    }    
  toast.success(result.message);
  router('/')
  }
  return {
    formData: {
      onSubmit: handleLogin,
      fields: [
        {
          label: "Email",
          name: "email",
          placeholder: "Digite o seu email",
          type: "email",
          onChange: handleLoginChange,
          value: loginAuth.email,
        },
        {
          label: "Senha",
          name: "password",
          placeholder: "Digite a sua senha",
          type: "password",
          onChange: handleLoginChange,
          value: loginAuth.password,
        },
      ],
      buttonText: loading ? "Carregando..." : "Entrar",
    },
    bannerData: {
      author: "Michael, Dono do Fogo no Teto",
      backgroundImage: illustrationCooking,
      feedback:
        "“Agora quando estou com alimentos excedentes, busco fazer o bem por meio da FoodBridge.”",
    },
  };
}
