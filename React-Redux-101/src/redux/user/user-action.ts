import { authorization } from "../../utils/autherization"

export function logedIn(username: string, password: string) {
    return {
        type: "CHANGE_ISLOGIN_TO_TRUE",
        isLogin: authorization(username, password)
    }
}

export function logedOut() {
    return {
        type: "CHANGE_ISLOGIN_TO_FALSE",
        isLogin: false
    }
}