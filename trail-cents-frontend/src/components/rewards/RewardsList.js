import React from 'react'
import Reward from './Reward'

const RewardsList = (props) => {
    return (
        <ul>
           {props.rewards.map(r => <Reward key={r.id} id={r.id} reward={r}/>)} 
        </ul>
    )
}

export default RewardsList
