
export function handleUsernameChange(input: string) {
    return {
        type: "USERNAME_INPUT_CHANGE",
        usernameInput: input
    }
}

export function handlePasswordChange(input: string) {
    return {
        type: "PASSWORD_INPUT_CHANGE",
        passwordInput: input
    }
}