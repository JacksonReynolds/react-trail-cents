import React from 'react'
import Card from 'react-bootstrap/Card'
import dolla from '../../imgs/dollas.jpg'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'

const Reward = (props) => {
    let {reward, user, purchaseReward} = props
    return (
        <>
            <Card>
                <Card.Img variant="top" src={dolla} alt="nope"/>
                <Card.Body>
                    <Card.Title>{reward.desc}</Card.Title>
                    <Card.Text>
                        Point Cost: {reward.cost}<br/>
                        Available: {reward.num_available}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    {user.id ? <Button onClick={() => purchaseReward(reward)}>Cash In</Button> : <p>Sign Up to Redeem Points for Swag!</p>}
                </Card.Footer>
            </Card>
        </>
    )
}

const mapStateToProps = ({user}) => {
    return {user}
}

export default connect(mapStateToProps)(Reward)
