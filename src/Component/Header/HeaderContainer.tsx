import React from 'react'
import {connect} from 'react-redux';
import {Header} from './Header';
import {getAuthMeTC} from '../../Redux/authReducer';
import {AppStateType} from '../../Redux/reduxStore';

type HeaderContainerType = MapStateToPropsType & MapDispatchToProps

type MapStateToPropsType = {
    login: null | string
    isAuth: boolean
}
type MapDispatchToProps = {
    getAuthMeTC: () => void
}

class HeaderContainer extends React.Component<HeaderContainerType, AppStateType> {

    componentDidMount() {
        this.props.getAuthMeTC()
    }

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

export default connect(mapStateToProps,
    {
        getAuthMeTC,
    })
(HeaderContainer)