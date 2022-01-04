import React from 'react';
import {UsersType} from './UsersContainer';
import s from './Users.module.css'

export const Users = (props: UsersType) => {

    const followHandler = (id:number) => {
        props.follow(id)
    }
    const unfollowHandler = (id:number) => {
        props.unfollow(id)
    }

    return (
        <div>
            {props.state.users.map(m => <div key={m.id}>
                <span>
                    <div>
                        <img src={m.photoUrl} alt="photo" className={s.userPhoto}/>
                    </div>
                    <div>
                        {m.followed
                            ? <button onClick={()=>unfollowHandler(m.id)}>Unfollowed</button>
                            : <button onClick={()=>followHandler(m.id)}>Followed</button>
                        }
                    </div>
                </span>

                <span>
                    <span>
                        <div>{m.fullName}</div>
                        <div>{m.status}</div>
                    </span>
                    <span>
                        <div>{m.location.country}</div>
                        <div>{m.location.city}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}

