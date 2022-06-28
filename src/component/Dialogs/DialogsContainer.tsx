import {connect} from 'react-redux';
import {AddMessageAC, InitialStateDialogsType} from '../../redux/dialogsReducer';
import {AppStateType} from '../../redux/reduxStore';
import {compose, Dispatch} from 'redux';
import {Dialogs} from './Dialogs';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import React from 'react';
import {withRouter} from '../Common/WithRouter/withRouter';

type MapStateToPropsType = {
    dialogsPage: InitialStateDialogsType
    isAuth: boolean
}
type MapDispatchToPropsType = {
    AddMessage: (newMessageBody: string) => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        AddMessage: (newMessageBody: string) => {
            dispatch(AddMessageAC(newMessageBody))
        }
    }
}

export default compose<React.ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, unknown, AppStateType>(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect
)(Dialogs)
