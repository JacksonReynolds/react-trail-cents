export default function loginUser(user) {
    return (dispatch) => {
        let options = {
            method: "POST",
            headers: {"Content-Type": "application/json", "Accept": "application/json"},
            body: JSON.stringify({user})
          }
        fetch("http://localhost:3000/sessions", options)
         .then(r => r.json())
         .then((user) => {
            if (user.errors) {
                dispatch({type: "USER_ERROR", payload: user})
            } else {
                debugger
                dispatch({type: "ADD_USER", payload: user})
            }
        })
    }
}