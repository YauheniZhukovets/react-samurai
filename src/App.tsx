import React from 'react';
import {Route, Routes,} from 'react-router';
import {compose} from 'redux';
import HeaderContainer from './component/Header/HeaderContainer';
import {Navigate} from 'react-router-dom';
import s from './App.module.scss'
import {Preloader} from 'component/Common/Preloader/Preloader';
import {Video} from 'component/Video/Video';
import {Navbar} from 'component/Navbar/Navbar';
import {Footer} from 'component/Footer/Footer';
import {initializeAppTC} from 'store/redusers/appReducer';
import {connect} from 'react-redux';
import {AppStateType} from 'store/types';

const Login = React.lazy(() => import('./component/Login/Login'));
const UsersContainer = React.lazy(() => import('./component/Users/UsersContainer'));
const DialogsContainer = React.lazy(() => import('./component/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./component/Profile/ProfileContainer'));

type AppConnectType = MapDispatchToProps & MapStateToProps
type MapStateToProps = {
    initialized: boolean
}
type MapDispatchToProps = {
    initializeAppTC: () => void
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
            <div className={s.app}>
                <HeaderContainer/>
                <div className={s.appWrapper}>
                    <Navbar/>
                    <div className={s.appContent}>
                        <React.Suspense fallback={<div>Loading...</div>}>
                            <Routes>
                                <Route path="/" element={<Navigate to="/profile" replace />}/>
                                <Route path="/profile" element={<ProfileContainer/>}>
                                    <Route path=":userId" element={<ProfileContainer/>}/>
                                </Route>
                                <Route path="/dialogs" element={<DialogsContainer/>}>
                                    <Route path=":userId" element={<DialogsContainer/>}/>
                                </Route>
                                <Route path="/users" element={<UsersContainer/>}/>
                                <Route path="/video" element={<Video/>}/>
                                <Route path="/login" element={<Login/>}/>
                                <Route path="*" element={<div>404 NOT FOUND</div>}/>
                            </Routes>
                        </React.Suspense>
                    </div>
                </div>
                <Footer/>
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
