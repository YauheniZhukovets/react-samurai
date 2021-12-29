import React from 'react';
import {addPostAC, updateNewPostTextAC} from '../../../Redux/store';
import {MyPosts} from './MyPosts';
import StoreContext from '../../../StoreContext';

// type MyPostsContainerType = {
//     store: StoreType
// }

export const MyPostsContainer = () => {
    // const state = props.store.getState()

    // const addMyPost = () => {
    //     props.store.dispatch(addPostAC(state.profilePage.newPostText))
    // }
    // const onPostChange = (text: string) => {
    //     props.store.dispatch(updateNewPostTextAC(text))
    // }


    return (

        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState()

                    const addMyPost = () => {
                        store.dispatch(addPostAC(state.profilePage.newPostText))
                    }
                    const onPostChange = (text: string) => {
                        store.dispatch(updateNewPostTextAC(text))
                    }

                    return (
                        <MyPosts
                            updateNewPostText={onPostChange}
                            addPost={addMyPost}
                            profilePage={state.profilePage}
                        />
                    )
                }
            }
        </StoreContext.Consumer>
    )
}