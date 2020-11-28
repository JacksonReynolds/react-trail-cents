export default function withdrawReward(reward) {
    return (dispatch) => {
        let options = {
            method: "PATCH",
            headers: {"Content-Type": "application/json", "Accept": "application/json"},
            body: JSON.stringify(reward)
        }
        fetch(`http://localhost:3000/rewards/${reward.id}`, options)
            .then(r => r.json())
            .then(response => {
                if (response.errors) {
                    dispatch({type: "REWARD_ERROR", payload: response.errors})
                } else {
                    dispatch({type: "UPDATE_REWARD", payload: response})
                }
            })
    }
}