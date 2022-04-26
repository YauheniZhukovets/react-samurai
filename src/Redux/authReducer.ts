import {authAPI, LoginParamsType} from '../API/api';
import {Dispatch} from 'redux';
import {AppThunk} from './reduxStore';
import {stopSubmit} from 'redux-form';

const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
}

export type initialStateAuthType = {
    id: null | number
    login: null | string
    email: null | string
    isAuth: boolean
}

export const authReducer = (state: initialStateAuthType = initialState, action: AuthReducerType): initialStateAuthType => {
    switch (action.type) {
        case 'auth/SET-USER-DATA': {
            return {...state, ...action.payload}
        }
        case 'auth/SET-IS-AUTH': {
            return {...state, isAuth: action.isAuth}
        }
        default:
            return state
    }
}
export type AuthReducerType = SetAuthUserDataACType | SetIsAuth

type SetAuthUserDataACType = ReturnType<typeof setAuthUserDataAC>
export const setAuthUserDataAC = (id: number, login: string, email: string, isAuth: boolean) => {
    return {type: 'auth/SET-USER-DATA', payload: {id, login, email, isAuth}} as const
}

type SetIsAuth = ReturnType<typeof setIsAuthAC>
export const setIsAuthAC = (isAuth: boolean) => {
    return {type: 'auth/SET-IS-AUTH', isAuth} as const
}

export const getAuthMeTC = () => async (dispatch: Dispatch) => {
    const res = await authAPI.authMe()

    if (res.resultCode === 0) {
        let {id, login, email} = res.data
        dispatch(setAuthUserDataAC(id, login, email, true))
    }
}

export const loginTC = (data: LoginParamsType): AppThunk => async (dispatch) => {
    const res = await authAPI.login(data)

    if (res.data.resultCode === 0) {
        await dispatch(getAuthMeTC())
    } else {
        let message = res.data.messages.length > 0 ? res.data.messages[0] : 'Email or login is wrong'
        let action: any = stopSubmit('login', {_error: message})
        dispatch(action)
    }
}

export const logoutTC = (): AppThunk => async (dispatch) => {
    const res = await authAPI.logout()

    if (res.data.resultCode === 0) {
        await dispatch(getAuthMeTC())
        dispatch(setAuthUserDataAC(null!, null!, null!, false))
    }
}



