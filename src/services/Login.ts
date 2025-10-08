
import { ZodValidate } from "../utils/zodValidationUtil"
import { ZodLoginSchema } from "../validations/ZodValidationSchema"
import type { ZodLoginTypes } from "../validations/ZodValidationsTypes"
import { api } from "./DATABASE_URL"

export async function Login(data:ZodLoginTypes){
    try{
        const result = ZodValidate(ZodLoginSchema, data)
        if(result.success !== true) return console.error(result.error.flatten())
        const response = await api.post('/merchant/login',{
           email: data.email,
           password: data.password  
        })
        return {success:true, response: response.data}
    }catch(error){
        console.log(error)
    }
}