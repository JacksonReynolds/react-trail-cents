export const errors = (state = {}, action) => {
    switch (action.type) {
        case "TOKEN_ERROR":
            return {tokenErrors: action.payload}
        case "LOGIN_ERROR":
            return {loginErrors: action.payload}
        case "SIGNUP_ERRORS":
            return {signupErrors: action.payload}
        case "USER_ERROR":
            return {userErrors: action.payload}
        case "RESET_ERRORS":
            return {}
        default: return state
    }
}