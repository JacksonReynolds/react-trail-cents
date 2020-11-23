export const rewards = (state = [], action) => {
    switch (action.type) {
        case "FETCH_REWARDS": 
            return action.payload
        default: return state
    }
}