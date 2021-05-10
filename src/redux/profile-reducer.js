import { UsersAPI } from "../api/api";

const SET_PROFILE = 'SET_USERS';
const SET_POSTS = 'SET_POSTS';
const SET_EDIT_FORM = 'SET_EDIT_FORM';
const CREATE_USER = 'CREATE_USER';
const SET_STATUS_CREATE_USER = 'SET_STATUS_CREATE_USER';
const SET_STATUS_UPDATE_USER = 'SET_STATUS_UPDATE_USER';
let initialState = {
    profile: {
        info: null,
        editForm: null
    }
}

export const getProfileForEdit = (id) => {
    return (dispatch) => {
        UsersAPI.getUsers(id).then(
            profile => {
                dispatch(setEditForm(profile));
            }
        )
    }
}


export const getProfile = (id) => {
    return (dispatch) => {
        UsersAPI.getUsers(id).then(
            profile => {
                dispatch(setProfile(profile));
            }
        )
        UsersAPI.getPosts(id).then(
            posts => {
                dispatch(setProfilePosts(posts));
            }
        )
    }
}


export const createProfile = (formData) => {
    return (dispatch) => {
        UsersAPI.createUsers(formatForm(formData)).then(
            data => {
                if (data.id) {
                    dispatch(setStatusUSerCreated(true, data.id));
                }
                else {
                    dispatch(setStatusUSerCreated(false));
                }                
            }
        )
    }
}

export const updateProfile = (formData, userId) => {
    let formatedData = formatForm(formData);
    return (dispatch) => {
        UsersAPI.udpateUsers(formatedData, userId).then(
            data => {
                if (data.id) {
                    dispatch(setStatusUSerUpdated(true, data.id));
                }
                else {
                    dispatch(setStatusUSerUpdated(false));
                }                
            }
        )
    }
}

const formatForm = (formData) => {
    let formatedData =  {
        ...formData,
        address: {
            zipcode: formData.zipcode,
            city: formData.city,
            street: formData.street,
            suite: formData.suite,
        },
        company: {
            name: formData.company_name,
            catchPhrase: formData.catchPhrase,
            bs: formData.bs,
        }
    }
    return formatedData;

}
export const setStatusUSerUpdated = (success, id = null) => ({ type: SET_STATUS_UPDATE_USER, success: success, id: id })
export const setStatusUSerCreated = (success, id = null) => ({ type: SET_STATUS_CREATE_USER, success: success, id: id })
export const createUser = (profile) => ({ type: CREATE_USER, profile: profile })
export const setProfile = (info) => ({ type: SET_PROFILE, info: info })
export const setProfilePosts = (posts) => ({ type: SET_POSTS, posts: posts })
export const setEditForm = (profile) => ({ type: SET_EDIT_FORM, profile: profile })

export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_PROFILE:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    info: action.info

                }
                
            }
        case SET_POSTS:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    posts: action.posts

                }
            }
        case SET_EDIT_FORM:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    editForm: {
                        ...action.profile,
                        company_name: action.profile.company.name,
                        catchPhrase: action.profile.company.catchPhrase,
                        bs: action.profile.company.bs,
                        zipcode: action.profile.address.zipcode,
                        city: action.profile.address.city,
                        street: action.profile.address.street,
                        suite: action.profile.address.suite,
                    }
                    

                }
            }
        case SET_STATUS_CREATE_USER:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    createUser: {
                        id: action.id,
                        success: action.success
                    }
                    

                }
            }
        case SET_STATUS_UPDATE_USER:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    updateUser: {
                        id: action.id,
                        success: action.success
                    }
                    

                }
            }                
        default:
            return state;
    }
}

export default profileReducer;

