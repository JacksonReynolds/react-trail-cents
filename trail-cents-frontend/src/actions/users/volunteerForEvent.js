export default function volunteerForEvent(userId, eventId) {
    return (dispatch) => {
        let options = {
            method: "PATCH",
            headers: {"Content-Type": "application/json", "Accept": "application/json"},
            body: JSON.stringify({userId, eventId})
        }
        fetch(`http://localhost:3000/users/${userId}`, options)
            .then(r => r.json())
            .then(response => {
                if (response.errors) {
                    dispatch({type: "USER_ERROR", payload: response.errors})
                } else {
                    dispatch({type: "UPDATE_USER", payload: response})
                }
            })
            .catch(r => dispatch({type: "SERVER_ERROR", payload: ["Server Error: Please refresh. If problems persists, please contact server admin."]}))
    }
}