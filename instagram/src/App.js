import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './dummy-data';
import PostsPage from './components/PostContainer/PostsPage';

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
    let newArray = this.state.dummyData.filter(data => data.username === item);
    console.log(newArray);
    this.setState({dummyData: newArray});
  }
  render() {
    return (
      <div className="app">
        <SearchBar filterPost={this.filterPost}/>
      <div>
        <PostsPage dummyData={this.state.dummyData} />
      </div>
      </div>
    );
  }
}

export default App;
