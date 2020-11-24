import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import SignupForm from '../components/user/SignupForm'
import Alert from 'react-bootstrap/Alert'
import addUser from '../actions/users/add'

class SignupPage extends PureComponent {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div>
                {Array.isArray(this.state.errors) && <Alert>Alert!</Alert>}
                <SignupForm addUser={this.props.addUser} />
            </div>
        )
        
    }
}

export default connect(null, {addUser})(SignupPage)