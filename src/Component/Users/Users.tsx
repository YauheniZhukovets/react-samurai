import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/userIcon.png';
import {UserType} from '../../Redux/usersReducer';

type UsersPropsType = {
    totalUsersCount: number
    pageSize:number
    onPageChanged: (pageNumber: number)=> void
    currentPages: number
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    userPage:Array<UserType>
}

export const Users = (props:UsersPropsType) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }


    return <div>
        <div>
            {pages.map((p, i) => {
                return <span style={{cursor: 'pointer'}}
                             key={i} onClick={() => { props.onPageChanged(p)} }
                             className={props.currentPages === p ? s.selectedPage : ''}> {p}
                    </span>
            })}

        </div>
        {props.userPage.map(m => <div key={m.id}>
                <span>
                    <div>
                        <img src={m.photos.small !== null ? m.photos.small : userPhoto}
                             className={s.userPhoto} alt={'123'}/>
                    </div>
                    <div>
                        {m.followed
                            ? <button onClick={() => props.unfollow(m.id)}>Unfollowed</button>
                            : <button onClick={() => props.follow(m.id)}>Followed</button>
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

