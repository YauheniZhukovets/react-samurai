import {getAuthMeTC} from './authReducer';
import {AppThunk} from './reduxStore';

const initialState = {
    initialized: false
}

export type InitialStateAppType = typeof initialState

export const appReducer = (state = initialState, action: AppReducerType): InitialStateAppType => {
    switch (action.type) {
        case 'app/INITIALIZED-SUCCESS': {
            return {...state, initialized: true}
        }
        default:
            return state
    }
}
export type AppReducerType = InitializedSuccessACType

type InitializedSuccessACType = ReturnType<typeof initializedSuccessAC>
export const initializedSuccessAC = () => {
    return {type: 'app/INITIALIZED-SUCCESS'} as const
}

export const initializeAppTC = (): AppThunk => async (dispatch) => {
    await dispatch(getAuthMeTC())
    dispatch(initializedSuccessAC())
}








