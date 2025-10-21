import { z } from "zod";

export const authSchema = z.object({
  email: z.email(),
  password: z.string()
}) 

export const registerSchema = z.object({
  email: z.email(),
  password: z.string(),
  cnpj: z.string(),
  username: z.string()
}) 

export type RegisterType = z.infer<typeof registerSchema> 