export default function withdrawPoints(userId, rewardId) {
    return (dispatch) => {
        let options = {
            method: "PATCH",
            headers: {"Content-Type": "application/json", "Accept": "application/json"},
            body: JSON.stringify({rewardId})
        }
        fetch(`http://localhost:3000/users/${userId}`, options)
            .then(r => r.json())
            .then(response => {
                debugger
                if (response.errors) {
                    dispatch({type: "USER_ERROR", payload: response.errors})
                } else {
                    dispatch({type: "UPDATE_USER", payload: response})
                }
            })
    }
}