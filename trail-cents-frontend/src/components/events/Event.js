import React from 'react'
import Card from 'react-bootstrap/Card'
import tf from '../../imgs/trailforks_avatar.png'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button'

const Event = (props) => {
    return (
        <>
            <Card>
                <Card.Img variant="top" src={tf} alt="nope"/>
                <Card.Body>
                    <Card.Title>{props.event.title}</Card.Title>
                    <Card.Text>
                        Date: {props.event.date} <br/>
                        {props.event.desc} <br/>
                        Points Earned: {props.event.duration}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    {props.user.id ? <Button onClick={e => props.handleClick(props.event)}>Register for Event</Button> : "Sign Up To Volunteer and Earn Rewards!"}
                </Card.Footer>
            </Card>
        </>
    )
}

const mapStateToProps = ({user}) => {
    return {user}
}

export default connect(mapStateToProps)(Event)