import {connect} from 'react-redux';
import {addPostAC, InitialStateProfileType} from '../../../redux/profileReducer';
import {MyPosts} from './MyPosts';
import {AppStateType} from '../../../redux/reduxStore';
import {Dispatch} from 'redux';

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
            dispatch(addPostAC(newPostBody))
        }
    }
}

export const MyPostsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, unknown, AppStateType>(mapStateToProps, mapDispatchToProps)(MyPosts)