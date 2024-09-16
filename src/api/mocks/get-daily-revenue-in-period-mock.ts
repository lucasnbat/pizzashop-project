import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '../get-revenue-in-period'

/**
 * No generics:
 * Primeiro parâmetro é para ver se vai ter parâmetros na URL (nessa rota não temos, never)
 * Segundo é tipagem da requisição, não usaremos, então never;
 * Terceiro é tipagem da resposta, usaremos, então usamos o GetMonthOrdersAmountResponse
 */
export const getDailyRevenueInPeriodMock = http.get<never, never, GetDailyRevenueInPeriodResponse>(
    '/metrics/daily-receipt-in-period', () => {
        return HttpResponse.json([
            { date: '01/01/2024', receipt: 2000 },
            { date: '02/01/2024', receipt: 540 },
            { date: '03/01/2024', receipt: 1222 },
            { date: '04/01/2024', receipt: 3452 },
            { date: '05/01/2024', receipt: 1345 },
            { date: '06/01/2024', receipt: 2222 },
            { date: '07/01/2024', receipt: 1888 },
        ])
    }
)