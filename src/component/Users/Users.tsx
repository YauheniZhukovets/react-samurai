import React from 'react';
import {Paginator} from '../Common/Paginator/Paginator';
import s from './Users.module.scss'
import {User} from './User/User';
import {UserType} from 'api/types';

type UsersPropsType = {
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    followingInProgress: number[]
    onPageChanged: (pageNumber: number) => void
    followTC: (userId: number) => void
    unfollowTC: (userId: number) => void
}

export const Users: React.FC<UsersPropsType> = ({
                                                    users,
                                                    totalUsersCount,
                                                    pageSize,
                                                    currentPage,
                                                    onPageChanged,
                                                    followingInProgress,
                                                    followTC,
                                                    unfollowTC,
                                                }) => {

    return <div className={s.usersContainer}>
        <Paginator totalItemsCount={totalUsersCount}
                   pageSize={pageSize}
                   currentPage={currentPage}
                   onPageChanged={onPageChanged}
                   portionSize={10}/>

        <div className={s.users}>
            {users.map(m => <User key={m.id}
                                     user={m}
                                     followingInProgress={followingInProgress}
                                     followTC={followTC}
                                     unfollowTC={unfollowTC}
            />)}
        </div>
    </div>
};

