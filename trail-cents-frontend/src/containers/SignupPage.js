import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import SignupForm from '../components/user/SignupForm'


class SignupPage extends PureComponent {
    constructor() {
        super()
        this.state = {
            errors: []
        }
    }

    render() {
        return (
            <div>
                <SignupForm />
            </div>
        )
        
    }
}

export default connect()(SignupPage)