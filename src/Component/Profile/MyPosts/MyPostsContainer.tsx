import {connect} from 'react-redux';
import {AddPostAC, initialStateProfileType, UpdateNewPostTextAC} from '../../../Redux/profileReducer';
import {MyPosts} from './MyPosts';
import {AppStateType} from '../../../Redux/reduxStore';
import {Dispatch} from 'redux';


export type MyPostsType = MapStateToPropsType & mapDispatchToPropsType

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