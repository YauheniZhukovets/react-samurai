import React from 'react';
import s from './Users.module.css';
import {UserType} from '../../Redux/usersReducer';
import {NavLink} from 'react-router-dom';
import userPhoto from './../../assets/images/userIcon.png'


type UsersPropsType = {
    userPage: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPages: number
    followingInProgress: number[]
    isFetching: boolean
    onPageChanged: (pageNumber: number) => void
    followSuccessAC: (userID: number) => void
    unfollowSuccessAC: (userID: number) => void
    toggleIsFollowingProgressAC: (isFetching: boolean, userId: number) => void
    followTC: (userId: number) => void
    unfollowTC: (userId: number) => void
}

export const Users = (props: UsersPropsType) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }


    return <div>
        <div>
            {pages.map((p, i) => {
                return <span style={{cursor: 'pointer'}}
                             key={i} onClick={() => {
                    props.onPageChanged(p)
                }}
                             className={props.currentPages === p ? s.selectedPage : ''}> {p}
                    </span>
            })}

        </div>
        {props.userPage.map(m => <div key={m.id}>
                <span>
                    <div>
                         <NavLink to={'/profile/' + m.id}>
                            <img src={m.photos.small !== null ? m.photos.small : userPhoto}
                                 className={s.userPhoto} alt={'123'}/>
                         </NavLink>
                    </div>
                    <div>
                        {m.followed
                            ? <button disabled={props.followingInProgress.some(id => id === m.id)} onClick={() => {
                                props.unfollowTC(m.id)

                                // props.toggleIsFollowingProgressAC(true, m.id)
                                // usersAPI.unfollowUser(m.id).then(resultCode => {
                                //     if (resultCode === 0) {
                                //         props.unfollowSuccessAC(m.id)
                                //     }
                                //     props.toggleIsFollowingProgressAC(false, m.id)
                                // })
                            }}>Unfollowed</button>

                            : <button disabled={props.followingInProgress.some(id => id === m.id)} onClick={() => {
                                props.followTC(m.id)

                                // props.toggleIsFollowingProgressAC(true, m.id)
                                // usersAPI.followUser(m.id).then(resultCode => {
                                //     if (resultCode === 0) {
                                //         props.followSuccessAC(m.id)
                                //     }
                                //     props.toggleIsFollowingProgressAC(false, m.id)
                                // })
                            }}>Followed</button>
                        }
                    </div>
                </span>

            <span>
                    <span>
                        <div>{m.name}</div>
                        <div>{m.status}</div>
                    </span>
                    <span>
                        <div>{'m.location.country'}</div>
                        <div>{'m.location.city'}</div>
                    </span>
                </span>
        </div>)}
    </div>;
};

