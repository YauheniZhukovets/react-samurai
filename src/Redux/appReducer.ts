import {AppThunk} from './reduxStore';
import {getAuthMeTC} from './authReducer';

const initialState = {
    initialized: false
}

export type initialStateProfileType = {
    initialized: boolean
}

export const appReducer = (state: initialStateProfileType = initialState, action: AppReducerType): initialStateProfileType => {
    switch (action.type) {
        case 'INITIALIZED-SUCCESS': {
            return {...state, initialized: true}
        }
        default:
            return state
    }
}
export type AppReducerType = InitializedSuccessACType

type InitializedSuccessACType = ReturnType<typeof initializedSuccessAC>
export const initializedSuccessAC = () => {
    return {type: 'INITIALIZED-SUCCESS'} as const
}

export const initializeAppTC = (): AppThunk => (dispatch) => {
    let promise = dispatch(getAuthMeTC())

    promise.then(() => {
        dispatch(initializedSuccessAC())
    })
}








