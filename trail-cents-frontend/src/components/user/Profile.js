import React from 'react'

const Profile = (props) => {
    let {user} = props
    return (
        <div>
            Welcome, {user.username}! You have {user.points} points available.  Check out the rewards page to see if
            you've got enough to redeem some swag!
        </div>
    )
}

export default Profile
