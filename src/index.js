import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'bulma/css/bulma.css';

const networkInterface = createNetworkInterface({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT
});

const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: o => o.id
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>,
  document.getElementById('root')
);
registerServiceWorker();
