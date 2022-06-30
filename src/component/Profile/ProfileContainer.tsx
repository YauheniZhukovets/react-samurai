import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/store';
import {
    getStatusTC,
    getUserProfileTC,
    savePhotoTC,
    saveProfileTC,
    updateStatusTC
} from '../../redux/profileReducer';
import {withRouter, WithRouterType} from '../Common/WithRouter/withRouter';
import {compose} from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {ProfileType} from '../../API/types';

type MapStateToPropsType = {
    status: string
    profile: ProfileType
    authorizedUserId: number | null
    isAuth: boolean
}

type MapDispatchToProps = {
    getUserProfileTC: (userId: number | null) => void
    getStatusTC: (userId: number | null) => void
    updateStatusTC: (status: string) => void
    savePhotoTC: (file: File) => void
    saveProfileTC: (formData: ProfileType) => Promise<any>
}

type ProfileContainerType = MapStateToPropsType & MapDispatchToProps & WithRouterType

class ProfileContainer extends React.Component<ProfileContainerType> {

    refreshProfile() {
        let userId: number |null  = +this.props.router.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
        }
        this.props.getUserProfileTC(userId)
        this.props.getStatusTC(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<ProfileContainerType>, prevState: Readonly<ProfileContainerType>) {
        if (this.props.router.params.userId !== prevProps.router.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <div>
                <Profile profile={this.props.profile}
                         status={this.props.status}
                         updateStatusTC={this.props.updateStatusTC}
                         isOwner={!this.props.router.params.userId}
                         savePhotoTC={this.props.savePhotoTC}
                         saveProfileTC={this.props.saveProfileTC}
                />
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth,
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfileTC, getStatusTC, updateStatusTC, savePhotoTC, saveProfileTC}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)
