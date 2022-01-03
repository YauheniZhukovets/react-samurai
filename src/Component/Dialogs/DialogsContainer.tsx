import {connect} from 'react-redux';
import {AddMessageAC, InitialStateDialogsType, UpdateNewMessageTextAC} from '../../Redux/dialogsReducer';
import {AppStateType} from '../../Redux/reduxStore';
import {Dispatch} from 'redux';
import {Dialogs} from './Dialogs';

// type DialogsPropsType = {
//     store: StoreType
// }
// export const DialogsContainer = () => {
//
//     // const state = props.store.getState()
//     //
//     // const onSendMessage = () => {
//     //     props.store.dispatch(AddMessageAC(state.dialogsPage.newMessageText))
//     // }
//     // const onMessageChange = (text: string) => {
//     //     props.store.dispatch(UpdateNewMessageTextAC(text))
//     // }
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     const state = store.getState()
//
//                     const onSendMessage = () => {
//                         store.dispatch(AddMessageAC(state.dialogsPage.newMessageText))
//                     }
//                     const onMessageChange = (text: string) => {
//                         store.dispatch(UpdateNewMessageTextAC(text))
//                     }
//
//                     return (
//                         <Dialogs AddMessage={onSendMessage}
//                                  UpdateNewMessageText={onMessageChange}
//                                  dialogsPage={state.dialogsPage}/>
//                     )
//                 }
//             }
//
//         </StoreContext.Consumer>
//     )
// }

type MapStateToPropsType = {
    dialogsPage:InitialStateDialogsType
    newMessageText:string
}

type mapDispatchToPropsType = {
    UpdateNewMessageText: (text: string) => void
    AddMessage: () => void
}

const mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageText:state.dialogsPage.newMessageText
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

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)