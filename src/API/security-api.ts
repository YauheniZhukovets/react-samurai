import {AxiosResponse} from 'axios';
import {SecurityType} from './types';
import {instance} from './instance';

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get<any, AxiosResponse<SecurityType>>(`security/get-captcha-url`)
    }
}