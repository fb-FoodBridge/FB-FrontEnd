import { z } from "zod"

export const ZodLoginSchema = z.object({
    email: z.email("Email invalido"),
    password: z.string().min(8,{message: "Senha inválida"})
})