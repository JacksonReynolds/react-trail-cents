export const user = (state = {}, action) => {
    debugger
    switch (action.type) {
        case "ADD_USER":
            return action.payload
        case "LOGOUT_USER":
            return {}
        case "USER_ERROR":
            return {errors: action.payload.errors}
        case "RESET_ERRORS":
            return action.payload
        default: return state
    }
}