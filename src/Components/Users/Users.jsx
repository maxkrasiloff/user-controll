import UserCart from './UserCart/UserCart';
import css from './Users.module.css';
let Users = (props) => {
    return (
        <>
            <h1>Users</h1>
            <div className={css.usersBlock}>
                {props.users.map((el)=>(
                    <UserCart key={el.id} {...el}/>
                ))}
            </div>
        </>
    )
}

export default Users