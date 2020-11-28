export const rewards = (state = [], action) => {
    switch (action.type) {
        case "FETCH_REWARDS": 
            return action.payload
        case "UPDATE_REWARD":
            let idx = state.findIndex(r => r.id === action.payload.id)
            return [...state.slice(0, idx), action.payload, ...state.slice(idx+1)]
        default: return state
    }
}