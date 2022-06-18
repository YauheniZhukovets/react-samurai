import React from 'react';
import s from './MyPosts.module.scss'
import {Post} from './Post/Post';
import {MyPostsType} from './MyPostsContainer';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../../utils/validators/validators';
import {Textarea} from '../../Common/FormsControls/FormsControls';
import SuperButton from '../../Common/SuperButton/SuperButton';

export const MyPosts = React.memo(({profilePage, AddPost}: MyPostsType) => {
    if (!profilePage.profile) {
        return <div/>
    }

    const postElements = profilePage.postsData.map(m => <Post key={m.id}
                                                              id={m.id}
                                                              photo={profilePage.profile.photos.large}
                                                              message={m.message}
                                                              likesCount={m.likesCount}
    />)

    const addNewMyPost = (value: FormDataType) => {
        AddPost(value.newPostBody)
    }

    return (
        <div className={s.potsBlock}>
            <h3 className={s.myPostTitle}>
                My posts
            </h3>

            <AddMyPostFormRedux onSubmit={addNewMyPost}/>

            <div>
                {postElements}
            </div>
        </div>
    )
})

type FormDataType = {
    newPostBody: string
}

const maxLength = maxLengthCreator(50)

const AddMyPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit} className={s.addMyPostForm}>
            <div>
                <Field className={s.formTextarea}
                       component={Textarea}
                       validate={[required, maxLength]}
                       placeholder={'Enter your post'}
                       name={'newPostBody'}
                />
            </div>
            <div className={s.button}>
                <SuperButton type={'submit'}>Add post</SuperButton>
            </div>
        </form>
    )
}

const AddMyPostFormRedux = reduxForm<FormDataType>({form: 'MyPostsAndPostForm'})(AddMyPostForm)