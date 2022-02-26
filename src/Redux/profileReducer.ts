import {Dispatch} from 'redux';
import {profileAPI} from '../API/api';

export type PostsType = {
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
    ] as Array<PostsType>,
    profile: null as ProfileType,
    status: ''  as string,
}
export type initialStateProfileType = typeof initialState


export const ProfileReducer = (state: initialStateProfileType = initialState, action: ACProfileReducerType): initialStateProfileType => {
    switch (action.type) {
        case 'ADD-POST': {
            const body = action.newPostBody
            return {...state, postsData: [...state.postsData, {id: 5, message: body, likesCount: 0}]}
        }
        case 'SET-USER-PROFILE': {
            return {...state, profile: action.profile}
        }
        case 'SET-STATUS': {
            return {...state, status: action.status}
        }
        default:
            return state
    }
}
export type ACProfileReducerType = AddPostACType |  setUserProfileACType | SetStatus


type AddPostACType = ReturnType<typeof AddPostAC>
export const AddPostAC = (newPostBody: string) => {
    return {type: 'ADD-POST', newPostBody} as const
}
type setUserProfileACType = ReturnType<typeof setUserProfileAC>
export const setUserProfileAC = (profile: ProfileType) => {
    return {type: 'SET-USER-PROFILE', profile} as const
}
type SetStatus = ReturnType<typeof setStatusAC>
export const setStatusAC = (status: string) => {
    return {type: 'SET-STATUS', status} as const
}

export const getUserProfileTC = (userId: string) => {
    return (dispatch: Dispatch<ACProfileReducerType>) => {
        profileAPI.getProfile(userId).then(response => {
            dispatch(setUserProfileAC(response.data))
        })
    }
}

export const getStatusTC = (status: string) => {
    return (dispatch: Dispatch<ACProfileReducerType>) => {
        profileAPI.getStatus(status).then(response => {
            dispatch(setStatusAC(response.data))
        })
    }
}

export const updateStatusTC = (status: string) => {
    return (dispatch: Dispatch<ACProfileReducerType>) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if(response.data.resultCode === 0) {
                    dispatch(setStatusAC(status))
                }
        })
    }
}



