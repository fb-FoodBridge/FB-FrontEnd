import { z } from "zod";

export const ZodLoginSchema = z.object({
  email: z.email("Email invalido"),
  password: z.string(),
});

export const ZodRegisterSchema = z.object({
  username: z.string(),
  email: z.email(),
  password: z
    .string()
    .min(8, { message: "Senha com no minimo 8 caracteres" })
    .refine(
      (val) => /[A-Z]/.test(val),
      "A senha deve conter pelo menos uma letra maiúscula"
    )
    .refine((val) => /\d/.test(val), "A senha deve conter pelo menos um número")
    .refine(
      (val) => /[!@#$%^&*()_+\-=[\]{}|;:'",.<>/?]/.test(val),
      "A senha deve conter pelo menos um caractere especial"
    ),
  cnpj: z.preprocess((input) => {
    if (typeof input === "string") {
      return input.replace(/[/-]/g, "");
    }
    return input;
  }, z.string().min(14, "CNPJ deve ter 14 caracteres").max(14, "CNPJ deve ter 14 caracteres")),
});
