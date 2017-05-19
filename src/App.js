import React, { Component } from 'react';
import JobList from './Components/JobList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <JobList />
      </div>
    );
  }
}

export default App;
