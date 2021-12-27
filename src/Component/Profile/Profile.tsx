import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {StoreType} from '../../Redux/store';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';

type ProfileType = {
    store: StoreType
}

export const Profile = (props: ProfileType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}
            />
        </div>
    )
}