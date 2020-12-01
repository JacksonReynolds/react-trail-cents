export const user = (state = {}, action) => {
    switch (action.type) {
        case "ADD_USER":
            return action.payload
        case "LOGOUT_USER":
            return {}
        case "UPDATE_USER":
            return action.payload
        default: return state
    }
}