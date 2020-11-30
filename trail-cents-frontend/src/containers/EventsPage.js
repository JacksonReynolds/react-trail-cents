import React, { Component } from 'react'
import { connect } from 'react-redux'
import fetchEvents from '../actions/events/fetch'

import CardDeck from 'react-bootstrap/CardDeck'
import Event from '../components/events/Event'
import volunteerForEvent from '../actions/users/volunteerForEvent'
import {Route} from 'react-router-dom'
import EventDetail from './EventDetail'

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
        let {match, events, user} = this.props
        return (
            <div className="events-container">
                <CardDeck>
                    {events.map(e => <Event user={user} handleClick={this.handleClick} key={e.id} event={e}/>)}
                </CardDeck>  
                <Route path={`${match.url}/:movieId`} render={routerProps => <EventDetail {...routerProps} user={user} events={events}/>}  />
            </div>
        )
    }
}

const mapStateToProps = ({user, events}) => {
    return {user, events}
}

export default connect(mapStateToProps,{fetchEvents, volunteerForEvent})(EventsPage)