import React from 'react'
import {connect} from 'react-redux';
import {Header} from './Header';
import {setAuthUserDataAC, setAuthUserTC, setIsAuthAC} from '../../Redux/authReducer';
import {AppStateType} from '../../Redux/reduxStore';

type HeaderContainerType = MapStateToPropsType & MapDispatchToProps

type MapStateToPropsType = {
    login: null | string
    isAuth: boolean
}
type MapDispatchToProps = {
    setAuthUserDataAC: (id: number, login: string, email: string) => void
    setIsAuthAC: (isAuth: boolean) => void
    setAuthUserTC: () => void
}

class HeaderContainer extends React.Component<HeaderContainerType, AppStateType> {

    componentDidMount() {
        this.props.setAuthUserTC()
        // headerAPI.setAuthUser()
        //     .then(data => {
        //         if (data.resultCode === 0) {
        //             let {id, login, email} = data.data
        //             this.props.setAuthUserDataAC(id, login, email)
        //             this.props.setIsAuthAC(true)
        //         } else {
        //             this.props.setIsAuthAC(false)
        //         }
        //     })
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
        setAuthUserDataAC,
        setIsAuthAC,
        setAuthUserTC
    })
(HeaderContainer)