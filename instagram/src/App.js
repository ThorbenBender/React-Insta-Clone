import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData,
      comments: dummyData.comments,
    }
  }
  componentDidMount() {
    this.setState({
      dummyData: dummyData,
    })
  }
  render() {
    return (
      <div className="app">
        <SearchBar />
        <div>
          {
          this.state.dummyData.map((data, idx) => {
            return <PostContainer data={data} key={idx} comments={this.state.comments}/>
          })
        }
        </div>
      </div>
    );
  }
}

export default App;
