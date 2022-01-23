import React from 'react'
import {connect} from 'react-redux';
import {Header} from './Header';
import {setAuthUserData, setIsAuth} from '../../Redux/authReducer';
import {AppStateType} from '../../Redux/reduxStore';
import axios from 'axios';

type HeaderContainerType = MapStateToPropsType & MapDispatchToProps

type MapStateToPropsType = {
    login: null | string
    isAuth: boolean
}
type MapDispatchToProps = {
    setAuthUserData: (id: number, login: string, email: string) => void
    setIsAuth: (isAuth: boolean) => void
}

class HeaderContainer extends React.Component<HeaderContainerType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    this.props.setAuthUserData(id, login, email)
                    this.props.setIsAuth(true)
                } else {
                    this.props.setIsAuth(false)
                }
            })
    }

    render() {
        return (
            <Header  {...this.props}/>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth:state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {setAuthUserData,setIsAuth})(HeaderContainer)