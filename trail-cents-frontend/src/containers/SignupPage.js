import React from 'react'
import { connect } from 'react-redux'
import SignupForm from '../components/user/SignupForm'
import addUser from '../actions/users/add'
import Error from '../components/Error'

const SignupPage = props => {
    let {addUser, errors} = props
    return (
        <div>
            <Error errors={errors}/>
            <SignupForm addUser={addUser} />
        </div>
    )
        
    
}

const mapStateToProps = ({user, errors}) => {
    return {
        user, errors
    }
}

export default connect(mapStateToProps, {addUser})(SignupPage)