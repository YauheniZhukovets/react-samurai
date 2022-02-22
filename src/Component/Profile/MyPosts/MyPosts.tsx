import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {MyPostsType} from './MyPostsContainer';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../../utils/validators/validators';
import {Textarea} from '../../common/FormsControls/FormsControls';


export const MyPosts = (props: MyPostsType) => {

    const postElements = props.profilePage.postsData.map(m => <Post key={m.id}
                                                                    id={m.id}
                                                                    message={m.message}
                                                                    likesCount={m.likesCount}/>)


    const addNewMyPost = (value: FormDataType) => {
        props.AddPost(value.newPostBody)
    }

    return (
        <div className={s.potsBlock}>
            My posts
            <AddMyPostFormRedux onSubmit={addNewMyPost}/>
            <div>
                New post
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}

type FormDataType = {
    newPostBody: string
}

const maxLength = maxLengthCreator(10)

const AddMyPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={ Textarea }
                       validate={[required, maxLength]}
                       placeholder={'Enter your post'}
                       name={'newPostBody'}

                />

            </div>
            <div>
                <button type={'submit'}>Add post</button>
            </div>
        </form>
    )
}

const AddMyPostFormRedux = reduxForm<FormDataType>({form: 'MyPostsAndPostForm'})(AddMyPostForm)