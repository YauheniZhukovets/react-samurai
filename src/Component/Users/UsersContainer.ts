import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {AppStateType} from '../../Redux/reduxStore';
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUserAC,
    unfollowAC,
    UserType
} from '../../Redux/usersReducer';
import UsersAPIComponent from './UsersAPIComponent';


export type UsersType = MapStateToPropsType & mapDispatchToPropsType

export type MapStateToPropsType = {
    userPage: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPages: number
}
type mapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrenPage: (currentPages: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        userPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPages: state.usersPage.currentPages
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUserAC(users))
        },
        setCurrenPage: (currentPages: number) => {
            dispatch(setCurrentPageAC(currentPages))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)