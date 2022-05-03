import React from 'react';
import {UserType} from '../../Redux/usersReducer';
import {Paginator} from '../common/Paginator/Paginator';
import {User} from './User';

type UsersPropsType = {
    getUsers: Array<UserType>
    totalUsersCount: number
    pageSize: number
    portionSize:number
    currentPages: number
    followingInProgress: number[]
    onPageChanged: (pageNumber: number) => void
    followTC: (userId: number) => void
    unfollowTC: (userId: number) => void
}

export const Users = ({
                          getUsers,
                          totalUsersCount,
                          pageSize,
                          currentPages,
                          onPageChanged,
                          followingInProgress,
                          followTC,
                          unfollowTC,
                          portionSize,
                      }: UsersPropsType) => {

    return <div>
        <Paginator totalItemsCount={totalUsersCount}
                   pageSize={pageSize}
                   currentPages={currentPages}
                   onPageChanged={onPageChanged}
                   portionSize={portionSize}
        />

        {getUsers.map(m => <User key={m.id}
                                 user={m}
                                 followingInProgress={followingInProgress}
                                 followTC={followTC}
                                 unfollowTC={unfollowTC}
        />)}
    </div>
};

