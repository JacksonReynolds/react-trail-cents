export default function loginUser(user) {
    return (dispatch) => {
        let options = {
            method: "POST",
            headers: {"Content-Type": "application/json", "Accept": "application/json"},
            body: JSON.stringify({user})
          }
        fetch("http://localhost:3000/auth", options)
         .then(r => r.json())
         .then((user) => {
             debugger
            if (user.errors) {
                dispatch({type: "USER_ERROR", payload: user})
            } else {
                dispatch({type: "ADD_USER", payload: user})
            }
        })
    }
}