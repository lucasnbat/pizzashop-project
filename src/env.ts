import { z } from 'zod'

const envSchema = z.object({
  MODE: z.enum(['production', 'development', 'test']), // 3 valores possíveis para o mode de dev:test (package.json)
  VITE_API_URL: z.string(),
  VITE_ENABLE_API_DELAY: z.string().transform((value) => value === 'true'),
})

export const env = envSchema.parse(import.meta.env)
