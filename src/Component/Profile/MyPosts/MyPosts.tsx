import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {PostsType} from '../../../Redux/state';

type MyPostsType = {
    postsData: Array<PostsType>
    addPost: (postText:string)=> void
}

export const MyPosts = (props: MyPostsType) => {


    const postElements = props.postsData.map(m => <Post id={m.id} message={m.message} likesCount={m.likesCount}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>();
    const addPost = () => {
        if(newPostElement.current) {
            props.addPost(newPostElement.current.value)
        }

    }

    return (
        <div className={s.potsBlock}>
            My posts
            <div>
                <div>
                    <textarea ref={newPostElement}> </textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
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