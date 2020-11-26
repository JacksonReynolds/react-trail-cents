import React from 'react'
import Card from 'react-bootstrap/Card'
import tf from '../../../public/imgs/trailforks_avatar.png'

const Event = (props) => {
    return (
        <>
            <Card>
                <Card.Img variant="top" src="../../ public/imgs/trailforks_avatar.png" alt="nope"/>
                <Card.Body>
                    <Card.Title>{props.event.title}</Card.Title>
                    <Card.Text>
                        {props.event.desc}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Event
