import {connect} from 'react-redux';
import {AppStateType} from '../../Redux/reduxStore';
import {followTC, getUsersPageChangedTC, requestUsersTC, unfollowTC, UserType,} from '../../Redux/usersReducer';
import React from 'react';
import {Users} from './Users';
import {Preloader} from '../common/Preloader/Preloader';
import {compose} from 'redux';
import {
    getCurrentPages,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from '../../Redux/userSelector';


type MapStateToPropsType = {
    userPage: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPages: number
    isFetching: boolean
    followingInProgress: number[]
}
type mapDispatchToPropsType = {
    requestUsersTC: (currentNumberPages: number, pageSize: number) => void
    getUsersPageChangedTC: (pageNumber: number, pageSize: number) => void
    followTC: (userId: number) => void
    unfollowTC: (userId: number) => void
}

export type UsersType = MapStateToPropsType & mapDispatchToPropsType


class UsersComponent extends React.Component<UsersType, AppStateType> {

    componentDidMount() {
        this.props.requestUsersTC(this.props.currentPages, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersPageChangedTC(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            {!this.props.isFetching && <Users onPageChanged={this.onPageChanged}
                                              {...this.props}            />}
        </>
    }

}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        userPage: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPages: getCurrentPages(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
            requestUsersTC,
            followTC,
            unfollowTC,
            getUsersPageChangedTC,
        }
    ))(UsersComponent)