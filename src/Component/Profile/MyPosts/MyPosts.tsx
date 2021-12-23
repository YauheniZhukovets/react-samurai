import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {ActionsTypes, addPostAC, ProfilePageType, RootStateType, updateNewPostTextAC} from '../../../Redux/state';

type MyPostsType = {
    state:RootStateType
    // profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}

export const MyPosts = (props: MyPostsType) => {



    const postElements = props.state.profilePage.postsData.map(m => <Post key={m.id}
                                                                    id={m.id}
                                                                    message={m.message}
                                                                    likesCount={m.likesCount}/>)

    const addMyPost = () => {
        props.dispatch(addPostAC(props.state.profilePage.newPostText))
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.dispatch(updateNewPostTextAC(text))
    }
    return (
        <div className={s.potsBlock}>
            My posts
            <div>
                <div>
                    <textarea placeholder={'Enter your post'}
                              onChange={onPostChange}
                              value={props.state.profilePage.newPostText}/>
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