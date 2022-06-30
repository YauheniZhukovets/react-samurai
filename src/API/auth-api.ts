import {AxiosResponse} from 'axios';
import {AuthMeType, BaseApiType, LoginParamsType} from './types';
import {instance} from './instance';
import {ResultCodeForCaptcha, ResultCodesEnum} from './enums';

export const authAPI = {
    authMe() {
        return instance.get<any, AxiosResponse<BaseApiType<AuthMeType>>>(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    login(data: LoginParamsType) {
        return instance.post<any, AxiosResponse<BaseApiType<{ userId: number }, ResultCodesEnum | ResultCodeForCaptcha>>>('/auth/login', data)
    },
    logout() {
        return instance.delete<any, AxiosResponse<BaseApiType>>('/auth/login')
    },
}