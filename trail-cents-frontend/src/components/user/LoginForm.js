import React, { PureComponent } from 'react'

export default class LoginForm extends PureComponent {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = e => {
        this.setState(prevState => {
            return {
            ...prevState,
            [e.target.name]: e.target.value
        }})
    }

    handelSubmit = e => {
        e.preventDEfault()
        this.props.loginUser(this.state)
    }

    render() {
        return (
            <form>
                <label>Login Form</label><br/>
                
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
               
                <input 
                    type="submit"
                    value="Submit"/>

            </form>
        )
    }
}
