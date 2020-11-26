import React from 'react'
import Event from './Event'
import CardDeck from 'react-bootstrap/CardDeck'
import Container from 'react-bootstrap/Container'

const EventsList = (props) => {
    return (
        <Container className="events-list">
            <CardDeck>
                {props.events.map(e => <Event key={e.id} event={e}/>)}
            </CardDeck>
        </Container>
        
    )
}

export default EventsList
