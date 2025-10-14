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
    .then( async (res) => {
        const json = await res.json()
        if(res.status === 401){
            return Promise.reject({success: false, error:"CNPJ inválido" })
        }else{
        if(res.status === 409){
            return Promise.reject({success: false, error:"CNPJ Email já existe"})
        }
    }
     return { success: true, message: "Comerciante criado com sucesso", data: json }
    })
    .catch((error) => {
        return { success: false, error: error };
    })
    return response

}