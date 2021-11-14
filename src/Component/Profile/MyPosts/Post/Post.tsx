import React from 'react';
import s from './Post.module.css'

export const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://i.pinimg.com/236x/73/b0/c0/73b0c08a5d1578cb976a00d8665ffd77--all-blacks-rugby-wutang.jpg"
                 alt="avatar"/>
            post1
            <div>
                <span>Like</span>
            </div>
        </div>
    )
}