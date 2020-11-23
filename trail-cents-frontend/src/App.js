import React, { Component } from 'react'
import NavBar from './components/NavBar.js'
import { connect } from 'react-redux'

class App extends Component {

  componentDidMount() {

  }

  isLoggedIn() {

  }

  render() {
    return (
      <div>
        <NavBar isLoggedIn={this.isLoggedIn()}/>
      </div>
    )
  }
}

export default connect(mapStateToProps)(App)