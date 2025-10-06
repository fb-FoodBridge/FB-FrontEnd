import { z } from "zod"
import type { ZodLoginSchema } from "./ZodValidationSchema"

export type ZodLoginTypes = z.infer<typeof ZodLoginSchema>