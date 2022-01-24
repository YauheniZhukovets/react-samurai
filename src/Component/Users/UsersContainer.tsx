import {connect} from 'react-redux';
import {AppStateType} from '../../Redux/reduxStore';
import {
    followSuccessAC,
    followTC,
    getUsersPageChangedTC,
    getUsersTC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUserAC,
    toggleIsFetchingAC,
    toggleIsFollowingProgressAC,
    unfollowSuccessAC,
    unfollowTC,
    UserType,
} from '../../Redux/usersReducer';
import React from 'react';
import {Users} from './Users';
import {Preloader} from '../common/Preloader/Preloader';
import {usersAPI} from '../../API/api';


type MapStateToPropsType = {
    userPage: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPages: number
    isFetching: boolean
    followingInProgress: number[]
}
type mapDispatchToPropsType = {
    followSuccessAC: (userID: number) => void
    unfollowSuccessAC: (userID: number) => void
    setUserAC: (users: Array<UserType>) => void
    setCurrentPageAC: (currentPages: number) => void
    setTotalUsersCountAC: (totalCount: number) => void
    toggleIsFetchingAC: (isFetching: boolean) => void
    toggleIsFollowingProgressAC: (isFetching: boolean, userId: number) => void
    getUsersTC: (currentNumberPages: number, pageSize: number) => void
    getUsersPageChangedTC: (pageNumber: number, pageSize: number) => void
    followTC: (userId: number) => void
    unfollowTC: (userId: number) => void
}

export type UsersType = MapStateToPropsType & mapDispatchToPropsType


class UsersComponent extends React.Component<UsersType, AppStateType> {

    componentDidMount() {
        this.props.getUsersTC(this.props.currentPages, this.props.pageSize)
        // this.props.toggleIsFetchingAC(true)
        // usersAPI.getUsers(this.props.currentPages, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetchingAC(false)
        //     this.props.setUserAC(data.items)
        //     this.props.setTotalUsersCountAC(data.totalCount)
        // })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersPageChangedTC(pageNumber, this.props.pageSize)
        // this.props.setCurrentPageAC(pageNumber)
        // this.props.toggleIsFetchingAC(true)
        // usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetchingAC(false)
        //     this.props.setUserAC(data.items)
        // })
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

export const UsersContainer = connect(mapStateToProps, {
        followSuccessAC,
        unfollowSuccessAC,
        setUserAC,
        setCurrentPageAC,
        setTotalUsersCountAC,
        toggleIsFetchingAC,
        toggleIsFollowingProgressAC,
        getUsersTC,
        followTC,
        unfollowTC,
        getUsersPageChangedTC,
    }
)(UsersComponent)