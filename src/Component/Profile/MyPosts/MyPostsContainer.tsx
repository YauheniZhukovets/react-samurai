import React from 'react';
import {addPostAC, StoreType, updateNewPostTextAC} from '../../../Redux/store';
import {MyPosts} from './MyPosts';

type MyPostsContainerType = {
    store: StoreType
}

export const MyPostsContainer = (props: MyPostsContainerType) => {
    const state = props.store.getState()

    const addMyPost = () => {
        props.store.dispatch(addPostAC(state.profilePage.newPostText))
    }
    const onPostChange = (text: string) => {
        props.store.dispatch(updateNewPostTextAC(text))
    }

    return <MyPosts updateNewPostText={onPostChange}
                    addPost={addMyPost}
                    profilePage={state.profilePage}
    />
}