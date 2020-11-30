import React, { PureComponent } from 'react'
import NavBar from './components/nav/NavBar.js'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'

// components
import Profile from './components/user/Profile'
import HomePage from './components/HomePage'
import RewardsPage from './containers/RewardsPage'
import EventsPage from './containers/EventsPage'
import Container from 'react-bootstrap/Container'
import SignupPage from './containers/SignupPage'
import LoginPage from './containers/LoginPage'

// actions
import logoutUser from './actions/users/logout'
import loginWithToken from './actions/users/loginWithToken'
import { connect } from 'react-redux'

class App extends PureComponent {

  componentDidMount() {
    if (localStorage.jwt) {
      this.props.loginWithToken(localStorage.jwt)
    }
  }

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
              {this.isLoggedIn() ? <Profile user={this.props.user} /> : <HomePage />}
            </Route>
            <Route path="/rewards" >
              <RewardsPage />
            </Route>
            <Route path="/events" render={routerProps => <EventsPage {...routerProps} />} />
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

export default connect(mapStateToProps, {logoutUser, loginWithToken})(App)