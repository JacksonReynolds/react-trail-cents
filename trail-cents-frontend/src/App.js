import React, { PureComponent } from 'react'
import NavBar from './components/NavBar.js'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import RewardsPage from './containers/RewardsPage'
import EventsPage from './containers/EventsPage'
import Container from 'react-bootstrap/Container'
import SignupPage from './containers/SignupPage'
import LoginPage from './containers/LoginPage'
import logoutUser from './actions/users/logout'
import { connect } from 'react-redux'

class App extends PureComponent {

  isLoggedIn = () => {
    return !!this.props.user.id
  }

  handleLogout = (e) => {
    localStorage.clear()
    this.props.logoutUser()
  }

  render() {
    return (
      <Container>
        <Router>
          <Route path="/" render={() => <NavBar handleLogout={this.handleLogout} />}/>
          <Switch>
            <Route exact path="/">
              <h1>HOME!</h1>
            </Route>
            <Route path="/rewards" >
              <RewardsPage />
            </Route>
            <Route path="/events">
              <EventsPage />
            </Route>
            <Route path="/signup">
              {this.isLoggedIn() ? <Redirect to="/" /> : <SignupPage />}
            </Route>
            <Route path="/login">
              {this.isLoggedIn() ? <Redirect to="/" /> : <LoginPage />}
            </Route>
            <Route path="/logout">
              <Redirect to="/"/>
            </Route>
          </Switch>
        </Router>
      </Container>
    )
  }
}

const mapStateToProps = ({user}) => {
  return {user}
}

export default connect(mapStateToProps, {logoutUser})(App)