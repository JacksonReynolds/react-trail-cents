export default function fetchEvents() {
    return (dispatch) => {
        fetch("http://localhost:3000/events")
            .then(r => r.json())
            .then((events) => dispatch({type: "FETCH_EVENTS", payload: events}))
    }
}