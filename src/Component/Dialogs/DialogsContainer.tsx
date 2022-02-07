import {connect} from 'react-redux';
import {AddMessageAC, InitialStateDialogsType, UpdateNewMessageTextAC} from '../../Redux/dialogsReducer';
import {AppStateType} from '../../Redux/reduxStore';
import {compose, Dispatch} from 'redux';
import {Dialogs} from './Dialogs';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import React from 'react';


export type DialogsPropsType = MapStateToPropsType & mapDispatchToPropsType

type MapStateToPropsType = {
    dialogsPage: InitialStateDialogsType
    newMessageText:string
    isAuth:boolean
}
type mapDispatchToPropsType = {
    UpdateNewMessageText: (text: string) => void
    AddMessage: () => void
}



const mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageText:state.dialogsPage.newMessageText,
        isAuth: state.auth.isAuth,
    }
}

let mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
    return {
        UpdateNewMessageText: (text: string) => {
            dispatch(UpdateNewMessageTextAC(text))
        },
        AddMessage: () => {
            dispatch(AddMessageAC())
        }

    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

// let AuthRedirectComponent = withAuthRedirect(Dialogs)
// export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)