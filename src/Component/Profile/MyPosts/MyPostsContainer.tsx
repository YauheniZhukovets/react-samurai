import {connect} from 'react-redux';
import {AddPostAC, initialStateProfileType, UpdateNewPostTextAC} from '../../../Redux/profileReducer';
import {MyPosts} from './MyPosts';
import {AppStateType} from '../../../Redux/reduxStore';
import {Dispatch} from 'redux';

// type MyPostsContainerType = {
//     store: StoreType
// }

// export const MyPostsContainer = () => {
//     // const state = props.store.getState()
//
//     // const addMyPost = () => {
//     //     props.store.dispatch(addPostAC(state.profilePage.newPostText))
//     // }
//     // const onPostChange = (text: string) => {
//     //     props.store.dispatch(updateNewPostTextAC(text))
//     // }
//
//
//     return (
//
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     const state = store.getState()
//
//                     const addMyPost = () => {
//                         store.dispatch(addPostAC())
//                     }
//                     const onPostChange = (text: string) => {
//                         store.dispatch(updateNewPostTextAC(text))
//                     }
//
//                     return (
//                         <MyPosts
//                             updateNewPostText={onPostChange}
//                             addPost={addMyPost}
//                             profilePage={state.profilePage}
//                         />
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

type MapStateToPropsType = {
    profilePage: initialStateProfileType
    newPostText: string
}

type mapDispatchToPropsType = {
    UpdateNewPostText: (text: string) => void
    AddPost: () => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profilePage: state.profilePage,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        UpdateNewPostText: (text: string) => {
            dispatch(UpdateNewPostTextAC(text))
        },
        AddPost: () => {
            dispatch(AddPostAC())
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)