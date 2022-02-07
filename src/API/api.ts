import axios from 'axios';

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY': '6b986b64-b31b-4013-a97c-d743f4ca9a13'
    },
})

export const usersAPI = {
    getUsers(currentNumberPages: number, pageSize: number) {
        return instance.get(`users?page=${currentNumberPages}&count=${pageSize}`)
            .then(response => {
                    return response.data
                } //вернул promise в котором data
            )
    },
    unfollowUser(userId: number) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data.resultCode
            })
    },
    followUser(userId: number) {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data.resultCode
            })
    }
}

export const authAPI = {
    authMe() {
        return instance.get<BaseProfileType<AuthMeType>>(`auth/me`)
            .then(response => {
                return response.data
            })
    }
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status:string) {
        return instance.put<BaseProfileType>(`profile/status/`,{status:status})
    }
}

type AuthMeType = {
    email: string
    id: number
    login: string
}
type BaseProfileType<T = {}> = {
    data: T
    fieldsErrors: string[]
    messages: string[]
    resultCode: number
}
