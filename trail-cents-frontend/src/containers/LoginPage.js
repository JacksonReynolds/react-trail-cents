import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginForm from '../components/user/LoginForm'

class LoginPage extends Component {
    render() {
        return (
            <div>
                <LoginForm />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
