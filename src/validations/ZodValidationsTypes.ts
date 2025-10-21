import { z } from "zod"
import type { ZodRegisterSchema } from "./ZodValidationSchema"

export type ZodRegisterTypes = z.infer<typeof ZodRegisterSchema>