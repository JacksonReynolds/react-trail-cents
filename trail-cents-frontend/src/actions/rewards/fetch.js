export default function fetchRewards() {
    return (dispatch) => {
        fetch("http://localhost:3000/rewards")
         .then(r => r.json())
         .then(({data}) => dispatch({type: "FETCH_REWARDS", payload: data}))
    }
}