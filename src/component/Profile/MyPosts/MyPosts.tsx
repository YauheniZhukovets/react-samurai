import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {MyPostsType} from './MyPostsContainer';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../../utils/validators/validators';
import {Textarea} from '../../common/FormsControls/FormsControls';
import SuperButton from '../../../common/c2-SuperButton/SuperButton';
import {Preloader} from '../../common/Preloader/Preloader';

export const MyPosts = React.memo((props: MyPostsType) => {
    if (!props.profilePage.profile) {
        return <Preloader/>
    }

    const postElements = props.profilePage.postsData.map(m => <Post key={m.id}
                                                                    id={m.id}
                                                                    photo={props.profilePage.profile.photos.large}
                                                                    message={m.message}
                                                                    likesCount={m.likesCount}
    />)

    const addNewMyPost = (value: FormDataType) => {
        props.AddPost(value.newPostBody)
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
            <div className={s.buttonAddPost}>
                <SuperButton type={'submit'}>Add post</SuperButton>
            </div>
        </form>
    )
}

const AddMyPostFormRedux = reduxForm<FormDataType>({form: 'MyPostsAndPostForm'})(AddMyPostForm)