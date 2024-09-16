import { http, HttpResponse } from 'msw'

import { GetMonthRevenueResponse } from '../get-month-revenue'

/**
 * No generics:
 * Primeiro parâmetro é para ver se vai ter parâmetros na URL (nessa rota não temos, never)
 * Segundo é tipagem da requisição, não usaremos, então never;
 * Terceiro é tipagem da resposta, usaremos, então usamos o GetMonthOrdersAmountResponse
 */
export const getMonthRevenueMock = http.get<never, never, GetMonthRevenueResponse>(
    '/metrics/month-receipt', () => {
        return HttpResponse.json({
            receipt: 11900,
            diffFromLastMonth: 15,
        })
    }
)