import React from 'react';
import './App.css';
import {Navbar} from './Component/Navbar/Navbar';
import {Route, Routes,} from 'react-router';
import {Music} from './Component/Music/Music';
import {News} from './Component/News/News';
import {Setting} from './Component/Setting/Setting';
import ProfileContainer from './Component/Profile/ProfileInfo/ProfileContainer';
import HeaderContainer from './Component/Header/HeaderContainer';
import Login from './Component/Login/Login';
import DialogsContainer from './Component/Dialogs/DialogsContainer';
import UsersContainer from './Component/Users/UsersContainer';
import {AppStateType} from './Redux/reduxStore';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {initializeAppTC} from './Redux/appReducer';
import {Preloader} from './Component/common/Preloader/Preloader';


type AppConnectType = MapDispatchToProps & MapStateToProps
type MapStateToProps = {
    initialized: boolean
}
type MapDispatchToProps = {
    initializeAppTC: Function
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


