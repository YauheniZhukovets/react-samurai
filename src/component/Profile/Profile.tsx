import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfileType} from '../../types/types';

export type ProfilePropsType = {
    profile: ProfileType
    status: string
    isOwner: boolean
    updateStatusTC: (status: string) => any
    savePhotoTC: (file: File) => any
    saveProfileTC: (formData: ProfileType) => any
}

export const Profile = ({profile, status, updateStatusTC, isOwner, savePhotoTC, saveProfileTC}: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo profile={profile}
                         status={status}
                         updateStatusTC={updateStatusTC}
                         isOwner={isOwner}
                         savePhotoTC={savePhotoTC}
                         saveProfileTC={saveProfileTC}
            />
            <MyPostsContainer/>
        </div>
    )
}