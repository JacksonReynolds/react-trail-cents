import React, { PureComponent } from 'react'
import NavBar from './components/NavBar.js'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import RewardsPage from './containers/RewardsPage'
import EventsPage from './containers/EventsPage'
import Container from 'react-bootstrap/Container'
import SignupPage from './containers/SignupPage'
import LoginPage from './containers/LoginPage'

class App extends PureComponent {

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
            <Route path="logout">
              {this.props.removeUser() && }
            </Route>
          </Switch>
        </Router>
      </Container>
      
    )
  }
}

export default App