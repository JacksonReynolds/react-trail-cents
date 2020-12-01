import React from 'react'
import { connect } from 'react-redux'
import LoginForm from '../components/user/LoginForm'
import loginUser from '../actions/users/login'
import Error from '../components/Error'

const LoginPage = (props) => {
    let {loginUser, errors} = props
    return (
        <div>
            <Error errors={errors}/>
            <LoginForm loginUser={loginUser}/>
        </div>
    )
    
}

const mapStateToProps = ({user, errors}) => {
    return {
        user, errors
    }
}

export default connect(mapStateToProps, {loginUser})(LoginPage)
