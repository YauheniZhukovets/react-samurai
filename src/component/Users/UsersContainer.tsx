import {connect} from 'react-redux';
import {AppStateType} from '../../redux/reduxStore';
import {followTC, requestUsersTC, unfollowTC, } from '../../redux/usersReducer';
import React from 'react';
import {Users} from './Users';
import {Preloader} from '../Common/Preloader/Preloader';
import {compose} from 'redux';
import {
    getCurrentPages,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from '../../redux/userSelectors';
import {UserType} from '../../types/types';


type MapStateToPropsType = {
    getUsers: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

type mapDispatchToPropsType = {
    requestUsersTC: (currentNumberPages: number, pageSize: number) => void
    followTC: (userId: number) => void
    unfollowTC: (userId: number) => void
}

export type UsersType = MapStateToPropsType & mapDispatchToPropsType

class UsersComponent extends React.Component<UsersType, AppStateType> {

    componentDidMount() {
        this.props.requestUsersTC(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.requestUsersTC(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users onPageChanged={this.onPageChanged} {...this.props}/>
        </>
    }

}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        getUsers: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPages(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
            requestUsersTC,
            followTC,
            unfollowTC,
        }
    ))(UsersComponent)