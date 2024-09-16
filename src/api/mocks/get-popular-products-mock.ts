import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '../get-popular-products'

/**
 * No generics:
 * Primeiro parâmetro é para ver se vai ter parâmetros na URL (nessa rota não temos, never)
 * Segundo é tipagem da requisição, não usaremos, então never;
 * Terceiro é tipagem da resposta, usaremos, então usamos o GetMonthOrdersAmountResponse
 */
export const getPopularProductsMock = http.get<never, never, GetPopularProductsResponse>(
    '/metrics/popular-products', () => {
        return HttpResponse.json([
            { product: 'Pizza 01', amount: 5 },
            { product: 'Pizza 02', amount: 15 },
            { product: 'Pizza 11', amount: 4 },
            { product: 'Pizza 13', amount: 25 },
            { product: 'Pizza 14', amount: 35 },
            { product: 'Pizza 17', amount: 15 },
            { product: 'Pizza 23', amount: 3 },
        ])
    }
)