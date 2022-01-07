import React from 'react';
import {UsersType} from './UsersContainer';
import s from './Users.module.css'

export const Users = (props: UsersType) => {
    if (props.userPage.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://www.mariinsky.ru/images/cms/data/orchestra_biography/violin/smirnov_dmitry2018.jpg',
                    followed: true,
                    fullName: 'Dmitry',
                    location: {country: 'Belarus', city: 'Minsk'},
                    status: 'I like football'
                },
                {
                    id: 2,
                    photoUrl: 'https://www.xyplanningnetwork.com/wp-content/uploads/2020/12/swetalinkedin_1-300x300.jpg',
                    followed: true,
                    fullName: 'Sweta',
                    location: {country: 'Belarus', city: 'Minsk'},
                    status: 'I so pretty woman'
                },
                {
                    id: 3,
                    photoUrl: 'https://img.a.transfermarkt.technology/portrait/big/127032-1479730792.jpg',
                    followed: false,
                    fullName: 'Sergey',
                    location: {country: 'Ukraine', city: 'Kiev'},
                    status: 'I like play football'
                },
                {
                    id: 4,
                    photoUrl: 'https://akn.ug/wp-content/uploads/2020/10/312439-3E1IxJu0.jpg',
                    followed: false,
                    fullName: 'Andrew',
                    location: {country: 'U.S.', city: 'Philadelphia'},
                    status: 'I like meet'
                }
            ]
        )
    }

    const followHandler = (id: number) => {
        props.follow(id)
    }
    const unfollowHandler = (id: number) => {
        props.unfollow(id)
    }

    return (
        <div>
            {props.userPage.users.map(m => <div key={m.id}>
                <span>
                    <div>
                        <img src={m.photoUrl} alt="photo" className={s.userPhoto}/>
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

