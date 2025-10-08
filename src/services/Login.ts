
import { ZodValidate } from "../utils/zodValidationUtil"
import { ZodLoginSchema } from "../validations/ZodValidationSchema"
import type { ZodLoginTypes } from "../validations/ZodValidationsTypes"
import { api } from "./DATABASE_URL"

export async function Login(data:ZodLoginTypes){
    try{
        const result = ZodValidate(ZodLoginSchema, data)
        if(result.success !== true) return console.error(result.error.flatten())
            if(!api){
                return {success:false, response: new Error("Url indefinida")}
            }
        const response = await fetch(`${api}/login`, {
    method: 'POST',
    body: JSON.stringify(data)
})
        return {success:true, response: response}
    }catch(error){
       return {success:false, response: error}
    }
}