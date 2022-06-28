import React from 'react';
import s from './User.module.scss';
import {NavLink} from 'react-router-dom';
import userPhoto from '../../../assets/images/userIcon.png'
import SuperButton from '../../Common/SuperButton/SuperButton';
import {UserType} from '../../../types/types';


type UserPropsType = {
    user: UserType
    followingInProgress: number[]
    followTC: (userId: number) => void
    unfollowTC: (userId: number) => void
}

export const User:React.FC<UserPropsType> = ({user, followingInProgress, followTC, unfollowTC}) => {
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

