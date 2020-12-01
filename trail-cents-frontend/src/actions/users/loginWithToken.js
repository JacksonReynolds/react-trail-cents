export default function loginWithToken(token) {
    return (dispatch) => {
        let options = {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
          fetch("http://localhost:3000/auth", options)
           .then(r => r.json())
           .then((response) => {
             if (response.errors) {
                dispatch({type: "TOKEN_ERROR", payload: response.errors})
             } else {
                dispatch({type: "ADD_USER", payload: response})
             }
           })
    }
}