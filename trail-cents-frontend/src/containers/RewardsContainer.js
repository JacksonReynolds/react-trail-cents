import React, { Component } from 'react'
import RewardsList from '../components/rewards/RewardsList'
import Reward from '../components/rewards/Reward'
import { connect } from 'react-redux'

class RewardsContainer extends Component {
    render() {
        return (
            <div className="rewards-container">
                <RewardsList rewards={this.props.rewards}/>
            </div>
        )
    }
}

export default connect()(RewardsContainer)
