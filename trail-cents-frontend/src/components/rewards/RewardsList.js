import React from 'react'
import Reward from './Reward'
import CardDeck from 'react-bootstrap/CardDeck'
import Container from 'react-bootstrap/Container'

const RewardsList = (props) => {
    return (
        <Container className="rewards-list">
            <CardDeck>
                {props.rewards.map(r => <Reward key={r.id} reward={r}/>)}
            </CardDeck>
        </Container>
    )
}

export default RewardsList
