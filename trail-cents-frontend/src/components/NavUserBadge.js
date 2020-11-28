import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'

const NavUserBadge = (props) => {
    let {user} = props
    if (user.id) {
        return (
            <Navbar.Text>
                Signed in as: <Link to= '/'>{user.username}</Link> | {user.points} Points | <Link to='/logout' onClick={props.handleLogout  }>Logout</Link>
            </Navbar.Text>
        )
    } else {
        return (
            <Navbar.Text>
                <Link to="/login">Login</Link> | <Link to="/signup">Sign Up</Link>
            </Navbar.Text>
        )
    }
}

export default NavUserBadge
