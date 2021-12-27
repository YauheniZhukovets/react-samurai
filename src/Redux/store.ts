export type DialogsType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type DialogsPageType = {
    dialogsData: Array<DialogsType>
    massagesData: Array<MessageType>
    newMessageText: string
}
export type ProfilePageType = {
    postsData: Array<PostsType>
    newPostText: string
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof AddMessageAC>
    | ReturnType<typeof UpdateNewMessageTextAC>

export const addPostAC = (postText: string) => {
    return {
        type: 'ADD-POST',
        postText: postText
    } as const
}
export const updateNewPostTextAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
    } as const
}
export const AddMessageAC = (messageText: string) => {
    return {
        type: 'ADD-MESSAGE',
        messageText: messageText
    } as const
}
export const UpdateNewMessageTextAC = (newTextMessage: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newTextMessage: newTextMessage
    } as const
}

// export const store: StoreType = {
//     _state: {
//         profilePage: {
//             postsData: [
//                 {id: 1, message: 'Hi, how are you?', likesCount: 15},
//                 {id: 2, message: 'My first post!', likesCount: 20},
//             ],
//             newPostText: ''
//         },
//         dialogsPage: {
//             dialogsData: [
//                 {id: 1, name: 'Egor'},
//                 {id: 2, name: 'Marina'},
//                 {id: 3, name: 'Veronika'},
//                 {id: 4, name: 'Andrey'},
//                 {id: 5, name: 'Igor'},
//                 {id: 6, name: 'Artem'},
//             ],
//             massagesData: [
//                 {id: 1, message: 'Hi'},
//                 {id: 2, message: 'How is your it-kamasutra'},
//                 {id: 3, message: 'Yo'},
//                 {id: 4, message: 'Yo'},
//                 {id: 5, message: 'Yo'},
//             ],
//             newMessageText: ''
//         },
//
//     },
//     _callSubscriber() {
//         console.log('State changed')
//     },
//
//     getState() {
//         return this._state
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer
//     },
//
//     dispatch(action) {
//         profileReducer(this._state.profilePage,action)
//         dialogsReducer(this._state.dialogsPage,action)
//         // if (action.type === 'ADD-POST') {
//         //     const newPost: PostsType = {
//         //         id: 5,
//         //         message: action.postText,
//         //         likesCount: 0
//         //     }
//         //     this._state.profilePage.postsData.push(newPost)
//         //     this._state.profilePage.newPostText = ''
//         //     this._callSubscriber()
//         //
//         // } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
//         //     this._state.profilePage.newPostText = action.newText
//         //     this._callSubscriber()
//         //
//         // } else if (action.type === 'ADD-MESSAGE') {
//         //     const newMessage: MessageType = {
//         //         id: 6,
//         //         message: action.messageText,
//         //     }
//         //     this._state.dialogsPage.massagesData.push(newMessage)
//         //     this._state.dialogsPage.newMessageText = ''
//         //     this._callSubscriber()
//         //
//         // } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
//         //     this._state.dialogsPage.newMessageText = action.newTextMessage
//             this._callSubscriber()
//         }
//     }
