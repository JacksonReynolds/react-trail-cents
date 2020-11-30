import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const EventDetail = (props) => {
    let {match, events} = props
    return (
        <div className={`event-${props.event.id}-detail`}>
            <Card>
                <Card.Img variant="top" src={'/oops'} alt="nope"/>
                <Card.Body>
                    <Card.Title>{props.event.title}</Card.Title>
                    <Card.Text>
                        Date: {props.event.date} <br/>
                        {props.event.desc} <br/>
                        Points Earned: {props.event.duration}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    {props.user.id ? <Button onClick={e => props.handleClick(props.event)}>Register for Event</Button> 
                                   : "Sign Up To Volunteer and Earn Rewards!"}
                </Card.Footer>
            </Card>
        </div>
    )
}

export default EventDetail
