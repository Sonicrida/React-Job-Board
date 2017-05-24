import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import App from './App';
import JobPostDetail from './Components/JobPostDetail'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const networkInterface = createNetworkInterface({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT
});

const client = new ApolloClient({
  networkInterface
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <div>

        <h1>React Job Board</h1>

        <Route exact path='/' component={App} />
        <Route path='/job-post/:id' component={JobPostDetail} />
      </div>
      
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);
registerServiceWorker();
