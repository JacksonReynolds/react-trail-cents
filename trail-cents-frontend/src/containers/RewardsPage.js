import React, { PureComponent } from 'react'
import RewardsList from '../components/rewards/RewardsList'
import fetchRewards from '../actions/rewards/fetch'
import { connect } from 'react-redux'

class RewardsPage extends PureComponent {

    componentDidMount() {
        this.props.fetchRewards()
    }

    render() {
        return (
            <div className="rewards-container">
                <RewardsList rewards={this.props.rewards}/>
            </div>
        )
    }
}

const mapStateToProps = ({rewards}) => {
    return {
        rewards
    }
}

export default connect(mapStateToProps, {fetchRewards})(RewardsPage)
