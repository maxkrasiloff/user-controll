import UserForm from "../../Forms/UserForm"
import css from './CreateUser.module.css'

let CreateUser = (props) => {
    return (
        <>
            <h2>Create User</h2>
            <div>
                <UserForm submitForm={props.submitForm} buttonText="Create"/>
            </div>

            {props.userCreated && (props.userCreated.success ? (<div className={css.successMessage}>User Created</div>) : (<div className={css.errorMessage}>Some Wrong...</div>) )}
        </>
        
    )
}

export default CreateUser;