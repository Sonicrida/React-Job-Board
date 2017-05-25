import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import JobList from './Components/JobList';
import JobPostDetailContainer from './Components/JobPostDetailContainer'
import Nav from './Components/Nav';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (

      <Router>

        
        
        <div className="App container col-md-6 col-md-offset-3">
          <Nav />
          <Route exact path='/' component={JobList} />
          <Route path='/job-post/:id' component={JobPostDetailContainer} />
        </div>
        
      </Router>

      

        

      
    );
  }
}

export default App;
