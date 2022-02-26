import {applyMiddleware, combineReducers, createStore} from 'redux';

import {ACDialogsReducerType, DialogsReducer} from './dialogsReducer';
import {ACProfileReducerType, ProfileReducer} from './profileReducer';
import {ACUsersReducerType, UsersReducer} from './usersReducer';
import {authReducer, AuthReducerType} from './authReducer';
import thunk, {ThunkAction} from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'


const rootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    usersPage: UsersReducer,
    auth: authReducer,
    form: formReducer
})

export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppActionType =
    | ACProfileReducerType
    | ACDialogsReducerType
    | ACUsersReducerType
    | AuthReducerType

export type AppThunk<ReturnType = void> =
    ThunkAction<ReturnType, AppStateType, unknown, AppActionType>

//@ts-ignore
window.store = store
