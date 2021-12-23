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
                <App state={state}
                    // profilePage={state.profilePage}
                     dialogsPage={state.dialogsPage}
                     dispatch={store.dispatch.bind(store)}
                />
            </BrowserRouter>
        </React.StrictMode>
        ,
        document.getElementById('root')
    );
}


rerenderEntireTree()
store.subscribe(rerenderEntireTree)
