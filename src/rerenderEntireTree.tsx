import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {addPost, RootStateType} from './Redux/state';


export const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App addPost={addPost}
                     profilePage={state.profilePage}
                     dialogsPage={state.dialogsPage}/>
            </BrowserRouter>
        </React.StrictMode>
        ,
        document.getElementById('root')
    );
}