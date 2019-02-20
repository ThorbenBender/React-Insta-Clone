import React, {Component} from 'react';

export default class Login extends Component{
    constructor() {
        super();
        this.state = {
            userName: '',
            userPassword: '',
        }
    }
    login = () => {
        
    }
    render() {
        return (
            <form>
                <div className="userInformation" onSubmit={this.login}> 
                    <input type="text" value={this.state.userName}></input>
                    <input type="password" value={this.state.userPassword}></input>
                </div>
                <button type="submit" onClick={this.login}>Log in</button>
            </form>
        )
    }
}