import React from 'react'
import { connect } from 'react-redux'
import LoginForm from '../components/user/LoginForm'
import loginUser from '../actions/users/login'
import Error from '../components/Error'

const LoginPage = (props) => {
    let {user, loginUser} = props
    return (
        <div>
            <LoginForm loginUser={loginUser}/>
        </div>
    )
    
}

const mapStateToProps = ({user}) => {
    return {
        user
    }
}

export default connect(mapStateToProps, {loginUser})(LoginPage)
