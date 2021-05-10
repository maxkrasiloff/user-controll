import { UsersAPI } from "../api/api";

const SET_USERS = 'SET_USERS';


let initialState = {
    users: null
}

/* thunkCreators */
export const getUsers = () => {
    return (dispatch) => {
        UsersAPI.getUsers().then(
            users => {
                dispatch(setUsers(users));
            }
        )
    }
}

export const setUsers = (users) => ({ type: SET_USERS, users: users })
export const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        default:
            return state;
    }
}

export default usersReducer;

