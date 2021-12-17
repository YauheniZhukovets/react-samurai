import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from '../../Redux/state';

type ProfileType = {
    profilePage: ProfilePageType
    addPost: (postText: string) => void
    updateNewPostText: (newText: string) => void
}

export const Profile = (props: ProfileType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts updateNewPostText={props.updateNewPostText}
                     profilePage={props.profilePage}
                     addPost={props.addPost}

            />
        </div>
    )
}