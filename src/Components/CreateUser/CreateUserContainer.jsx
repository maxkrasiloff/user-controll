import { connect } from "react-redux"
import { compose } from "redux"
import CreateUser from "./CreateUser"
import {createProfile} from '../../redux/profile-reducer'

let CreateUserContainer = (props) => {
    const createUser = (values) => {
        props.createProfile(values)
    }
    return(
        <CreateUser userCreated={props.statusCreate} submitForm={createUser}/>
    )
}

let mapStateToProps = (state) => {
    return {
        statusCreate: state.profile.profile.createUser
    }
}

export default compose(
    connect(
        mapStateToProps, 
        {
            createProfile
        }
    )
)(CreateUserContainer)
