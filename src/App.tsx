import React from 'react';
import './App.css';
import {Header} from './Component/Header/Header';
import {Navbar} from './Component/Navbar/Navbar';
import {Profile} from './Component/Profile/Profile';
import {Route, Routes,} from 'react-router';
import {Music} from './Component/Music/Music';
import {News} from './Component/News/News';
import {Setting} from './Component/Setting/Setting';
import {ActionsTypes, DialogsPageType, ProfilePageType, RootStateType} from './Redux/state';
import {Dialogs} from './Component/Dialogs/Dialogs';


type AppType = {
    state: RootStateType
    // profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    dispatch: (action: ActionsTypes) => void
}

function App(props: AppType) {

    return (

        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path={'/profile'} element={<Profile state={props.state}
                                                               // profilePage={props.profilePage}
                                                               dispatch={props.dispatch}
                    />}/>
                    <Route path={'/dialogs'} element={<Dialogs dialogsPage={props.dialogsPage}
                                                               dispatch={props.dispatch}
                    />}/>
                    <Route path={'/news'} element={<News name={'News'}/>}/>
                    <Route path={'/music'} element={<Music name={'Music'}/>}/>
                    <Route path={'/setting'} element={<Setting name={'Setting'}/>}/>
                </Routes>
            </div>
        </div>

    )
}

export default App;
