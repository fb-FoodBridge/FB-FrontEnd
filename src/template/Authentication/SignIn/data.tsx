
import { illustrationCooking } from "../../../assets/images";
import type { AuthenticationDesignProps } from "../../../interfaces/template/Authentication";

export function SignInData(auth:{
  email: string,
  password: string
}, handleChange: (e :React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void ):AuthenticationDesignProps {

  return{
  formData: {
    
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