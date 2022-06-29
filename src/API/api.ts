import axios, {AxiosResponse} from 'axios';
import {
    AuthMeType,
    BaseApiType,
    LoginParamsType,
    ProfileType,
    SecurityType,
    UserPhotoType,
    UserResponseType
} from '../types/types';

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY': '066ae431-6115-49fc-b06c-595e5096a36d'
    },
})

export const usersAPI = {
    getUsers(currentNumberPages: number, pageSize: number) {
        return instance.get<any, AxiosResponse<UserResponseType>>(`users?page=${currentNumberPages}&count=${pageSize}`)
            .then((response) => {
                    return response.data
                } //вернул promise в котором data
            )
    },
    unfollowUser(userId: number) {
        return instance.delete<any, AxiosResponse<BaseApiType>>(`follow/${userId}`)
            .then(response => {
                return response.data.resultCode
            })
    },
    followUser(userId: number) {
        return instance.post<any, AxiosResponse<BaseApiType>>(`follow/${userId}`)
            .then(response => {
                return response.data.resultCode
            })
    }
}

export const authAPI = {
    authMe() {
        return instance.get<any, AxiosResponse<BaseApiType<AuthMeType>>>(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    login(data: LoginParamsType) {
        return instance.post<any, AxiosResponse<BaseApiType<{ userId: number }>>>('/auth/login', data)
    },
    logout() {
        return instance.delete<any, AxiosResponse<BaseApiType>>('/auth/login')
    },
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get<any, AxiosResponse<SecurityType>>(`security/get-captcha-url`)
    }
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get<any, AxiosResponse<ProfileType>>(`profile/` + userId)
    },
    getStatus(userId: string) {
        return instance.get<any, AxiosResponse<string>>(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put<any, AxiosResponse<BaseApiType>>(`profile/status/`, {status: status})
    },
    savePhoto(file: File) {
        let formData = new FormData()
        formData.append('image', file)
        return instance.put<any, AxiosResponse<BaseApiType<UserPhotoType>>>('profile/photo/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(data: ProfileType) {
        return instance.put<any, AxiosResponse<BaseApiType>>('profile/', data)
    }

}

