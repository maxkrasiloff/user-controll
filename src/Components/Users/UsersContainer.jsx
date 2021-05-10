import React, { useState } from "react";
import { connect } from 'react-redux'
import { compose } from 'redux'
import Users from "./Users"
import {getUsers} from '../../redux/users-reducer'
import Preloader from "../Preloader/Preloader";

let mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

const UsersContainer = (props) => {
    const [usersLoaded, changeUsersLoaded] = useState(false)
    if(!usersLoaded) {
        props.getUsers();
        changeUsersLoaded(true);
    }
    return (
        props.users.users 
            ? <Users users={props.users.users}/> 
            : <Preloader/>
        )       
}

export default compose(
    connect(
        mapStateToProps, 
        {
            getUsers
        }
    )
)
(UsersContainer)
