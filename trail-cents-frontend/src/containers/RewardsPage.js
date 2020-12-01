import React, { PureComponent } from 'react'
// import RewardsList from '../components/rewards/RewardsList'
import { connect } from 'react-redux'
import Reward from '../components/rewards/Reward'
import CardDeck from 'react-bootstrap/CardDeck'
import Error from '../components/Error'

// actions
import fetchRewards from '../actions/rewards/fetch'
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
                <Error errors={this.props.errors}/>
                <CardDeck>
                    {this.props.rewards.map(r => <Reward purchaseReward={this.purchaseReward} key={r.id} reward={r}/>)}
                </CardDeck>
            </div>
        )
    }
}

const mapStateToProps = ({rewards, user, errors}) => {
    return {
        user, rewards, errors
    }
}

export default connect(mapStateToProps, {fetchRewards, purchaseReward})(RewardsPage)
