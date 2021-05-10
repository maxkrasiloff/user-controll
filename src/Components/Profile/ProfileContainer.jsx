import React, { useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Profile from "./Profile"
import {setProfile, getProfile} from '../../redux/profile-reducer'
import Preloader from "../Preloader/Preloader";

let ProfileContainer  = (props) => {
    const [currentUser, setCurrentUser] = useState(null);
    if(currentUser != props.match.params.id) {
        let userId = props.match.params.id;
        setCurrentUser(userId)
        props.getProfile(userId)
    }
    return (
        props.profile.profile.info ? 
            <Profile profile={props.profile.profile}/> : 
            <Preloader/>
        )
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