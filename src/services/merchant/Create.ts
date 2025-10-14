import { email } from "zod";
import { api } from "../../constants/BASE_URL";
import { ZodValidate } from "../../utils/zodValidationUtil";
import { ZodRegisterSchema } from "../../validations/ZodValidationSchema";
import type { ZodRegisterTypes } from "../../validations/ZodValidationsTypes";

export async function CreateMerchant(data: ZodRegisterTypes){
    const validate = ZodValidate(ZodRegisterSchema, data)
    if (validate.success !== true) {
    return {
      success: false,
      fields: validate.fields,
    };
  }

  try{
    const response = await fetch(`${api}/merchant`, {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({
        cnpj: data.cnpj,
        email: data.email,
        password: data.password,
        username: data.username
       }) 
    })
    return response
  }catch(error){
    return {success: false, error}
  }

}