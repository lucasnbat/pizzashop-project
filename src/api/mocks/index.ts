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
import { getProfileMock } from './get-profile-mock'
import { getManagedRestaurantMock } from './get-managed-restaurant-mock'
import { updateProfileMock } from './update-profile-mock'
import { getOrdersMock } from './get-orders-mock'
import { getOrderDetailsMock } from './get-order-details-mock'
import { approveOrderMock } from './approve-order-mock'
import { cancelOrderMock } from './cancel-order-mock'
import { deliverOrderMock } from './deliver-order-mock'
import { dispatchOrderMock } from './dispatch-order-mock'

export const worker = setupWorker(
    signInMock,
    registerRestaurantMock,
    getMonthCanceledOrdersAmountMock,
    getMonthRevenueMock,
    getDayOrdersAmountMock,
    getMonthOrdersAmountMock,
    getPopularProductsMock,
    getDailyRevenueInPeriodMock,
    getProfileMock,
    getManagedRestaurantMock,
    updateProfileMock,
    getOrdersMock,
    getOrderDetailsMock,
    approveOrderMock,
    cancelOrderMock,
    deliverOrderMock,
    dispatchOrderMock,
)

export async function enableMSW() {
    if (env.MODE !== 'test') { // se não for ambiente de test, não rodará no msw
        return
    }

    await worker.start() // se for test, inicia as funções de mock
}

