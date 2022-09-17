import {Dispatch} from 'redux';
import {stopSubmit} from 'redux-form';
import {ResultCodeForCaptcha, ResultCodesEnum} from 'api/enums';
import {LoginParamsType} from 'api/types';
import {authAPI} from 'api/auth-api';
import {securityAPI} from 'api/security-api';
import {AppActionType, AppThunkType, InferActionsType} from 'store/types';


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
export type AuthReducerType = InferActionsType<typeof actions>

export const actions = {
    setAuthUserData: (id: number | null, login: string | null, email: string | null, isAuth: boolean, captchaUrl: string | null) => ({
        type: 'auth/SET-USER-DATA',
        payload: {id, login, email, isAuth, captchaUrl}
    } as const),
    setIsAuth: (isAuth: boolean) => ({type: 'auth/SET-IS-AUTH', isAuth} as const),
    getCaptchaUrlSuccess: (captcha: string) => ({type: 'auth/SET-CAPTCHA-URL-SUCCESS', captcha} as const)
}


export const getAuthMeTC = () => async (dispatch: Dispatch) => {
    const res = await authAPI.authMe()

    if (res.resultCode === ResultCodesEnum.Success) {
        let {id, login, email} = res.data
        dispatch(actions.setAuthUserData(id, login, email, true, null))
    }
}

export const loginTC = (data: LoginParamsType): AppThunkType => async (dispatch) => {
    const res = await authAPI.login(data)

    if (res.data.resultCode === ResultCodesEnum.Success) {
        await dispatch(getAuthMeTC())
    } else {
        if (res.data.resultCode === ResultCodeForCaptcha.Captcha) {
            dispatch(getCaptchaUrlTC())
        }
        let message = res.data.messages.length > 0 ? res.data.messages[0] : 'Email or login is wrong'
        let action: AppActionType = stopSubmit('login', {_error: message})
        dispatch(action)
    }
}

export const logoutTC = (): AppThunkType => async (dispatch) => {
    const res = await authAPI.logout()

    if (res.data.resultCode === ResultCodesEnum.Success) {
        await dispatch(getAuthMeTC())
        dispatch(actions.setAuthUserData(null, null, null, false, null))
    }
}

export const getCaptchaUrlTC = (): AppThunkType => async (dispatch) => {
    const res = await securityAPI.getCaptchaUrl()
    dispatch(actions.getCaptchaUrlSuccess(res.data.url))
}



