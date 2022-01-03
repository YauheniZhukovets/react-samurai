import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {initialStateProfileType} from '../../../Redux/profileReducer';

type MyPostsType = {
    UpdateNewPostText: (text: string) => void
    AddPost: () => void
    profilePage: initialStateProfileType
}

export const MyPosts = (props: MyPostsType) => {

    const postElements = props.profilePage.postsData.map(m => <Post key={m.id}
                                                                    id={m.id}
                                                                    message={m.message}
                                                                    likesCount={m.likesCount}/>)

    const addMyPost = () => {
        props.AddPost()
        // props.dispatch(addPostAC(props.state.profilePage.newPostText))
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.UpdateNewPostText(text)
        // props.dispatch(updateNewPostTextAC(text))
    }
    return (
        <div className={s.potsBlock}>
            My posts
            <div>
                <div>
                    <textarea placeholder={'Enter your post'}
                              onChange={onPostChange}
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