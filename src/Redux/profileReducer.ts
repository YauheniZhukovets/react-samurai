import {Dispatch} from 'redux';
import {profileAPI} from '../API/api';

export type PostType = {
    id: number
    message: string
    likesCount: number
}

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
    'userId': number
    'photos': {
        'small': string
        'large': string
    }
} | null


const initialState = {
    postsData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'My first post!', likesCount: 20},
    ],
    profile: null,
    status: '' ,
}
export type InitialStateProfileType = {
    postsData: Array<PostType>
    profile: ProfileType
    status: string
}

export const profileReducer = (state: InitialStateProfileType = initialState, action: ACProfileReducerType) => {
    switch (action.type) {
        case 'profile/ADD-POST': {
            const body = action.newPostBody
            return {...state, postsData: [...state.postsData, {id: 5, message: body, likesCount: 0}]}
        }
        case 'profile/SET-USER-PROFILE': {
            return {...state, profile: action.profile}
        }
        case 'profile/SET-STATUS': {
            return {...state, status: action.status}
        }
        case 'profile/DELETE-POST': {
            return {...state, postsData: state.postsData.filter(post => post.id !== action.id)}
        }
        case 'profile/SAVE-PHOTO-SUCCESS': {
            return {...state, profile: {...state.profile, photos: action.photos}}
        }
        default:
            return state
    }
}
export type ACProfileReducerType =
    AddPostACType
    | SetUserProfileACType
    | SetStatusACType
    | DeletePostACType
    | SavePhotoSuccessACACType


type AddPostACType = ReturnType<typeof addPostAC>
export const addPostAC = (newPostBody: string) => {
    return {type: 'profile/ADD-POST', newPostBody} as const
}
type SetUserProfileACType = ReturnType<typeof setUserProfileAC>
export const setUserProfileAC = (profile: ProfileType) => {
    return {type: 'profile/SET-USER-PROFILE', profile} as const
}
type SetStatusACType = ReturnType<typeof setStatusAC>
export const setStatusAC = (status: string) => {
    return {type: 'profile/SET-STATUS', status} as const
}
type DeletePostACType = ReturnType<typeof deletePostAC>
export const deletePostAC = (id: number) => {
    return {type: 'profile/DELETE-POST', id} as const
}
type SavePhotoSuccessACACType = ReturnType<typeof savePhotoSuccessAC>
export const savePhotoSuccessAC = (photos: { small: string, large: string }) => {
    return {type: 'profile/SAVE-PHOTO-SUCCESS', photos} as const
}

export const getUserProfileTC = (userId: string) => async (dispatch: Dispatch<ACProfileReducerType>) => {
    const res = await profileAPI.getProfile(userId)
    dispatch(setUserProfileAC(res.data))
}

export const getStatusTC = (status: string) => async (dispatch: Dispatch<ACProfileReducerType>) => {
    const res = await profileAPI.getStatus(status)
    dispatch(setStatusAC(res.data))
}

export const updateStatusTC = (status: string) => async (dispatch: Dispatch<ACProfileReducerType>) => {
    const res = await profileAPI.updateStatus(status)
    if (res.data.resultCode === 0) {
        dispatch(setStatusAC(status))
    }
}
export const savePhotoTC = (file: File) => async (dispatch: Dispatch<ACProfileReducerType>) => {
    const res = await profileAPI.savePhoto(file)
    if (res.data.resultCode === 0) {
        dispatch(savePhotoSuccessAC(res.data.data.photos))
    }
}




