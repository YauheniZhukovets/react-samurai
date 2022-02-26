import React from 'react';
import {Profile} from '../Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../../Redux/reduxStore';
import {getStatusTC, getUserProfileTC, ProfileType, updateStatusTC} from '../../../Redux/profileReducer';
import {withRouter, WithRouterType} from '../../common/WithRouter/withRouter';
import {compose} from 'redux';
import {withAuthRedirect} from '../../../hoc/withAuthRedirect';


type ProfileContainerType = mapStateToPropsType & mapDispatchToProps & WithRouterType

type mapStateToPropsType = {
    status: string
    profile: ProfileType | null
    authorizedUserId: number | null
    isAuth: boolean
}
type mapDispatchToProps = {
    getUserProfileTC: (userId: number | null) => Function
    getStatusTC: (userId: number | null) => Function
    updateStatusTC: (status: string) => Function
}

class ProfileContainer extends React.Component<ProfileContainerType, AppStateType> {
    componentDidMount() {
        let userId  = +this.props.router.params.userId || null
        if (!userId) {
            userId = this.props.authorizedUserId
        }
        this.props.getUserProfileTC(userId)
        this.props.getStatusTC(userId)
    }

    render() {
        return (
            <div>
                <Profile profile={this.props.profile}
                         status={this.props.status}
                         updateStatusTC={this.props.updateStatusTC}/>
            </div>
        )
    }
}


let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfileTC, getStatusTC, updateStatusTC}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)


/*let withUrlDataContainerComponent = withRouter(ProfileContainer)
export default withAuthRedirect(connect(mapStateToProps, {getUserProfileTC, getStatusTC, updateStatusTC})(withUrlDataContainerComponent))*/
