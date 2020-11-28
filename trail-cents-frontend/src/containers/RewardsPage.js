import React, { PureComponent } from 'react'
// import RewardsList from '../components/rewards/RewardsList'
import { connect } from 'react-redux'
import Reward from '../components/rewards/Reward'
import CardDeck from 'react-bootstrap/CardDeck'

// actions
import fetchRewards from '../actions/rewards/fetch'
import withdrawPoints from '../actions/users/withdrawPoints'
import purchaseReward from '../actions/rewards/purchaseReward'


class RewardsPage extends PureComponent {

    componentDidMount() {
        if (this.props.rewards.length === 0) {
            this.props.fetchRewards()
        }
    }

    purchaseReward = (reward) => {
        this.props.purchaseReward(this.props.user.id, reward.id)
    }

    render() {
        return (
            <div className="rewards-container">
                <CardDeck>
                    {this.props.rewards.map(r => <Reward purchaseReward={this.purchaseReward} key={r.id} reward={r}/>)}
                </CardDeck>
            </div>
        )
    }
}

const mapStateToProps = ({rewards, user}) => {
    return {
        user, rewards
    }
}

export default connect(mapStateToProps, {fetchRewards, withdrawPoints, purchaseReward})(RewardsPage)
