import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {AppStateType} from '../../Redux/reduxStore';
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUserAC,
    unfollowAC,
    UserType,
} from '../../Redux/usersReducer';
import React from 'react';
import axios from 'axios';
import {Users} from './Users';

export type UsersType = MapStateToPropsType & mapDispatchToPropsType


class UsersComponent extends React.Component<UsersType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPages}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrenPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      onPageChanged={this.onPageChanged}
                      currentPages={this.props.currentPages}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      userPage={this.props.userPage}
        />
    }
}


type MapStateToPropsType = {
    userPage: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPages: number
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        userPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPages: state.usersPage.currentPages
    }
}

type mapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrenPage: (currentPages: number) => void
    setTotalUsersCount: (totalCount: number) => void
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

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersComponent)