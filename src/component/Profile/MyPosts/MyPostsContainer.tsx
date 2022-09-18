import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {actions, InitialStateProfileType} from 'store/redusers/profileReducer';
import {MyPosts} from 'component/Profile/MyPosts/MyPosts';
import {AppStateType} from 'store/types';

type MapStateToPropsType = {
    profilePage: InitialStateProfileType
}

type MapDispatchToPropsType = {
    AddPost: (newPostBody: string) => void
}

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        AddPost: (newPostBody: string) => {
            dispatch(actions.addPost(newPostBody))
        }
    }
}

export const MyPostsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, unknown, AppStateType>(mapStateToProps, mapDispatchToProps)(MyPosts)