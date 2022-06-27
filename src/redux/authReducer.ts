import {authAPI, LoginParamsType, securityAPI} from '../API/api';
import {Dispatch} from 'redux';
import {AppThunk} from './reduxStore';
import {stopSubmit} from 'redux-form';

const initialState = {
    id: null as number | null,
    login: null as string | null,
    email: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null
}

export type initialStateAuthType = typeof initialState

export const authReducer = (state = initialState, action: AuthReducerType): initialStateAuthType => {
    switch (action.type) {
        case 'auth/SET-USER-DATA': {
            return {...state, ...action.payload}
        }
        case 'auth/SET-IS-AUTH': {
            return {...state, isAuth: action.isAuth}
        }
        case 'auth/SET-CAPTCHA-URL-SUCCESS': {
            return {...state, captchaUrl: action.captcha}
        }
        default:
            return state
    }
}
export type AuthReducerType = SetAuthUserDataACType | SetIsAuth | GetCaptchaUrlSuccess

type SetAuthUserDataACType = ReturnType<typeof setAuthUserDataAC>
export const setAuthUserDataAC = (id: number | null, login: string | null, email: string | null, isAuth: boolean, captchaUrl: string | null) => {
    return {type: 'auth/SET-USER-DATA', payload: {id, login, email, isAuth, captchaUrl}} as const
}

type SetIsAuth = ReturnType<typeof setIsAuthAC>
export const setIsAuthAC = (isAuth: boolean) => {
    return {type: 'auth/SET-IS-AUTH', isAuth} as const
}

type GetCaptchaUrlSuccess = ReturnType<typeof getCaptchaUrlSuccess>
export const getCaptchaUrlSuccess = (captcha: string) => {
    return {type: 'auth/SET-CAPTCHA-URL-SUCCESS', captcha} as const
}

export const getAuthMeTC = () => async (dispatch: Dispatch) => {
    const res = await authAPI.authMe()

    if (res.resultCode === 0) {
        let {id, login, email} = res.data
        dispatch(setAuthUserDataAC(id, login, email, true, null))
    }
}

export const loginTC = (data: LoginParamsType): AppThunk => async (dispatch) => {
    const res = await authAPI.login(data)

    if (res.data.resultCode === 0) {
        await dispatch(getAuthMeTC())
    } else {
        if (res.data.resultCode === 10) {
            dispatch(getCaptchaUrlTC())
        }
        let message = res.data.messages.length > 0 ? res.data.messages[0] : 'Email or login is wrong'
        let action: any = stopSubmit('login', {_error: message})
        dispatch(action)
    }
}

export const logoutTC = (): AppThunk => async (dispatch) => {
    const res = await authAPI.logout()

    if (res.data.resultCode === 0) {
        await dispatch(getAuthMeTC())
        dispatch(setAuthUserDataAC(null, null, null, false, null))
    }
}

export const getCaptchaUrlTC = (): AppThunk => async (dispatch) => {
    const res = await securityAPI.getCaptchaUrl()
    dispatch(getCaptchaUrlSuccess(res.data.url))
}



