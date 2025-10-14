import { ZodValidate } from "../../utils/zodValidationUtil";
import { ZodLoginSchema } from "../../validations/ZodValidationSchema";
import type { ZodLoginTypes } from "../../validations/ZodValidationsTypes";
import { api } from "../../constants/BASE_URL";
import { toast } from "react-toastify";

interface data {
  access_token: string;
  refresh_token: string;
}

export async function  Login(data: ZodLoginTypes) {
  const result = ZodValidate(ZodLoginSchema, data);
  if (result.success !== true) {
    return {
      success: false,
      fields: result.fields,
    };
  }
  try {
    if (!api) {
      return { success: false, error: new Error("Url indefinida") };
    }
    const response = await fetch(`${api}/merchant/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    })
      .then(async (data) => {
        const json: data = await data.json();
        if (data.status === 401) {
          const erro = toast.error("Email ou senha inválida")
          return Promise.reject({ success: true,err }) 
        }
        
        const token = json.access_token
        localStorage.setItem("token", token)

        return { success: true, token};
      })
      .catch((error) => {
        return { success: false, error };
      });

    return { success: true, data: response };
  } catch (error) {
    return { success: false, error };
  }
}
