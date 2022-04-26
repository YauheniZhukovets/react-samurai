import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfileType} from '../../Redux/profileReducer';

type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    updateStatusTC: (status: string) => void
}

export const Profile = ({profile, status, updateStatusTC,}: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo profile={profile}
                         status={status}
                         updateStatusTC={updateStatusTC}
            />
            <MyPostsContainer/>
        </div>
    )
}