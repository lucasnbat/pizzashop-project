import { http, HttpResponse } from 'msw'

import { GetDayOrdersAmountResponse } from '../get-day-orders-amount'

/**
 * No generics:
 * Primeiro parâmetro é para ver se vai ter parâmetros na URL (nessa rota não temos, never)
 * Segundo é tipagem da requisição, não usaremos, então never;
 * Terceiro é tipagem da resposta, usaremos, então usamos o GetDayOrdersAmountResponse
 */
export const getDayOrdersAmountMock = http.get<never, never, GetDayOrdersAmountResponse>(
    '/metrics/day-orders-amount', () => {
        return HttpResponse.json({
            amount: 20,
            diffFromYesterday: -5,
        })
    }
)