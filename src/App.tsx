import React from 'react';
import './App.css';
import {Header} from './Component/Header/Header';
import {Navbar} from './Component/Navbar/Navbar';
import {Route, Routes,} from 'react-router';
import {Music} from './Component/Music/Music';
import {News} from './Component/News/News';
import {Setting} from './Component/Setting/Setting';
import {DialogsContainer} from './Component/Dialogs/DialogsContainer';
import {UsersContainer} from './Component/Users/UsersContainer';
import ProfileContainer from './Component/Profile/ProfileInfo/ProfileContainer';


function App() {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path={'/profile'} element={<ProfileContainer/>}>
                        <Route path={':userId'} element={<ProfileContainer/>}/>
                    </Route>
                    <Route path={'/dialogs'} element={<DialogsContainer/>}/>
                    <Route path={'/users'} element={<UsersContainer/>}/>
                    <Route path={'/news'} element={<News name={'News'}/>}/>
                    <Route path={'/music'} element={<Music name={'Music'}/>}/>
                    <Route path={'/setting'} element={<Setting name={'Setting'}/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App;
