import React from 'react';
import './App.css';
import {Header} from './Component/Header/Header';
import {Navbar} from './Component/Navbar/Navbar';
import {Profile} from './Component/Profile/Profile';
import {Dialogs} from './Component/Dialogs/Dialogs';

function App() {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                {/*<Profile/>*/}
                <Dialogs name={'Dialogs'}/>
            </div>
        </div>
    )
}


export default App;
