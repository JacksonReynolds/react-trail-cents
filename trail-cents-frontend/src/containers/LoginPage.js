import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginForm from '../components/user/LoginForm'
import loginUser from '../actions/users/login'
import Alert from 'react-bootstrap/Alert'

class LoginPage extends Component {
    render() {
        let {user, loginUser} = this.props
        return (
            <div>
                {user.errors && <Alert variant={'warning'}><ul>{user.errors.map(e => <li>{e}</li>)}</ul></Alert>}
                <LoginForm loginUser={loginUser}/>
            </div>
        )
    }
}

const mapStateToProps = ({user}) => {
    return {
        user
    }
}

export default connect(mapStateToProps, {loginUser})(LoginPage)
