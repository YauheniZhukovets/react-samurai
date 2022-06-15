import React from 'react'
import {connect} from 'react-redux';
import {Header} from './Header';
import {logoutTC} from '../../redux/authReducer';
import {AppStateType} from '../../redux/reduxStore';

type HeaderContainerType = MapStateToPropsType & MapDispatchToProps

type MapStateToPropsType = {
    login: null | string
    isAuth: boolean
}
type MapDispatchToProps = {
    logoutTC: Function
}

class HeaderContainer extends React.Component<HeaderContainerType, AppStateType> {

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

export default connect(mapStateToProps, {logoutTC})
(HeaderContainer)