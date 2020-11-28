import React, { Component } from 'react'
import { connect } from 'react-redux'
import fetchEvents from '../actions/events/fetch'

import CardDeck from 'react-bootstrap/CardDeck'
import Event from '../components/events/Event'

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


    render() {
        return (
            <div className="events-container">
                <CardDeck>
                    {this.props.events.map(e => <Event key={e.id} event={e}/>)}
                </CardDeck>  
                {this.state.focusedEvent ? <Event event={this.state.focusedEvent} focused={true}/> : null}          
            </div>
        )
    }
}

const mapStateToProps = ({events}) => {
    return {events}
}

export default connect(mapStateToProps,{fetchEvents})(EventsPage)