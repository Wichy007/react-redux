import { ReactElement } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { handlePasswordChange, handleUsernameChange } from "../redux/login/login-action";
import { logedIn } from "../redux/user/user-action";

const Login = ({ 
    checkAuth, 
    username, 
    password, 
    handlePasswordChange, 
    handleUsernameChange, 
    logedIn }: { 
        checkAuth: boolean, 
        username: string, 
        password: string, 
        handleUsernameChange: any, 
        handlePasswordChange: any, 
        logedIn: any }): ReactElement => {
    return (
        checkAuth ? <Navigate to="/" replace /> :
            <>
                <h2>username</h2>
                <input type="text" onChange={(e) => { handleUsernameChange(e.target.value) }} />
                <h2>password</h2>
                <input type="password" onChange={(e) => { handlePasswordChange(e.target.value) }} />
                <button onClick={() => logedIn(username, password)}>Login</button>
            </>
    )
}

const mapDispatchToProps = {
    handlePasswordChange,
    handleUsernameChange,
    logedIn
}

const mapStateToProps = (state: any) => {
    return {
        username: state.loginReducer.usernameInput,
        password: state.loginReducer.passwordInput,
        checkAuth: state.userReducer.isLogin
    }
}

const LoginWithConnected = connect(mapStateToProps, mapDispatchToProps)(Login)
export default LoginWithConnected