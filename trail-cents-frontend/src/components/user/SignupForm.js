import React, { PureComponent } from 'react'

export default class SignupForm extends PureComponent {
    constructor() {
        super()
        this.state = {
            username: '',
            email: '',
            password: '',
            password_confirmation: ''
        }
    }

    handleChange = e => {
        this.setState(prevState => {
            return {
            ...prevState,
            [e.target.name]: e.target.value
        }})
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addUser(this.state)
        this.setState({
            username: '',
            email: '',
            password: '',
            password_confirmation: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>New Volunteer Signup Form</label><br/>
                <label>Username: </label>
                <input 
                    type="text" 
                    name="username" 
                    onChange={this.handleChange} 
                    value={this.state.username}/><br/>
                <label>Email: </label>
                <input 
                    type="text" 
                    name="email" 
                    onChange={this.handleChange} 
                    value={this.state.email}/><br/>
                <label>Password: </label>
                <input 
                    type="password"
                    name="password"
                    onChange={this.handleChange}
                    value={this.state.password}/><br/>
                <label>Confirm Password: </label>
                <input
                    type="password"
                    name="password_confirmation"
                    onChange={this.handleChange}
                    value={this.state.password_confirmation}/><br/>
                <input 
                    type="submit"
                    value="Submit"/>

            </form>
        )
    }
}