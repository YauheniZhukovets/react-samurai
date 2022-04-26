import {connect} from 'react-redux';
import {addPostAC, initialStateProfileType} from '../../../Redux/profileReducer';
import {MyPosts} from './MyPosts';
import {AppStateType} from '../../../Redux/reduxStore';
import {Dispatch} from 'redux';

export type MyPostsType = MapStateToPropsType & mapDispatchToPropsType

type MapStateToPropsType = {
    profilePage: initialStateProfileType
}
type mapDispatchToPropsType = {
    AddPost: (newPostBody: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        AddPost: (newPostBody: string) => {
            dispatch(addPostAC(newPostBody))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)