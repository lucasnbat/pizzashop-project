import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
    '/me',
    () => {
        return HttpResponse.json({
            id: 'custom-user-id',
            name: 'John Doe',
            email: 'johndoe@example',
            createdAt: new Date(),
            phone: '66999778833',
            role: 'manager',
            updateAt: null,
        })
    }
)