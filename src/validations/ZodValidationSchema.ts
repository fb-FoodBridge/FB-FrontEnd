import { z } from "zod"

export const ZodLoginSchema = z.object({
    email: z.email("Email invalido"),
    password: z.string().min(8,{message: "Senha com no minimo 8 caracteres"}).refine((val) => /[A-Z]/.test(val), "A senha deve conter pelo menos uma letra maiúscula")
  .refine((val) => /\d/.test(val), "A senha deve conter pelo menos um número")
  .refine(
    (val) => /[!@#$%^&*()_+\-=[\]{}|;:'",.<>/?]/.test(val),
    "A senha deve conter pelo menos um caractere especial"
  )
})