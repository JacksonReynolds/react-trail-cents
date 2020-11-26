import React from 'react'
import Card from 'react-bootstrap/Card'
import tf from '../../imgs/trailforks_avatar.png'

const Event = (props) => {
    return (
        <>
            <Card>
                <Card.Img variant="top" src={tf} alt="nope"/>
                <Card.Body>
                    <Card.Title>{props.event.title}</Card.Title>
                    <Card.Text>
                        <text>{props.event.desc}</text> <br/>
                        <text>Points Earned: {props.event.duration}</text>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Event