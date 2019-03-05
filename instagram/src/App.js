import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './dummy-data';
import PostsPage from './components/PostContainer/PostsPage';
import authenticate from './components/authentication/authenticate';
import Login from './components/Login/Login';
import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 60%;
  margin: 0 auto;
`

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: [],
    }
  }
  // addNewComment = (event, idx) => {
  //   console.log(event.target.value);
  // }
  componentDidMount() {
    this.setState({
      dummyData: dummyData,
    })
  }
  filterPost = item => {
    let newArray = this.state.dummyData.filter(data => data.username.includes(item));
    console.log(newArray);
    this.setState({dummyData: newArray});
  }
  render() {
    return (
      <StyledHeader>
        <SearchBar filterPost={this.filterPost}/>
      <div>
        <PostsPage dummyData={this.state.dummyData} />
      </div>
      </StyledHeader>
    );
  }
}

let NewApp = authenticate(App, Login);

export default NewApp;
