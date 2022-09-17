import {stopSubmit} from 'redux-form';
import {v1} from 'uuid';
import {ResultCodesEnum} from 'api/enums';
import {ProfileType} from 'api/types';
import {profileAPI} from 'api/profile-api';
import {AppStateType, AppThunkType, InferActionsType} from 'store/types';

const initialState = {
    postsData: [
        {id: 1, message: 'My first post!', likesCount: 20},
        {id: 2, message: 'Hi, how are you?', likesCount: 15},
    ],
    profile: null as unknown as ProfileType,
    status: '',
}

export type InitialStateProfileType = typeof initialState

export const profileReducer = (state = initialState, action: ProfileReducerType): InitialStateProfileType => {
    switch (action.type) {
        case 'profile/ADD-POST': {
            const body = action.newPostBody
            return {...state, postsData: [...state.postsData, {id: +v1(), message: body, likesCount: 0}]}
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
export type ProfileReducerType = InferActionsType<typeof actions>

export const actions = {
    addPost: (newPostBody: string) => ({type: 'profile/ADD-POST', newPostBody} as const),
    setUserProfile: (profile: ProfileType) => ({type: 'profile/SET-USER-PROFILE', profile} as const),
    setStatus: (status: string) => ({type: 'profile/SET-STATUS', status} as const),
    deletePost: (id: number) => ({type: 'profile/DELETE-POST', id} as const),
    savePhotoSuccess: (photos: { small: string, large: string }) => ({
        type: 'profile/SAVE-PHOTO-SUCCESS',
        photos
    } as const),
}


export const getUserProfileTC = (userId: string): AppThunkType => async (dispatch) => {
    const res = await profileAPI.getProfile(userId)
    dispatch(actions.setUserProfile(res.data))
}

export const getStatusTC = (status: string): AppThunkType => async (dispatch) => {
    const res = await profileAPI.getStatus(status)
    dispatch(actions.setStatus(res.data))
}

export const updateStatusTC = (status: string): AppThunkType => async (dispatch) => {
    const res = await profileAPI.updateStatus(status)
    if (res.data.resultCode === ResultCodesEnum.Success) {
        dispatch(actions.setStatus(status))
    }
}
export const savePhotoTC = (file: File): AppThunkType => async (dispatch) => {
    const res = await profileAPI.savePhoto(file)
    if (res.data.resultCode === ResultCodesEnum.Success) {
        dispatch(actions.savePhotoSuccess(res.data.data))
    }
}

export const saveProfileTC = (profile: ProfileType): AppThunkType => async (dispatch, getState: () => AppStateType) => {
    const state = getState()
    const res = await profileAPI.saveProfile(profile)
    if (res.data.resultCode === ResultCodesEnum.Success) {
        dispatch(getUserProfileTC(state.profilePage.profile.userId))
    } else {
        let message = res.data.messages.length > 0 ? res.data.messages[0] : 'Field is wrong'
        dispatch(stopSubmit('edit-profile', {_error: message}))
        return Promise.reject(res.data.messages[0])
    }
}



