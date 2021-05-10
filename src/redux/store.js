import {  applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import thunkMiddleware from 'redux-thunk'
import usersList from "./users-reducer";

let reducers = combineReducers({
    users: usersList,
    profile: profileReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))
export default store;