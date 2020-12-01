import React from 'react'
import { connect } from 'react-redux'
import LoginForm from '../components/user/LoginForm'
import loginUser from '../actions/users/login'

const LoginPage = (props) => {
    let {loginUser} = props
    return (
        <div>
            <Error errors={this.props.errors}/>
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
