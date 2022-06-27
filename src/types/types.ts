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
export type UserType = {
    photos: {
        small: string
        large: string
    }
    name: string;
    id: number
    followed: boolean
    location: {
        country: string
        city: string
    }
    status: string
}