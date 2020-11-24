import React, { PureComponent } from 'react'

export default class SignupForm extends PureComponent {
    constructor() {
        super()
        this.state = {
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = e => {
        this.setState(prevState => {
            return {
            ...prevState,
            [e.target.name]: e.target.value
        }})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(e)
        this.props.addUser()
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
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
                    name="confirmPassword"
                    onChange={this.handleChange}
                    value={this.state.confirmPassword}/><br/>
                <input 
                    type="submit"
                    value="Submit"/>

            </form>
        )
    }
}