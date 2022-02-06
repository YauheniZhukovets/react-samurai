import React from 'react';
import {Profile} from '../Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../../Redux/reduxStore';
import {getUserProfileTC, ProfileType} from '../../../Redux/profileReducer';
import {withRouter, WithRouterType} from '../../common/WithRouter/withRouter';
import {withAuthRedirect} from '../../../hoc/withAuthRedirect';


type ProfileContainerType = mapStateToPropsType & mapDispatchToProps & WithRouterType

type mapStateToPropsType = {
    profile: ProfileType
}
type mapDispatchToProps = {
    getUserProfileTC: (userId: number) => void
}

class ProfileContainer extends React.Component<ProfileContainerType, AppStateType> {
    componentDidMount() {
        let userId = +this.props.router.params.userId
        if (!userId && this.props.profile) {
            userId = this.props.profile.userId
        }
        this.props.getUserProfileTC(userId)
    }

    render() {

        return (
            <div>
                <Profile profile={this.props.profile}/>
            </div>
        )
    }
}


let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
    }
}
let withUrlDataContainerComponent = withRouter(ProfileContainer)
export default withAuthRedirect(connect(mapStateToProps, {getUserProfileTC})(withUrlDataContainerComponent))