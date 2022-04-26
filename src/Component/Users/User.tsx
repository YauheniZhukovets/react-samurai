import React from 'react';
import s from './Users.module.css';
import {NavLink} from 'react-router-dom';
import userPhoto from './../../assets/images/userIcon.png'
import {UserType} from '../../Redux/usersReducer';


type UserPropsType = {
    user: UserType
    followingInProgress: number[]
    followTC: (userId: number) => void
    unfollowTC: (userId: number) => void
}

export const User = ({user, followingInProgress, followTC, unfollowTC,}: UserPropsType) => {
    return (
        <div>
                <span>
                    <div>
                         <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small !== null ? user.photos.small : userPhoto}
                                 className={s.userPhoto} alt={'123'}/>
                         </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                unfollowTC(user.id)
                            }}>Unfollowed</button>

                            : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                followTC(user.id)
                            }}>Followed</button>
                        }
                    </div>
                </span>
            <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{'user.location.country'}</div>
                        <div>{'user.location.city'}</div>
                    </span>
            </span>
        </div>
    )
}

