import React, {Component, ComponentType} from 'react';
import {Navigate} from 'react-router-dom';
import {connect} from 'react-redux';
import {AppStateType} from '../Redux/reduxStore';

type MapStateToProps = {
    isAuth: boolean
}
const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect <T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: MapStateToProps) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Navigate to="/login"/>

        return <Component {...restProps as T}/>
    }

    return connect(mapStateToProps)(RedirectComponent)
}