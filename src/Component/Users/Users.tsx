import React from 'react';
import {UsersType} from './UsersContainer';
import s from './Users.module.css'
import axios from 'axios';
import userPhoto from '../../assets/images/userIcon.png'

export const Users = (props: UsersType) => {
    const getUsers = () => {
        if (props.userPage.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items)
            })
        }
    }


    const followHandler = (id: number) => {
        props.follow(id)
    }
    const unfollowHandler = (id: number) => {
        props.unfollow(id)
    }

    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            {props.userPage.users.map(m => <div key={m.id}>
                <span>
                    <div>
                        <img src={m.photos.small !== null ? m.photos.small : userPhoto}
                             className={s.userPhoto} alt={'123'}/>
                    </div>
                    <div>
                        {m.followed
                            ? <button onClick={() => unfollowHandler(m.id)}>Unfollowed</button>
                            : <button onClick={() => followHandler(m.id)}>Followed</button>
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
        </div>
    )
}

