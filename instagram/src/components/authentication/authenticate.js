import React from 'react';


export function authenticate(App, Login) {
    return class Authenticate  extends React.Component {
        state = {
            loggedin: true,
        }
        // componentDidUpdate() {
        //     let item = localStorage.getItem('Auth');
        //     if(this.state.loggedin !== item) {
        //         this.setState({loggedin: this.state.loggedin});
        //         console.log(this.state.loggedin);
        //     }
        // }
        // componentDidMount() {
        //     let item = localStorage.getItem('Auth');
        //     this.setState({loggedin: true})
        // }
        render() {
            if (this.state.loggedin) {
                return (
                    <App />
                )
            }
            else {
                return (
                    <Login />
                )
            }
        }
    }
}

export default authenticate;