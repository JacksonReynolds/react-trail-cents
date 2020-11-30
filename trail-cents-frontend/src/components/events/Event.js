import React from 'react'
import Card from 'react-bootstrap/Card'
import tf from '../../imgs/trailforks_avatar.png'
import Button from 'react-bootstrap/Button'

const Event = (props) => {
    let {event, user, handleClick} = props
    return (
        <>
            <Card>
                <Card.Img variant="top" src={tf} alt="nope"/>
                <Card.Body>
                    <Card.Title>{event.title}</Card.Title>
                    <Card.Text>
                        Date: {event.date} <br/>
                        {event.desc} <br/>
                        Points Earned: {event.duration}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    {user.id ? <Button onClick={e => handleClick(event)}>Register for Event</Button> 
                                   : "Sign Up To Volunteer and Earn Rewards!"}
                </Card.Footer>
            </Card>
        </>
    )
}

export default Event