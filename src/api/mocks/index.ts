import { env } from '@/env'
import { setupWorker } from 'msw/browser'
import { signInMock } from './sign-in-mock'
import { registerRestaurantMock } from './register-restaurant-mock'

export const worker = setupWorker(signInMock, registerRestaurantMock)

export async function enableMSW() {
    if (env.MODE !== 'test') { // se não for ambiente de test, não rodará no msw
        return
    }

    await worker.start() // se for test, inicia as funções de mock
}

