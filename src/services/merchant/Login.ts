import { ZodValidate } from "../../utils/zodValidationUtil";
import { ZodLoginSchema } from "../../validations/ZodValidationSchema";
import type { ZodLoginTypes } from "../../validations/ZodValidationsTypes";
import { api } from "../../constants/BASE_URL";


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
        return Promise.reject({ success: false, error: "Email e senha inválido" });
        }
       const token = await json.access_token
        localStorage.setItem("token", token)

         return { success: true, message: "Login realizado com sucesso.", data: json };
      })
      .catch((error) => {
        if (error && typeof error === "object" && "error" in  error) {
          return { success: false, error: error.error };
        }
        return { success: false, error: "Erro desconhecido." };
      });

    return response
  } catch (error) {
    return { success: false, error };
  }
}
