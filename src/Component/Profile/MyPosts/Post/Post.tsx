import React from 'react';
import s from './Post.module.css'
import {PostsType} from '../../../../Redux/state';

export const Post = (props: PostsType) => {
    return (
        <div key={props.id}
             className={s.item}>
            <img src="https://i.pinimg.com/236x/73/b0/c0/73b0c08a5d1578cb976a00d8665ffd77--all-blacks-rugby-wutang.jpg"
                 alt="avatar"/>
            <div>
                {props.message}
            </div>
            <div className={s.like}>
                <span>{props.likesCount} likes!</span>
            </div>
        </div>
    )
}