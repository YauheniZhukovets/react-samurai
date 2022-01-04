export type PostsType = {
    id: number
    message: string
    likesCount: number
}

const initialState = {
    postsData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'My first post!', likesCount: 20},
    ] as Array<PostsType>,
    newPostText:''
}

export type initialStateProfileType = typeof initialState

export const ProfileReducer = (state: initialStateProfileType = initialState, action: ACProfileReducerType) => {
    switch (action.type) {
        case 'UPDATE-NEW-POST-TEXT':{
            return {...state, newPostText: action.newText}
        }
        case 'ADD-POST': {
            const body = state.newPostText
            return {...state, newPostText:'', postsData: [...state.postsData, {id:5, message:body, likesCount:0}]}
        }
        default:
            return state
    }
}
type ACProfileReducerType = AddPostACType | UpdateNewPostTextACType

type UpdateNewPostTextACType = ReturnType<typeof UpdateNewPostTextAC>
export const UpdateNewPostTextAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
    } as const
}
type AddPostACType = ReturnType<typeof AddPostAC>
export const AddPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}
