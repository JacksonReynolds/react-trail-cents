export default function addUser(user) {
    return (dispatch) => {
        let options = {
            method: "POST",
            headers: {"Content-Type": "application/json", "Accept": "application/json"},
            body: JSON.stringify({user})
          }
        fetch("http://localhost:3000/users", options)
         .then(r => r.json())
         .then((response) => {
            if (response.errors) {
                dispatch({type: "SIGNUP_ERRORS", payload: response.errors})
            } else {
                localStorage.jwt = response.jwt
                dispatch({type: "ADD_USER", payload: response.user})
            }
         })
         .catch(r => dispatch({type: "SERVER_ERROR", payload: ["Server Error: Please refresh. If problems persists, please contact server admin."]}))
    }
}