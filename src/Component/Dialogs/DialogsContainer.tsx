import {connect} from 'react-redux';
import {AddMessageAC, InitialStateDialogsType} from '../../Redux/dialogsReducer';
import {AppStateType} from '../../Redux/reduxStore';
import {compose, Dispatch} from 'redux';
import {Dialogs} from './Dialogs';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import React from 'react';


export type DialogsPropsType = MapStateToPropsType & mapDispatchToPropsType

type MapStateToPropsType = {
    dialogsPage: InitialStateDialogsType
    isAuth: boolean
}
type mapDispatchToPropsType = {
    AddMessage: (newMessageBody: string) => void
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth,
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        AddMessage: (newMessageBody: string) => {
            dispatch(AddMessageAC(newMessageBody))
        }

    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

// let AuthRedirectComponent = withAuthRedirect(Dialogs)
// export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)