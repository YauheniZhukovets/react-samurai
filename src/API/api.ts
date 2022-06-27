import axios, {AxiosResponse} from 'axios';
import {ProfileType} from '../types/types';

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY': '066ae431-6115-49fc-b06c-595e5096a36d'
    },
})

export const usersAPI = {
    getUsers(currentNumberPages: number, pageSize: number) {
        return instance.get(`users?page=${currentNumberPages}&count=${pageSize}`)
            .then((response) => {
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
    },
    login(data: LoginParamsType) {
        return instance.post<BaseProfileType<{ userId: number }>>('/auth/login', data)
    },
    logout() {
        return instance.delete<BaseProfileType>('/auth/login')
    },
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get<any,AxiosResponse<SecurityType>>(`security/get-captcha-url`)
    }
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put<BaseProfileType>(`profile/status/`, {status: status})
    },
    savePhoto(file: File) {
        let formData = new FormData()
        formData.append('image', file)
        return instance.put('profile/photo/',formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(data: ProfileType) {
        return instance.put('profile/', data)
    }

}

export type LoginParamsType = {
    email: string
    password: string
    rememberMe?: boolean
    captcha?: string
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

type SecurityType = {
    url: string
}
