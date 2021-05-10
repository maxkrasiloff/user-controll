import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Profile from "./Profile"
import {setProfile, getProfile} from '../../redux/profile-reducer'
import Preloader from "../Preloader/Preloader";


class ProfileContainer extends React.Component {
    
    componentDidMount() {
        let userId = this.props.match.params.id;
        this.props.getProfile(userId)
    }
    render() {
        return this.props.profile.profile.info ? <Profile profile={this.props.profile.profile}/> : <Preloader/>
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profile
    }
}


export default compose(
    connect(
        mapStateToProps, 
        {
            setProfile,
            getProfile
        }
    )
)(ProfileContainer)