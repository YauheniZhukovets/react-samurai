import {Dispatch} from 'redux';
import {profileAPI} from '../API/api';

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type ProfileType = {
    'aboutMe': string,
    'contacts': {
        'facebook': string,
        'website': string,
        'vk': string,
        'twitter': string,
        'instagram': string,
        'youtube': string,
        'github': string,
        'mainLink': string
    },
    'lookingForAJob': string,
    'lookingForAJobDescription': string,
    'fullName': string,
    'userId': number,
    'photos': {
        'small': string,
        'large': string
    }
} | null

const initialState = {
    postsData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'My first post!', likesCount: 20},
    ] as Array<PostsType>,
    newPostText: '' as string,
    profile: null as ProfileType
}
export type initialStateProfileType = typeof initialState


export const ProfileReducer = (state: initialStateProfileType = initialState, action: ACProfileReducerType): initialStateProfileType => {
    switch (action.type) {
        case 'UPDATE-NEW-POST-TEXT': {
            return {...state, newPostText: action.newText}
        }
        case 'ADD-POST': {
            const body = state.newPostText
            return {...state, newPostText: '', postsData: [...state.postsData, {id: 5, message: body, likesCount: 0}]}
        }
        case 'SET-USER-PROFILE': {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }
}
type ACProfileReducerType = AddPostACType | UpdateNewPostTextACType | setUserProfileACType

type UpdateNewPostTextACType = ReturnType<typeof UpdateNewPostTextAC>
export const UpdateNewPostTextAC = (newText: string) => {
    return {type: 'UPDATE-NEW-POST-TEXT', newText: newText} as const
}
type AddPostACType = ReturnType<typeof AddPostAC>
export const AddPostAC = () => {
    return {type: 'ADD-POST'} as const
}
type setUserProfileACType = ReturnType<typeof setUserProfileAC>
export const setUserProfileAC = (profile: any) => {
    return {type: 'SET-USER-PROFILE', profile} as const
}

export const getUserProfileTC = (userId: string) => {
    return (dispatch: Dispatch<ACProfileReducerType>) => {
        profileAPI.getProfile(userId).then(data => {
            dispatch(setUserProfileAC(data))
        })
    }
}