import React, { Component } from 'react'
import NavBar from './components/NavBar.js'
import { connect } from 'react-redux'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import RewardsContainer from './containers/RewardsContainer'
import EventsContainer from './containers/EventsContainer'
import Container from 'react-bootstrap/Container'

class App extends Component {

  render() {
    return (
      <Container>
        <Router>
          <Route path="/" component={NavBar}/>
          <Switch>
            <Route exact path="/rewards" >
              <RewardsContainer />
            </Route>
            <Route path="/events">
              <EventsContainer />
            </Route>
          </Switch>
        </Router>
      </Container>
      
    )
  }
}

const mapStateToProps = ({user}) => {
  return {
    user
  }
}

export default connect(mapStateToProps)(App)