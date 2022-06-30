import {ResultCodesEnum} from './enums';

export type ProfileType = {
    'aboutMe': string
    'contacts': {
        'facebook': string,
        'website': string,
        'vk': string,
        'twitter': string,
        'instagram': string,
        'youtube': string,
        'github': string,
        'mainLink': string
    }
    'lookingForAJob': string
    'lookingForAJobDescription': string
    'fullName': string
    'userId': string
    'photos': {
        'small': string
        'large': string
    }
}
export type UserPhotoType = {
    small: string
    large: string
}
export type UserType = {
    photos: UserPhotoType
    name: string;
    id: number
    followed: boolean
    location: {
        country: string
        city: string
    }
    status: string
}
export type UserResponseType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}
export type LoginParamsType = {
    email: string
    password: string
    rememberMe?: boolean
    captcha?: string
}
export type AuthMeType = {
    email: string
    id: number
    login: string
}
export type BaseApiType<D = {}, RC = ResultCodesEnum> = {
    data: D
    fieldsErrors: string[]
    messages: string[]
    resultCode: RC
}
export type SecurityType = {
    url: string
}