import axios from 'axios'

import { env } from '@/env'

export const api = axios.create({
  baseURL: env.VITE_API_URL,
  withCredentials: true, // cookies do front automat. enviados para o back
})

// Se houver delay habilitado, vai interceptar cada requisição e
if (env.VITE_ENABLE_API_DELAY) {
  api.interceptors.request.use(async (config) => {
    // botar tempo de delay
    await new Promise((resolve) => setTimeout(resolve, Math.round(Math.random() * 3000)))

    // retorna a req com as config noramis
    return config
  })
}
