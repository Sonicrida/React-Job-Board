import React, { Component } from 'react';
import JobPost from './Components/JobPost';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <JobPost />
      </div>
    );
  }
}

export default App;
