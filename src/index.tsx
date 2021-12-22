import {store} from './Redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';

let rerenderEntireTree = () => {

    const state = store.getState()

    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App profilePage={state.profilePage}
                     dispatch={store.dispatch.bind(store)}
                    // addPost={store.addPost.bind(store)}
                    // updateNewPostText={store.updateNewPostText.bind(store)}

                     dialogsPage={state.dialogsPage}
                    // addMessage={store.addMessage.bind(store)}
                    // updateNewMessageText={store.updateNewMessageText.bind(store)}
                />
            </BrowserRouter>
        </React.StrictMode>
        ,
        document.getElementById('root')
    );
}


rerenderEntireTree()
store.subscribe(rerenderEntireTree)
