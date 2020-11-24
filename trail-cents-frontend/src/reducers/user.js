export const user = (state = {}, action) => {
    debugger
    switch (action.type) {
        case "ADD_USER":
            return {username: action.payload.attributes.username, userId: action.payload.id, email: action.payload.attributes.email, points: action.payload.attributes.points}
        case "REMOVE_USER":
            return {}
        case "USER_ERROR":
            debugger
            return {errors: action.payload.errors}
        default: return state
    }
}