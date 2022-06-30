import {AxiosResponse} from 'axios';
import {BaseApiType, ProfileType, UserPhotoType} from './types';
import {instance} from './instance';

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
    saveProfile(data: ProfileType) {
        return instance.put<any, AxiosResponse<BaseApiType>>('profile/', data)
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
}