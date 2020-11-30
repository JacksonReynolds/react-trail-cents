import React, {PureComponent} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import NavUserBadge from './NavUserBadge'

class NavBar extends PureComponent {

    render() {
        let {user, handleLogout} = this.props
        // debugger
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/rewards">Rewards</Nav.Link>
                            <Nav.Link as={Link} to="/events">Events</Nav.Link>
                        </Nav>
                        <NavUserBadge user={user} handleLogout={handleLogout}/>
                    </Navbar.Collapse>
                </Navbar>
            </>
        )
    }
    
}

const mapStateToProps = ({user}) => {
    return {user}
}

export default connect(mapStateToProps)(NavBar)
