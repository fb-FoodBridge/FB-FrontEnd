
import { illustrationCooking } from "../../../assets/images";
import type { AuthenticationDesignProps } from "../../../interfaces/template/Authentication";
import { useAuth } from "../../../hooks/useAuth";

export function SignInData():AuthenticationDesignProps {
const {handleChange,auth} = useAuth()
  return{
  formData: {
    
    fields: [
      {
        label: "Email",
        name: "Email",
        placeholder: "Digite o seu email",
        type: "email",
        onChange: handleChange,
        value: auth.email,
        
      },
      {
        label: "Senha",
        name: "Password",
        placeholder: "Digite a sua senha",
        type: "password",
      },
    ],
    buttonText: "Entrar",
  },
  bannerData: {
    author: "Michael, Dono do Fogo no Teto",
    backgroundImage: illustrationCooking,
    feedback:
      "“Agora quando estou com alimentos excedentes, busco fazer o bem por meio da FoodBridge.”",
  },
};
}