import { ZodValidate } from "../utils/zodValidationUtil";
import { ZodLoginSchema } from "../validations/ZodValidationSchema";
import type { ZodLoginTypes } from "../validations/ZodValidationsTypes";
import { api } from "./DATABASE_URL";

export async function Login(data: ZodLoginTypes) {
  try {
    const result = ZodValidate(ZodLoginSchema, data);
    if (result.success !== true) {
      const fieldErrors = result.error.flatten().fieldErrors;
      return { success: false, error: {message: "Verifique os campos do formulário",
      fields: fieldErrors,}};
    }

    if (!api) {
      return { success: false, error: new Error("Url indefinida") };
    }
    const response = await fetch(`${api}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    });

    if (!response.ok) {
      const text = await response.text;
      throw new Error(`${text} ${response.status}`);
    }
    return { success: true, response: response.json() };
  } catch (error) {
    return { success: false, error };
  }
}
