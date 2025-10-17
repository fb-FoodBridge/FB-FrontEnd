
import { illustrationCooking } from "../../../assets/images";
import { useAuth } from "../../../hooks/useAuth";
import type { AuthenticationDesignProps } from "../../../interfaces/template/Authentication";
import { handleCallApi } from "../../../services/handleCallApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { LoginMerchant } from "../../../services/merchant/Login";
import { LoginNGO } from "../../../services/ngo/Login";

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
    try{
    const result: data = await handleCallApi(LoginMerchant,loginAuth);

    if (!result.success && (result.fields || result.error)) {
      if (typeof result.error === "string") {
        toast.error(result.error);
      }
      return;
    }    
  toast.success(result.message);
  router('/')
    }catch(error){
       console.warn( error);
       try{
    const result: data = await handleCallApi(LoginNGO ,loginAuth);

    if (!result.success && (result.fields || result.error)) {
    
      if (typeof result.error === "string") {
        toast.error(result.error);
      }
      return;
    }    
  toast.success(result.message);
  router('/')
    }catch(error){
      console.warn(error)
    }
    //finally vai sempre ser executado mesmo se der erro
    }finally{
      setLoading(false);
    }
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
