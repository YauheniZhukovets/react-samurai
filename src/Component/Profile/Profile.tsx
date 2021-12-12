import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostsType} from '../../Redux/state';

type ProfileType = {
    postsData: Array<PostsType>
    addPost: (postText:string)=> void

}


export const Profile = (props: ProfileType) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData} addPost={props.addPost}/>
        </div>
    )
}