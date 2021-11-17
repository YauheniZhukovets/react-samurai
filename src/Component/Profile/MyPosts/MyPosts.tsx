import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                New post
            </div>
            <div className={s.posts}>
                <Post massage={'Hi, how are you?'} likesCount={15}/>
                <Post massage={'My first post!'} likesCount={20}/>
            </div>
        </div>
    )
}