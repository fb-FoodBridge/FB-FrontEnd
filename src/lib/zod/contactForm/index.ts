import { z } from "zod";

export const contactForm = z.object({
  name: z.string().min(1, { message: "O nome é obrigatório" }),
  email: z
    .string()
    .min(1, { message: "O email é obrigatório" })
    .email({ message: "Insira um email válido" }),
  message: z
    .string()
    .min(1, { message: "A mensagem é obrigatória" })
    .max(500, { message: "A mensagem deve ter no máximo 500 caracteres" }),
});

export type ContactFormType = z.infer<typeof contactForm>