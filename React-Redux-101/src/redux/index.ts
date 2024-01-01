import { combineReducers } from "redux";
import userReducer from "./user/user-reducer";
import loginReducer from "./login/login-reducer";

export const appReducer = combineReducers({
    userReducer,
    loginReducer
})

