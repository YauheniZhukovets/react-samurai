import React from 'react';
// export type DialogsType = {
//     id: number
//     name: string
// }
// type MessageType = {
//     id: number
//     message: string
// }
// type PostsType = {
//     id: number
//     message: string
//     likesCount: number
// }
// type DialogsPageType = {
//     dialogsData: Array<DialogsType>
//     massagesData: Array<MessageType>
//     newMessageText: string
// }
// type ProfilePageType = {
//     postsData: Array<PostsType>
//     newPostText: string
// }
// type RootStateType = {
//     profilePage: ProfilePageType
//     dialogsPage: DialogsPageType
// }
//
// type StoreType = {
//     _state: RootStateType
//     _callSubscriber: () => void
//     subscribe: (observer: () => void) => void
//     getState: () => RootStateType
//     dispatch: () => void
// }



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
