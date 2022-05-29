import React from 'react';
import './App.css';
import {Navbar} from './Component/Navbar/Navbar';
import {Route, Routes,} from 'react-router';
import {Music} from './Component/Music/Music';
import {News} from './Component/News/News';
import {Setting} from './Component/Setting/Setting';
import {AppStateType} from './Redux/reduxStore';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {initializeAppTC} from './Redux/appReducer';
import {Preloader} from './Component/common/Preloader/Preloader';
import HeaderContainer from './Component/Header/HeaderContainer';

const Login = React.lazy(() => import('./Component/Login/Login'));
const UsersContainer = React.lazy(() => import('./Component/Users/UsersContainer'));
const DialogsContainer = React.lazy(() => import('./Component/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./Component/Profile/ProfileInfo/ProfileContainer'));


type AppConnectType = MapDispatchToProps & MapStateToProps
type MapStateToProps = {
    initialized: boolean
}
type MapDispatchToProps = {
    initializeAppTC: () => any
}

class App extends React.Component <AppConnectType, AppStateType> {

    componentDidMount() {
        this.props.initializeAppTC()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className={'app-wrapper'}>
                <HeaderContainer/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <React.Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            <Route path="/profile" element={<ProfileContainer/>}>
                                <Route path=":userId" element={<ProfileContainer/>}/>
                            </Route>
                            <Route path="/dialogs" element={<DialogsContainer/>}/>
                            <Route path="/users" element={<UsersContainer/>}/>
                            <Route path="/news" element={<News name={'News'}/>}/>
                            <Route path="/music" element={<Music name={'Music'}/>}/>
                            <Route path="/setting" element={<Setting name={'Setting'}/>}/>
                            <Route path="/login" element={<Login/>}/>
                        </Routes>
                    </React.Suspense>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

export default compose(
    connect(mapStateToProps, {initializeAppTC})(App)
)


