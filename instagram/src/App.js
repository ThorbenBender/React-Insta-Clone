import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';

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
  render() {
    return (
      <div className="app">
        <SearchBar />
        <div>
          {
          this.state.dummyData.map((data, idx) => 
            <PostContainer data={data} key={idx} id={idx}/>
          )
        }
        </div>
      </div>
    );
  }
}

export default App;
