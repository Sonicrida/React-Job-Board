import React, { Component } from 'react';
import JobList from './Components/JobList';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

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
