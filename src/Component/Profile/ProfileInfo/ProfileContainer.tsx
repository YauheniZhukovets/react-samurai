import React from 'react';
import {Profile} from '../Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../../Redux/reduxStore';
import {getUserProfileTC, ProfileType} from '../../../Redux/profileReducer';
import {withRouter, WithRouterType} from '../../common/WithRouter/withRouter';
import {Navigate} from 'react-router-dom';


type ProfileContainerType = mapStateToPropsType & mapDispatchToProps & WithRouterType

type mapStateToPropsType = {
    profile: ProfileType
    isAuth: boolean
}
type mapDispatchToProps = {
    getUserProfileTC: (userId: string) => void
}

class ProfileContainer extends React.Component<ProfileContainerType, AppStateType> {
    componentDidMount() {
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.getUserProfileTC(userId)
    }

    render() {
        if (!this.props.isAuth) return <Navigate to='/login'/>

        return (
            <div>
                <Profile  profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}
let withUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {
    getUserProfileTC
})(withUrlDataContainerComponent)