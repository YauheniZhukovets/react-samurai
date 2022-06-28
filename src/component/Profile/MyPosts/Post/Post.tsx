import React from 'react';
import s from './Post.module.scss'
import userPhoto from '../../../../assets/images/userIcon.png';

type PostPropsType = {
    id: number
    message: string
    likesCount: number
    photo: string
}

export const Post: React.FC<PostPropsType> = ({photo, message, likesCount}) => {
    return (
        <div className={s.item}>
            <div className={s.userAvatar} style={{backgroundImage: `url(${photo || userPhoto})`}}/>
            <div className={s.textBlock}>
                <p>
                    {message}
                </p>
                <div className={s.likeWrapper}>
                    <span>likes: <span className={s.postLikesCount}>{likesCount}</span></span>
                </div>
            </div>
        </div>
    )
}