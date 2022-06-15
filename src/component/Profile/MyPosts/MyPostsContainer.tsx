import {connect} from 'react-redux';
import {addPostAC, InitialStateProfileType} from '../../../redux/profileReducer';
import {MyPosts} from './MyPosts';
import {AppStateType} from '../../../redux/reduxStore';
import {Dispatch} from 'redux';

export type MyPostsType = MapStateToPropsType & mapDispatchToPropsType

type MapStateToPropsType = {
    profilePage: InitialStateProfileType
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