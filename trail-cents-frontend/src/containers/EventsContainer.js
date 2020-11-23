import React, { Component } from 'react'
import { connect } from 'react-redux'
import fetchEvents from '../actions/events/fetch'
import EventsList from '../components/events/EventsList'

class EventsContainer extends Component {

    componentDidMount() {
        this.props.fetchEvents()
    }

    render() {
        return (
            <div className="events-container">
                <EventsList events={this.props.events}/>
            </div>
        )
    }
}

const mapStateToProps = ({events}) => {
    return {events}
}

export default connect(mapStateToProps,{fetchEvents})(EventsContainer)