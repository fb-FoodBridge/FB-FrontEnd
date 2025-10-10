import { ZodValidate } from "../../utils/zodValidationUtil";
import { ZodLoginSchema } from "../../validations/ZodValidationSchema";
import type { ZodLoginTypes } from "../../validations/ZodValidationsTypes";
import { api } from "../../constants/BASE_URL";

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
      .then((data) => {
        return { success: true, response: `teste :${data.json()}` };
      })
      .catch((data) => {
        if (!data.ok) {
          const text =  data.text;
          throw new Error(`teste: ${text}`);
        }
      });
  } catch (error) {
    return { success: false, error };
  }
}
