import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfileType} from 'api/types';


export type ProfilePropsType = {
    profile: ProfileType
    status: string
    isOwner: boolean
    updateStatusTC: (status: string) => void
    savePhotoTC: (file: File) => void
    saveProfileTC: (formData: ProfileType) => Promise<any>
}

export const Profile: React.FC<ProfilePropsType> = ({
                                                        profile,
                                                        status,
                                                        updateStatusTC,
                                                        isOwner,
                                                        savePhotoTC,
                                                        saveProfileTC
                                                    }) => {
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