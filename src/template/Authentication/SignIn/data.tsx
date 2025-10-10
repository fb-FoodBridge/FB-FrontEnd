
import { illustrationCooking } from "../../../assets/images";
import { useAuth } from "../../../hooks/useAuth";
import type { AuthenticationDesignProps } from "../../../interfaces/template/Authentication";
import { handleCallApi } from "../../../services/merchant/handleCallApi";

export function SignInData():AuthenticationDesignProps {
  const { auth,errors, handleChange, handleSubmit } = useAuth()
  const callingApi = handleCallApi(auth)
  callingApi.then((data) => {
    if(data?.success.valueOf() === false){
     return console.log(data.response?.toString())
    }
  })
  return{
  formData: {
    errorZod: errors,
    onSubmit: handleSubmit,
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