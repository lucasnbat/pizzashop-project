import { api } from "@/lib/axios"

export interface GetDailyRevenueInPeriodQuery {
    from?: Date
    to?: Date
}

// unico jeito de padronizar retorno de info. em formato de vetor
export type GetDailyRevenueInPeriodResponse = {
    date: string
    receipt: number
}[]

export async function getDailyRevenueInPeriod({ from, to }: GetDailyRevenueInPeriodQuery) {
    const response = await api.get<GetDailyRevenueInPeriodResponse>(
        '/metrics/daily-receipt-in-period',
        {
            params: {
                from,
                to,
            }
        }
    )

    return response.data
}