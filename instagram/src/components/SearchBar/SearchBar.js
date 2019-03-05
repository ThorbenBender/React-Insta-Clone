import React, {Component} from 'react';
import { log } from 'util';
import styled from 'styled-components';

const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    .SearchBarIcon{
        font-size: 2rem;
    }
`

export default class SearchBar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        }
    }
    lookForUser = (event) => {
        this.setState({inputValue: event.target.value})
    }
    onClickHandler = event => {
        event.preventDefault();
        this.props.filterPost(this.state.inputValue);
    }
    logOut = () => {
        localStorage.setItem('Auth', false);
    }
    render() {
        return (
            <StyledHeader>
                <div className="SearchBarIcon">
                    Logo
                </div>
                <div className="SearchBarTitle">
                    <h2>Instagram</h2>
                </div>
                <form className="SearchBarInput" onSubmit={this.onClickHandler}>
                    <input type="text" onChange={this.lookForUser} value={this.state.inputValue}></input>
                </form>
                <div className="SearchBarIcons">
                    <button onClick={this.logOut}>Log Out</button>
                    <button>About</button>
                    <button>Contact</button>
                </div>
            </StyledHeader>
        );
    }
}