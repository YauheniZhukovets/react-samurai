type DialogsType = {
    id:number
    name:string
}
type MessageType = {
    id:number
    message:string
}
type PostsType = {
    id:number
    message:string
    likesCount:number
}
type DialogsPageType= {
    dialogsData: Array<DialogsType>
    massagesData: Array<MessageType>
}
type ProfilePageType= {
    postsData: Array<PostsType>
}
type RootState = {
    profilePage:ProfilePageType
    dialogsPage:DialogsPageType
}

export const state:RootState = {
    profilePage:{
        postsData: [
            {id:1, message:'Hi, how are you?', likesCount:15},
            {id:2, message:'My first post!', likesCount:20},
        ]
    },
    dialogsPage: {
        dialogsData: [
            {id: 1, name: 'Egor'},
            {id: 2, name: 'Marina'},
            {id: 3, name: 'Veronika'},
            {id: 4, name: 'Andrey'},
            {id: 5, name: 'Igor'},
            {id: 6, name: 'Artem'},
        ],
        massagesData: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'},
        ]
    }
}