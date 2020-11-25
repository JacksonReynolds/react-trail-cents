import React, {PureComponent} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'
import { NavDropdown } from 'react-bootstrap'
import { connect } from 'react-redux'

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
                            <NavDropdown title="Events" id="nav-dropdown">
                                <NavDropdown.Item as={Link} to="/events">Events</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/volunteer">Volunteer</NavDropdown.Item>
                            </NavDropdown>
                            {!user.username && <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                            {!user.username && <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>}
                            {user.username && <Nav.Link as={Link} to="/logout" onClick={handleLogout}>Logout</Nav.Link>}
                        </Nav>
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
