export const events = (state = [], action) => {
    // debugger
    switch (action.type) {
        case "FETCH_EVENTS":
            return action.payload
        default: return state
    }
}