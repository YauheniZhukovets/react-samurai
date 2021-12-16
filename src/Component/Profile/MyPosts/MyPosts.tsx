import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {ProfilePageType} from '../../../Redux/state';

type MyPostsType = {
    profilePage: ProfilePageType
    addPost: (postText: string) => void

}

export const MyPosts = (props: MyPostsType) => {

    const postElements = props.profilePage.postsData.map(m => <Post key={m.id} id={m.id} message={m.message}
                                                                    likesCount={m.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();
    const addMyPost = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value)
            newPostElement.current.value = ''
        }
    }
    const onPostChange = () => {

    }
    return (
        <div className={s.potsBlock}>
            My posts
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
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