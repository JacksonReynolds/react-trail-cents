import React, { Component } from 'react'
import NavBar from './components/NavBar.js'
import { connect } from 'react-redux'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import RewardsPage from './containers/RewardsPage'
import EventsPage from './containers/EventsPage'
import Container from 'react-bootstrap/Container'
import SignupPage from './containers/SignupPage'
import LoginPage from './containers/LoginPage'

class App extends Component {

  render() {
    return (
      <Container>
        <Router>
          <Route path="/" component={NavBar}/>
          <Switch>
            <Route path="/rewards" >
              <RewardsPage />
            </Route>
            <Route path="/events">
              <EventsPage />
            </Route>
            <Route path="/signup">
              <SignupPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/logout">
              {/* logout??? */}
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