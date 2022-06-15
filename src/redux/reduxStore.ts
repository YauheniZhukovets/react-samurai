import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk, {ThunkAction} from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'
import {composeWithDevTools} from 'redux-devtools-extension';
import {ACProfileReducerType, profileReducer} from './profileReducer';
import {ACDialogsReducerType, dialogsReducer} from './dialogsReducer';
import {ACUsersReducerType, usersReducer} from './usersReducer';
import {authReducer, AuthReducerType} from './authReducer';
import {appReducer, AppReducerType} from './appReducer';


const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
//export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppActionType =
    | ACProfileReducerType
    | ACDialogsReducerType
    | ACUsersReducerType
    | AuthReducerType
    | AppReducerType

export type AppThunk<ReturnType = void> =
    ThunkAction<ReturnType, AppStateType, unknown, AppActionType>

//@ts-ignore
window.store = store
