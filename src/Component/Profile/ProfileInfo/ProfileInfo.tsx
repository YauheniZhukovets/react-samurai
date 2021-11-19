import React from 'react';
import s from './ProfileInfo.module.css'


export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS27oZW3GPaCyGG172TNgXUjfyJxSq-ETp2AA&usqp=CAU" alt="img"/>
            </div>
            <div className={s.discriptionBlock}>
                ava + description
            </div>
        </div>
    )
}