import React, { Component } from 'react'
import { connect } from 'react-redux'
import fetchEvents from '../actions/events/fetch'
import EventsList from '../components/events/EventsList'

class EventsPage extends Component {
    constructor() {
        super()
        this.state = {
            highlightedEvent: null
        }
    }

    componentDidMount() {
        if (this.props.events.length === 0) {
            this.props.fetchEvents()
        }
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

export default connect(mapStateToProps,{fetchEvents})(EventsPage)