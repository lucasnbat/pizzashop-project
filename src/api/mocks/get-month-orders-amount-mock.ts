import { http, HttpResponse } from 'msw'

import { GetMonthOrdersAmountResponse } from '../get-month-orders-amount'

/**
 * No generics:
 * Primeiro parâmetro é para ver se vai ter parâmetros na URL (nessa rota não temos, never)
 * Segundo é tipagem da requisição, não usaremos, então never;
 * Terceiro é tipagem da resposta, usaremos, então usamos o GetMonthOrdersAmountResponse
 */
export const getMonthOrdersAmountMock = http.get<never, never, GetMonthOrdersAmountResponse>(
    '/metrics/month-orders-amount', () => {
        return HttpResponse.json({
            amount: 20,
            diffFromLastMonth: 7
        })
    }
)