import { email, z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, { message: "O nome é obrigatório" }),
  email: z
    .email({ message: "Insira um email válido" })
    .min(1, { message: "O email é obrigatório" }),
  message: z
    .string()
    .min(1, { message: "A mensagem é obrigatória" })
    .max(500, { message: "A mensagem deve ter no máximo 500 caracteres" }),
});

export type ContactFormType = z.infer<typeof contactFormSchema>

