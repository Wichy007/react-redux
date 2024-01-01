
const InnitailLoginState = {
    usernameInput: null,
    passwordInput: null
}

export default (state = InnitailLoginState, action: { type: string, usernameInput?: string, passwordInput: string }) => {
    switch (action.type) {
        case "USERNAME_INPUT_CHANGE":
            return { ...state, usernameInput: action.usernameInput };
        case "PASSWORD_INPUT_CHANGE":
            return { ...state, passwordInput: action.passwordInput }
        default:
            return state
    }

}