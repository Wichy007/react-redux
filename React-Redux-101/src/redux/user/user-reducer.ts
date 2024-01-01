interface IUserAction {
    type: string
    isLogin: boolean
}

export interface UserState {
    firstName: string
    lastName: string
    age: number
    isLogin: boolean
}

const initialState = {
    firstName: "Naravit",
    lastName: "Bunthap",
    age: 27,
    isLogin: false,
}

export default (state = initialState, action: IUserAction) => {
    switch (action.type) {
        case "CHANGE_ISLOGIN_TO_TRUE":
            return { ...state, isLogin: action.isLogin }
        case "CHANGE_ISLOGIN_TO_FALSE":
            return { ...state, isLogin: action.isLogin }
        default:
            return state;
    }
}