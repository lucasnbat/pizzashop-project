import { http, HttpResponse } from 'msw'

import { GetMonthCanceledOrdersAmountResponse } from '../get-month-canceled-orders-amount'

/**
 * No generics:
 * Primeiro parâmetro é para ver se vai ter parâmetros na URL (nessa rota não temos, never)
 * Segundo é tipagem da requisição, não usaremos, então never;
 * Terceiro é tipagem da resposta, usaremos, então usamos o GetMonthOrdersAmountResponse
 */
export const getMonthCanceledOrdersAmountMock = http.get<never, never, GetMonthCanceledOrdersAmountResponse>(
    '/metrics/month-canceled-orders-amount', () => {
        return HttpResponse.json({
            amount: 5,
            diffFromLastMonth: -5
        })
    }
)