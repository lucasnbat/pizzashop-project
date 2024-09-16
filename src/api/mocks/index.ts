import { env } from '@/env'
import { setupWorker } from 'msw/browser'
import { signInMock } from './sign-in-mock'
import { registerRestaurantMock } from './register-restaurant-mock'
import { getMonthCanceledOrdersAmountMock } from './get-month-canceled-orders-amount-mock'
import { getMonthRevenueMock } from './get-month-revenue-mock'
import { getDayOrdersAmountMock } from './get-day-orders-amount-mock'
import { getMonthOrdersAmountMock } from './get-month-orders-amount-mock'
import { getPopularProductsMock } from './get-popular-products-mock'
import { getDailyRevenueInPeriodMock } from './get-daily-revenue-in-period-mock'

export const worker = setupWorker(
    signInMock,
    registerRestaurantMock,
    getMonthCanceledOrdersAmountMock,
    getMonthRevenueMock,
    getDayOrdersAmountMock,
    getMonthOrdersAmountMock,
    getPopularProductsMock,
    getDailyRevenueInPeriodMock,
)

export async function enableMSW() {
    if (env.MODE !== 'test') { // se não for ambiente de test, não rodará no msw
        return
    }

    await worker.start() // se for test, inicia as funções de mock
}

