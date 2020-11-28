import React, { Component } from 'react'
import { connect } from 'react-redux'
import fetchEvents from '../actions/events/fetch'

import CardDeck from 'react-bootstrap/CardDeck'
import Event from '../components/events/Event'
import volunteerForEvent from '../actions/users/volunteerForEvent'

class EventsPage extends Component {
    constructor() {
        super()
        this.state = {
            focusedEvent: null
        }
    }

    componentDidMount() {
        if (this.props.events.length === 0) {
            this.props.fetchEvents()
        }
    }

    handleClick = event => {
        this.props.volunteerForEvent(this.props.user.id, event.id)
    }

    render() {
        return (
            <div className="events-container">
                <CardDeck>
                    {this.props.events.map(e => <Event handleClick={this.handleClick} key={e.id} event={e}/>)}
                </CardDeck>  
                {this.state.focusedEvent ? <Event event={this.state.focusedEvent} focused={true}/> : null}          
            </div>
        )
    }
}

const mapStateToProps = ({user, events}) => {
    return {user, events}
}

export default connect(mapStateToProps,{fetchEvents, volunteerForEvent})(EventsPage)