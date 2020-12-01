export default function purchaseReward(userId, rewardId) {
    return (dispatch) => {
        let user_options = {
            method: "PATCH",
            headers: {"Content-Type": "application/json", "Accept": "application/json"},
            body: JSON.stringify({rewardId})
        }
        let reward_options = {
            method: "PATCH",
            headers: {"Content-Type": "application/json", "Accept": "application/json"},
            body: JSON.stringify({rewardId})
        }
        fetch(`http://localhost:3000/users/${userId}`, user_options)
            .then(r => r.json())
            .then(response => {
                if (response.errors) {
                    dispatch({type: "USER_ERROR", payload: response.errors})
                } else {
                    dispatch({type: "UPDATE_USER", payload: response})
                }
            })
            .then(() => {
                fetch(`http://localhost:3000/rewards/${rewardId}`, reward_options)
                    .then(r => r.json())
                    .then(response => {
                        if (response.errors) {
                            dispatch({type: "REWARD_ERROR", payload: response.errors})
                        } else {
                            dispatch({type: "UPDATE_REWARD", payload: response})
                        }
                    }) 
            })
            .catch(r => dispatch({type: "SERVER_ERROR", payload: ["Server Error: Please refresh. If problems persists, please contact server admin."]}))
    }
}