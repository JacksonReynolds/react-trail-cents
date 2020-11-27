export default function loginUser(user) {
    // debugger
    return (dispatch) => {
        let options = {
            method: "POST",
            headers: {"Content-Type": "application/json", "Accept": "application/json"},
            body: JSON.stringify({user})
          }
        fetch("http://localhost:3000/auth", options)
         .then(r => r.json())
         .then((response) => {
            if (response.errors) {
                dispatch({type: "USER_ERROR", payload: response.errors})
            } else {
                localStorage.jwt = response.jwt
                dispatch({type: "ADD_USER", payload: response.user})
            }
        })
    }
}