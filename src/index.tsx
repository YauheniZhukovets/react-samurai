import {RootStateType, state, subscribe} from './Redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {addMessage, addPost, updateNewMessageText, updateNewPostText} from './Redux/state';


let rerenderEntireTree = (state:RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App profilePage={state.profilePage}
                     addPost={addPost}
                     updateNewPostText={updateNewPostText}

                     dialogsPage={state.dialogsPage}
                     addMessage={addMessage}
                     updateNewMessageText={updateNewMessageText}

                />
            </BrowserRouter>
        </React.StrictMode>
        ,
        document.getElementById('root')
    );
}
rerenderEntireTree(state)
subscribe(rerenderEntireTree)

