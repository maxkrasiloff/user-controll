import UserForm from "../../Forms/UserForm"
import css from './EditUser.module.css'
let CreateUser = (props) => {
    return (
        <>
            <h2>Edit User</h2>
            <div>
                <UserForm initValues={props.editForm} submitForm={props.submitForm}  buttonText="Save"/>
            </div>
            {props.updateUser && 
                (
                    props.updateUser.success 
                    ? (<div className={css.successMessage}>User Updated</div>) 
                    : (<div className={css.errorMessage}>Some Wrong...</div>) 
                )
            }
        </>
        
    )
}

export default CreateUser;