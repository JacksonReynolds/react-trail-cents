import React from 'react'
import Card from 'react-bootstrap/Card'
import dolla from '../../imgs/dollas.jpg'

const Reward = (props) => {
    return (
        <>
            <Card>
                <Card.Img variant="top" src={dolla} alt="nope"/>
                <Card.Body>
                    <Card.Title>{props.reward.desc}</Card.Title>
                    <Card.Text>
                        <text>Point Cost: {props.reward.cost}</text><br/>
                        <text>Available: {props.reward.num_available}</text>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Reward
