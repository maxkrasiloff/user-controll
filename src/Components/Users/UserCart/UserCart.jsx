import { NavLink } from 'react-router-dom';
import css from './UserCart.module.css';
let UserCart = (props) => {
    return (
        <div className={css.userCart}>
            <div className={css.leftBlock}>
                <NavLink className={css.name} to={"/user/" + props.id}>{props.name}</NavLink>
                <div>@{props.username}</div>
            </div>
            <div className={css.rightBlock}>
                <NavLink className={css.editButton} to={"/user/" + props.id + "/edit"}>Edit</NavLink>
            </div>
        </div>
    )
}

export default UserCart