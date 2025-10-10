import { ZodValidate } from "../../utils/zodValidationUtil";
import { ZodLoginSchema } from "../../validations/ZodValidationSchema";
import type { ZodLoginTypes } from "../../validations/ZodValidationsTypes";
import { api } from "../../constants/BASE_URL";
import { toast } from "react-toastify";

export async function Login(data: ZodLoginTypes) {
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
   await fetch(`${api}/merchant/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    })
      .then(async (response) => {
        const data = await response.json()
        if(response.status === 401){
          
          return toast.error("Email ou senha inválida") && Promise.reject(data)
        }
        return { success: true, response: `teste :${data}` };
      })
      .catch((erro) => {
          throw new Error(`teste: ${erro}`);
        });
  } catch (error) {
    return { success: false, error };
  }
}
