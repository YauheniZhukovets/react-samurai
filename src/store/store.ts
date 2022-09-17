import {combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'
import {authReducer} from 'store/redusers/authReducer';
import {profileReducer} from 'store/redusers/profileReducer';
import {dialogsReducer} from 'store/redusers/dialogsReducer';
import {usersReducer} from 'store/redusers/usersReducer';
import {appReducer} from 'store/redusers/appReducer';
import {configureStore} from '@reduxjs/toolkit';


const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})

//@ts-ignore
window.store = store
