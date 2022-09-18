import {getAuthMeTC} from 'store/redusers/authReducer';
import {AppThunkType, InferActionsType} from 'store/types';


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
export type AppReducerType = InferActionsType<typeof actions>

export const actions = {
    initializedSuccess: () => ({type: 'app/INITIALIZED-SUCCESS'} as const)
}

export const initializeAppTC = (): AppThunkType => async (dispatch) => {
    await dispatch(getAuthMeTC())
    dispatch(actions.initializedSuccess())
}








