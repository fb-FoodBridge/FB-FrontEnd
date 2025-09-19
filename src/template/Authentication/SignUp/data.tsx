import { illustrationCooking } from "../../../assets/images";
import type { AuthenticationDesignProps } from "../../../interfaces/template/Authentication";

export const SignUpData: AuthenticationDesignProps = {
  formData: {
    fields: [
      {
        label: "Nome",
        name: "Name",
        placeholder: "Digite o seu nome",
        type: "text",
      },
      {
        label: "Email",
        name: "Email",
        placeholder: "Digite o seu email",
        type: "email",
      },
      {
        label: "Senha",
        name: "Password",
        placeholder: "Digite a sua senha",
        type: "password",
      },
      {
        label: "CNPJ",
        placeholder: "Digite o seu CNPJ",
        name: "CNPJ",
        type: "text",
      },
    ],
    buttonText: "Cadastrar",
  },
  bannerData: {
    author: "Michael, Dono do Fogo no Teto",
    backgroundImage: illustrationCooking,
    feedback:
      "“Agora quando estou com alimentos excedentes, busco fazer o bem por meio da FoodBridge.”",
  },
};
