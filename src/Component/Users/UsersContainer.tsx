import {connect} from 'react-redux';
import {AppStateType} from '../../Redux/reduxStore';
import {followTC, getUsersPageChangedTC, getUsersTC, unfollowTC, UserType,} from '../../Redux/usersReducer';
import React from 'react';
import {Users} from './Users';
import {Preloader} from '../common/Preloader/Preloader';


type MapStateToPropsType = {
    userPage: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPages: number
    isFetching: boolean
    followingInProgress: number[]
}
type mapDispatchToPropsType = {
    getUsersTC: (currentNumberPages: number, pageSize: number) => void
    getUsersPageChangedTC: (pageNumber: number, pageSize: number) => void
    followTC: (userId: number) => void
    unfollowTC: (userId: number) => void
}

export type UsersType = MapStateToPropsType & mapDispatchToPropsType


class UsersComponent extends React.Component<UsersType, AppStateType> {

    componentDidMount() {
        this.props.getUsersTC(this.props.currentPages, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersPageChangedTC(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users onPageChanged={this.onPageChanged}
                   {...this.props}            />
        </>
    }

}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        userPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPages: state.usersPage.currentPages,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export const UsersContainer = connect(mapStateToProps, {
        getUsersTC,
        followTC,
        unfollowTC,
        getUsersPageChangedTC,
    }
)(UsersComponent)