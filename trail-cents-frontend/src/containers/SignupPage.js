import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import SignupForm from '../components/user/SignupForm'
import Alert from 'react-bootstrap/Alert'
import addUser from '../actions/users/add'

class SignupPage extends PureComponent {
    render() {
        let {user, addUser} = this.props
        return (
            <div>
                {user.errors && <Alert variant={'warning'}><ul>{user.errors.map(e => <li>{e}</li>)}</ul></Alert>}
                <SignupForm addUser={addUser} />
            </div>
        )
        
    }
}

const mapStateToProps = ({user}) => {
    return {
        user
    }
}

export default connect(mapStateToProps, {addUser})(SignupPage)