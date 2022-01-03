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
    newPostText: ''
}

export type initialStateProfileType = typeof initialState

export const ProfileReducer = (state: initialStateProfileType = initialState, action: ACProfileReducerType) => {
    switch (action.type) {
        case 'UPDATE-NEW-POST-TEXT':{
            const copyState = {...state}
            copyState.newPostText = action.newText
            return copyState
        }
        case 'ADD-POST': {
            const newPost: PostsType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            const copyState = {...state}
            copyState.postsData = [...state.postsData]
            copyState.postsData.push(newPost)
            copyState.newPostText = ''
            return copyState
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
