import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import JobList from './Components/JobList';
import JobPostDetailContainer from './Components/JobPostDetailContainer';
import Nav from './Components/Nav';
import CreateJobPost from './Components/CreateJobPost';
import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="">

                    <Nav />

                    <Switch>
                        <Route exact path="/" component={JobList} />
                        <Route path="/job-post/:id" component={JobPostDetailContainer} />
                        <Route path="/create-job-post" component={CreateJobPost} />
                    </Switch>
                    <footer className="footer has-text-centered">Footer Text</footer>
                </div>
            </Router>
        );
    }
}

export default App;
