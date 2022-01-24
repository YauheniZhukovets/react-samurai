import React from 'react';
import {Profile} from '../Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {AppStateType} from '../../../Redux/reduxStore';
import {ProfileType, setUserProfile} from '../../../Redux/profileReducer';
import {withRouter, WithRouterType} from '../../common/WithRouter/withRouter';


type ProfileContainerType = mapStateToPropsType & mapDispatchToProps & WithRouterType

type mapStateToPropsType = {
    profile: ProfileType
}
type mapDispatchToProps = {
    setUserProfile: (profile: ProfileType) => void
}

class ProfileContainer extends React.Component<ProfileContainerType, AppStateType> {
    componentDidMount() {
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = '2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
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
        profile: state.profilePage.profile
    }
}
let withUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent)