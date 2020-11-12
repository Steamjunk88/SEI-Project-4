import React, { Component } from 'react'

class RegisterForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <form onSubmit={(e) => this.props.handleRegister(e, this.state)} >
                <input
                    type='text'
                    name='username'
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <input
                    type='password'
                    name='password'
                    value={this.state.password}
                    onChange={this.handleChange}
                />
                <input type='submit' value='Register' />
            </form>
        )
    }
}


export default RegisterForm