import React from 'react'

const Event = (props) => {
    // debugger
    return (
        <li>
            {props.event.attributes.title}
        </li>
    )
}

export default Event
