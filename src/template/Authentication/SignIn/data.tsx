
import { useState } from "react";
import { illustrationCooking } from "../../../assets/images";
import { useAuth } from "../../../hooks/useAuth";
import type { AuthenticationDesignProps } from "../../../interfaces/template/Authentication";
import { handleCallApi } from "../../../services/merchant/handleCallApi";

export function SignInData():AuthenticationDesignProps {
  const { auth, handleChange, setLoading, loading  } = useAuth()
  const [error,setError] = useState<{ [key: string]: string } | undefined>(undefined)
  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true)
        const result = await handleCallApi(auth)
        setLoading(false)
        if(!result.success){
          setError(result.fields)
        }
  }
  return{
  formData: {
    errorZod: error ,
    onSubmit: handleLogin,
    fields: [
      {
        label: "Email",
        name: "email",
        placeholder: "Digite o seu email",
        type: "email",
        onChange: handleChange,
        value: auth.email,
        
      },
      {
        label: "Senha",
        name: "password",
        placeholder: "Digite a sua senha",
        type: "password",
        onChange: handleChange,
        value: auth.password,
      },
    ],
    buttonText: loading? "Carregando..." : "Entrar",
  },
  bannerData: {
    author: "Michael, Dono do Fogo no Teto",
    backgroundImage: illustrationCooking,
    feedback:
      "“Agora quando estou com alimentos excedentes, busco fazer o bem por meio da FoodBridge.”",
  },
};
}