import React from 'react'
import {connect} from 'react-redux';
import {Header} from './Header';
import {logoutTC} from '../../redux/authReducer';
import {AppStateType} from '../../redux/store';

type MapStateToPropsType = {
    login: null | string
    isAuth: boolean
}

type MapDispatchToPropsType = {
    logoutTC: () => void
}

export type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    render() {
        return (
            <Header  {...this.props}/>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect<MapStateToPropsType,MapDispatchToPropsType, unknown, AppStateType>(mapStateToProps, {logoutTC})
(HeaderContainer)