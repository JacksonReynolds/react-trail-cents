import React, { Component } from 'react'
import { connect } from 'react-redux'
import fetchEvents from '../actions/events/fetch'

import CardDeck from 'react-bootstrap/CardDeck'
import Event from '../components/events/Event'
import volunteerForEvent from '../actions/users/volunteerForEvent'
import {Route} from 'react-router-dom'
import EventDetail from '../components/events/EventDetail'
import Error from '../components/Error'

class EventsPage extends Component {

    componentDidMount() {
        if (this.props.events.length === 0) {
            this.props.fetchEvents()
        }
    }

    handleClick = event => {
        this.props.volunteerForEvent(this.props.user.id, event.id)
    }

    render() {
        let {errors, match, events, user} = this.props
        return (
            <div className="events-container">
                <Error errors={errors} />
                <CardDeck>
                    {events.map(e => <Event user={user} handleClick={this.handleClick} key={e.id} event={e}/>)}
                </CardDeck>  
                <Route path={`${match.url}/:eventId`} render={routerProps => <EventDetail {...routerProps} user={user} events={events}/>}  />
            </div>
        )
    }
}

const mapStateToProps = ({user, events, errors}) => {
    return {user, events, errors}
}

export default connect(mapStateToProps,{fetchEvents, volunteerForEvent})(EventsPage)