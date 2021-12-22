import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {ActionsTypes, ProfilePageType} from '../../../Redux/state';

type MyPostsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void
    // addPost: (postText: string) => void
    // updateNewPostText: (newText: string) => void

}

export const MyPosts = (props: MyPostsType) => {

    const postElements = props.profilePage.postsData.map(m => <Post key={m.id}
                                                                    id={m.id}
                                                                    message={m.message}
                                                                    likesCount={m.likesCount}/>)


    const addMyPost = () => {
        // props.addPost(props.profilePage.newPostText)
        props.dispatch({type: 'ADD-POST', postText: props.profilePage.newPostText})
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // props.updateNewPostText(e.currentTarget.value)
        let text = e.currentTarget.value
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text})
    }
    return (
        <div className={s.potsBlock}>
            My posts
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              value={props.profilePage.newPostText}/>
                </div>
                <div>
                    <button onClick={addMyPost}>Add post</button>
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