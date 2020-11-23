import React, { Component } from 'react'
import { connect } from 'react-redux'
import fetchEvents from '../actions/events/fetch'

class EventsContainer extends Component {

    componentDidMount() {
        this.props.fetchEvents()
    }

    render() {
        return (
            <div>
                <h2>Events</h2>
            </div>
        )
    }
}

const mapStateToProps = ({events}) => {
    return {events}
}

export default connect(mapStateToProps,{fetchEvents})(EventsContainer)