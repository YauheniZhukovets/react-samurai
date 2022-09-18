import {connect} from 'react-redux';
import {compose, Dispatch} from 'redux';
import {Dialogs} from './Dialogs';
import React from 'react';
import {withRouter} from 'hoc/withRouter';
import {withAuthRedirect} from 'hoc/withAuthRedirect';
import {actions, InitialStateDialogsType} from 'store/redusers/dialogsReducer';
import {AppStateType} from 'store/types';

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
            dispatch(actions.addMessage(newMessageBody))
        }
    }
}

export default compose<React.ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, unknown, AppStateType>(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect
)(Dialogs)
