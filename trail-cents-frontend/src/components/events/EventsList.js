import React from 'react'
import Event from './Event'

const EventsList = (props) => {
    return (
        <ul>
            {props.events.map(e => <Event key={e.id} id={e.id} event={e} />)}
        </ul>
    )
}

export default EventsList
