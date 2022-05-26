import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfileType} from '../../Redux/profileReducer';

export type ProfilePropsType = {
    profile: ProfileType
    status: string
    updateStatusTC: (status: string) => Function
    isOwner: boolean
    savePhotoTC: (file: File) => Function
}

export const Profile = ({profile, status, updateStatusTC, isOwner, savePhotoTC}: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo profile={profile}
                         status={status}
                         updateStatusTC={updateStatusTC}
                         isOwner={isOwner}
                         savePhotoTC={savePhotoTC}
            />
            <MyPostsContainer/>
        </div>
    )
}