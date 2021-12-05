import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {ProfilePageType} from '../../../Redux/state';


export const MyPosts = (props: ProfilePageType) => {


    // const postsData = [
    //     {id:1, massage:'Hi, how are you?', likesCount:15},
    //     {id:2, massage:'My first post!', likesCount:20},
    // ]

    const postElements = props.postsData.map(m => <Post massage={m.message} likesCount={m.likesCount}/>)

    return (
        <div className={s.potsBlock}>
            My posts
            <div>
                <div>
                    <textarea>''</textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div>
                New post
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}