export const user = (state = {}, action) => {
    switch (action.type) {
        case "ADD_USER":
            return {username: action.payload.attributes.username, userId: action.payload.id, email: action.payload.attributes.email, points: action.payload.attributes.points}
        case "LOGOUT_USER":
            return {}
        case "USER_ERROR":
            return {errors: action.payload.errors}
        case "RESET_ERRORS":
            return action.payload
        default: return state
    }
}