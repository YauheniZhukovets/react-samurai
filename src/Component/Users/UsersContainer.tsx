import {connect} from 'react-redux';
import {AppStateType} from '../../Redux/reduxStore';
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUser,
    toggleIsFetching,
    unfollow,
    UserType,
} from '../../Redux/usersReducer';
import React from 'react';
import axios from 'axios';
import {Users} from './Users';
import {Preloader} from '../common/Preloader/Preloader';


type MapStateToPropsType = {
    userPage: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPages: number
    isFetching: boolean
}
type mapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUser: (users: Array<UserType>) => void
    setCurrentPage: (currentPages: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

export type UsersType = MapStateToPropsType & mapDispatchToPropsType


class UsersComponent extends React.Component<UsersType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPages}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUser(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUser(response.data.items)
        })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}

            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   onPageChanged={this.onPageChanged}
                   currentPages={this.props.currentPages}
                   follow={follow}
                   unfollow={unfollow}
                   userPage={this.props.userPage}

            />
        </>
    }

}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        userPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPages: state.usersPage.currentPages,
        isFetching: state.usersPage.isFetching
    }
}

// let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
//     return {
//         follow: (userID: number) => {
//             dispatch(followAC(userID))
//         },
//         unfollow: (userID: number) => {
//             dispatch(unfollowAC(userID))
//         },
//         setUsers: (users: Array<UserType>) => {
//             dispatch(setUserAC(users))
//         },
//         setCurrentPage: (currentPages: number) => {
//             dispatch(setCurrentPageAC(currentPages))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }

export const UsersContainer = connect(mapStateToProps, {follow, unfollow, setUser, setCurrentPage, setTotalUsersCount, toggleIsFetching
    }
)(UsersComponent)