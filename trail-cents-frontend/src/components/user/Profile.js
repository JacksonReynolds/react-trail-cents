import React from 'react'

const Profile = (props) => {
    return (
        <div>
            Welcome, {props.user.username}!
        </div>
    )
}

export default Profile
