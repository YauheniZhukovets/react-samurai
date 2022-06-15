import React from 'react';
import './App.css';
import {Navbar} from './component/Navbar/Navbar';
import {Route, Routes,} from 'react-router';
import {Music} from './component/Music/Music';
import {News} from './component/News/News';
import {Setting} from './component/Setting/Setting';
import {AppStateType} from './redux/reduxStore';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {Preloader} from './component/common/Preloader/Preloader';
import HeaderContainer from './component/Header/HeaderContainer';
import {initializeAppTC} from './redux/appReducer';
import {Navigate} from 'react-router-dom';


const Login = React.lazy(() => import('./component/Login/Login'));
const UsersContainer = React.lazy(() => import('./component/Users/UsersContainer'));
const DialogsContainer = React.lazy(() => import('./component/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./component/Profile/ProfileInfo/ProfileContainer'));


type AppConnectType = MapDispatchToProps & MapStateToProps
type MapStateToProps = {
    initialized: boolean
}
type MapDispatchToProps = {
    initializeAppTC: () => any
}

class App extends React.Component <AppConnectType, AppStateType> {
    catchAllUnhandledErrors(promiseRejectionEvent: PromiseRejectionEvent) {
        console.log('Some error occurred', promiseRejectionEvent)
    }

    componentDidMount() {
        this.props.initializeAppTC()
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className={'app'}>
                <HeaderContainer/>
                <div className={'app-wrapper'}>
                    <Navbar/>
                    <div className={'app-wrapper-content'}>
                        <React.Suspense fallback={<div>Loading...</div>}>
                            <Routes>
                                <Route path="/" element={<Navigate to="/profile" replace />}/>
                                <Route path="/profile" element={<ProfileContainer/>}>
                                    <Route path=":userId" element={<ProfileContainer/>}/>
                                </Route>
                                <Route path="/dialogs" element={<DialogsContainer/>}/>
                                <Route path="/users" element={<UsersContainer/>}/>
                                <Route path="/news" element={<News name={'News'}/>}/>
                                <Route path="/music" element={<Music name={'Music'}/>}/>
                                <Route path="/setting" element={<Setting name={'Setting'}/>}/>
                                <Route path="/login" element={<Login/>}/>
                                <Route path="*" element={<div>404 NOT FOUND</div>}/>
                            </Routes>
                        </React.Suspense>
                    </div>
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


