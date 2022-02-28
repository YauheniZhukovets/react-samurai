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

export type initialStateProfileType = {
    id: null | number
    login: null | string
    email: null | string
    isAuth: boolean
}

export const authReducer = (state: initialStateProfileType = initialState, action: AuthReducerType): initialStateProfileType => {
    switch (action.type) {
        case 'SET-USER-DATA': {
            return {...state, ...action.payload}
        }
        case 'SET-IS-AUTH': {
            return {...state, isAuth: action.isAuth}
        }
        default:
            return state
    }
}
export type AuthReducerType = SetAuthUserDataACType | SetIsAuth

type SetAuthUserDataACType = ReturnType<typeof setAuthUserDataAC>
export const setAuthUserDataAC = (id: number, login: string, email: string, isAuth: boolean) => {
    return {type: 'SET-USER-DATA', payload: {id, login, email, isAuth}} as const
}

type SetIsAuth = ReturnType<typeof setIsAuthAC>
export const setIsAuthAC = (isAuth: boolean) => {
    return {type: 'SET-IS-AUTH', isAuth} as const
}

export const getAuthMeTC = () => {
    return (dispatch: Dispatch) => {
     return authAPI.authMe()
            .then(res => {
                if (res.resultCode === 0) {
                    let {id, login, email} = res.data
                    dispatch(setAuthUserDataAC(id, login, email, true))
                }
            })
    }
}

export const loginTC = (data: LoginParamsType): AppThunk => {
    return (dispatch) => {
        authAPI.login(data)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(getAuthMeTC())
                } else {
                    let message = res.data.messages.length > 0 ? res.data.messages[0] : 'Email or login is wrong'
                    let action:any = stopSubmit('login', {_error: message})
                    dispatch(action)
                }
            })
    }
}

export const logoutTC = (): AppThunk => {
    return (dispatch) => {
        authAPI.logout()
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(getAuthMeTC())
                    dispatch(setAuthUserDataAC(null!, null!, null!, false))
                }
            })
    }
}



