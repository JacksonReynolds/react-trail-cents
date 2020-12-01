export default function fetchRewards() {
    return (dispatch) => {
        fetch("http://localhost:3000/rewards")
         .then(r => r.json())
         .then((rewards) => dispatch({type: "FETCH_REWARDS", payload: rewards}))
         .catch(r => dispatch({type: "SERVER_ERROR", payload: ["Server Error: Please refresh. If problems persists, please contact server admin."]}))
    }
}