import React from 'react';
import s from './Users.module.css';
import {NavLink} from 'react-router-dom';
import userPhoto from './../../assets/images/userIcon.png'
import {UserType} from '../../redux/usersReducer';
import SuperButton from '../common/SuperButton/SuperButton';


type UserPropsType = {
    user: UserType
    followingInProgress: number[]
    followTC: (userId: number) => void
    unfollowTC: (userId: number) => void
}

export const User = ({user, followingInProgress, followTC, unfollowTC,}: UserPropsType) => {
    return (
        <div className={s.container}>
            <div className={s.userContainer}>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small !== null ? user.photos.small : userPhoto}
                             className={s.userPhoto} alt={'123'}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <SuperButton className={s.button}
                                       disabled={followingInProgress.some(id => id === user.id)}
                                       onClick={() => unfollowTC(user.id)}
                        >Unfollow
                        </SuperButton>

                        : <SuperButton className={s.button}
                                       disabled={followingInProgress.some(id => id === user.id)}
                                       onClick={() => followTC(user.id)}>
                            Follow
                        </SuperButton>
                    }
                </div>
                <div>
                    <div>
                        <div className={s.userName}>{user.name}</div>
                        <div className={s.userStatus}>{user.status}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

