import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';





export const Profile = () => {
    const postsData = [
        {id:1, massage:'Hi, how are you?', likesCount:15},
        {id:2, massage:'My first post!', likesCount:20},
    ]

    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsD={postsData}/>
        </div>
    )
}