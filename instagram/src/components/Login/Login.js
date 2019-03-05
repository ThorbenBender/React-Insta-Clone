import React, {Component} from 'react';

export default class Login extends Component{
    constructor() {
        super();
        this.state = {
            userName: '',
            userPassword: '',
        }
    }
    onInput = event => {
        if (event.target.type === 'password'){
            this.setState({userPassword: event.target.value })
        } else if (event.target.type === 'text') {
            this.setState({userName : event.target.value})
        }
    }
    login = () => {
        localStorage.setItem('userName', `${this.state.userName}`);
        localStorage.setItem('Auth', true);
        localStorage.setItem('userPassword', `${this.state.userPassword}`);
    }
    render() {
        return (
            <form>
                <div className="userInformation" onSubmit={this.login}> 
                    <input type="text" onChange={this.onInput} value={this.state.userName}></input>
                    <input type="password" onChange={this.onInput} value={this.state.userPassword}></input>
                </div>
                <button type="submit" onClick={this.login}>Log in</button>
            </form>
        )
    }
}