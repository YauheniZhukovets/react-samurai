import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {AppStateType} from '../../Redux/reduxStore';
import {Users} from './Users';
import {followAC, initialStateUserType, setUserAC, unfollowAC, UserType} from '../../Redux/usersReducer';


export type UsersType = MapStateToPropsType & mapDispatchToPropsType

type MapStateToPropsType = {
    state: initialStateUserType
}
type mapDispatchToPropsType = {
    follow: (userID:number) => void
    unfollow: (userID:number) => void
    setUsers: (users:UserType) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        state: state.usersPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userID:number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID:number) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users:UserType) => {
            dispatch(setUserAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)