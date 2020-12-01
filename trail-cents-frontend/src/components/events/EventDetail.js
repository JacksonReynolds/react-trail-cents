import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import tf from '../../imgs/trailforks_avatar.png'
import { Link } from 'react-router-dom'

const EventDetail = (props) => {
    let {match, events} = props
    let event = events.find(e => parseInt(match.params.eventId) === e.id)
    // debugger
    if (event) {
        return (
            <div className={`event-${event.id}-detail`}>
                <Card>
                    <Card.Img variant="top" src={tf} alt="nope" maxHeight={'400px'}/>
                    <Card.Body>
                        <Card.Title>{event.title}</Card.Title>
                        <Card.Text>
                            Date: {event.date} <br/>
                            {event.desc} <br/>
                            Points Earned: {event.duration}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        {props.user.id ? <Button onClick={e => props.handleClick(event)}>Register for Event</Button> 
                                       : "Sign Up To Volunteer and Earn Rewards!"}<br/>
                        <Button as={Link} to='/events'>Hide</Button>
                    </Card.Footer>
                </Card>
            </div>
        )
    } else {
        return null
    }
}

export default EventDetail
