import React from 'react'
import { connect } from 'react-redux'
import SignupForm from '../components/user/SignupForm'
import addUser from '../actions/users/add'

const SignupPage = props => {
    let {addUser} = props
    return (
        <div>
            <SignupForm addUser={addUser} />
        </div>
    )
        
    
}

const mapStateToProps = ({user}) => {
    return {
        user
    }
}

export default connect(mapStateToProps, {addUser})(SignupPage)