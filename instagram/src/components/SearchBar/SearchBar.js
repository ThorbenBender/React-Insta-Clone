import React, {Component} from 'react';
import './SearchBar.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    render() {
        return (
            <div className="SearchBar">
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
                    Icon 
                    Icon 
                    Icon 
                </div>
            </div>
        );
    }
}