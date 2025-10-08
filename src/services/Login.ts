
import { ZodValidate } from "../utils/zodValidationUtil";
import { ZodLoginSchema } from "../validations/ZodValidationSchema";
import type { ZodLoginTypes } from "../validations/ZodValidationsTypes";
import { api } from "./DATABASE_URL";

export async function Login(data: ZodLoginTypes) {
  try {
    const result = ZodValidate(ZodLoginSchema, data);
        if (result.success !== true) {
          // Não use console.log no return — retorne erro estruturado
          return { success: false, error: result.error.flatten() };
        }
    if (!api) {
      return { success: false, response: new Error("Url indefinida") };
    }
    const response = await fetch(`${api}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    });
    return { success: true, response: response };
  } catch (error) {
    return { success: false, error };
  }
}
