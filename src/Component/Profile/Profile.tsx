import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfileType} from '../../Redux/profileReducer';

type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    updateStatusTC: (status: string) => void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatusTC={props.updateStatusTC}
            />
            <MyPostsContainer/>
        </div>
    )
}