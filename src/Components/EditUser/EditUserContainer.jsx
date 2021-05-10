import { useState } from "react"
import { connect } from "react-redux"
import { compose } from "redux"
import { getProfileForEdit,updateProfile } from "../../redux/profile-reducer"
import Preloader from "../Preloader/Preloader"
import EditUser from "./EditUser"

let editUserContainer = (props) => {
    
    const [dataLoaded, setDataLoaded] = useState(false);
    const disabled = false;
    if (!dataLoaded) {
        let userId = props.match.params.id;
        props.getProfileForEdit(userId)
        setDataLoaded(true);
    }
    const editUser = (values) => {
        let userId = props.match.params.id;
        props.updateProfile(values,userId);
    }
    return(
        props.editForm ? <EditUser updateUser={props.statusUpdate} disabled={disabled} editForm={props.editForm} submitForm={editUser}/> : <Preloader/>
    )
}

let mapStateToProps = (state) => {
    return {
        editForm: state.profile.profile.editForm,
        statusUpdate: state.profile.profile.updateUser
    }
}


export default compose(
    connect(
        mapStateToProps, 
        {
            getProfileForEdit,
            updateProfile
        }
    )
)(editUserContainer)
