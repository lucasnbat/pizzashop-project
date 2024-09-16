import { http, HttpResponse } from 'msw'
import { RegisterRestaurantBody } from '../register-restaurant'


export const registerRestaurantMock = http.post<never, RegisterRestaurantBody>('/restaurants', async ({ request }) => {
    const { restaurantName } = await request.json()

    if (restaurantName === 'Pizza shop') {
        return new HttpResponse(null, { status: 201 })
    }

    // HttpResponse(corpoDaResposta, {status: codigoDoStatus})
    return new HttpResponse(null, { status: 400 })
})